import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { gsap } from "gsap";
import { ArrowLeft, Target, Sparkles, AlertTriangle, Upload, FileText, CheckCircle2, RotateCcw } from "lucide-react";
import { missionApi, type MissionQuestion } from "../api/missionApi";
import { useSubject } from "../hooks/useSubject";
import "../styles.interland.css";

const RealityRiver = () => {
    const navigate = useNavigate();
    const canvasRef = useRef<HTMLDivElement>(null);
    const quizCardRef = useRef<HTMLDivElement>(null);
    const setupCardRef = useRef<HTMLDivElement>(null);

    const { selectedSubject } = useSubject();

    // Three.js refs for animation
    const sceneRef = useRef<THREE.Scene | null>(null);
    const avatarRef = useRef<THREE.Group | null>(null);
    const bridgesRef = useRef<THREE.Group | null>(null);

    // Game State
    const [stage, setStage] = useState<"setup" | "loading" | "playing" | "complete">("setup");
    const [questions, setQuestions] = useState<MissionQuestion[]>([]);
    const [qIndex, setQIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    // Input State
    const [inputTab, setInputTab] = useState<"upload" | "paste">("upload");
    const [files, setFiles] = useState<File[]>([]);
    const [notesText, setNotesText] = useState("");
    const [error, setError] = useState("");

    const canLaunch = files.length > 0 || notesText.trim().length > 50;
    const currentQ = questions[qIndex];

    // 1. Initialize 3D Scene
    useEffect(() => {
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x75bbfd);
        scene.fog = new THREE.Fog(0x75bbfd, 10, 40);
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 5, 12);
        camera.lookAt(0, 0, -5);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        canvasRef.current.appendChild(renderer.domElement);

        const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
        scene.add(hemi);
        const sun = new THREE.DirectionalLight(0xffffff, 1.5);
        sun.position.set(10, 20, 10);
        sun.castShadow = true;
        scene.add(sun);

        // Environment: River and Banks
        const geoRiver = new THREE.PlaneGeometry(100, 30);
        const matRiver = new THREE.MeshStandardMaterial({ color: 0x4dabf7, transparent: true, opacity: 0.8 });
        const river = new THREE.Mesh(geoRiver, matRiver);
        river.rotation.x = -Math.PI / 2;
        river.position.y = -1;
        scene.add(river);

        const geoBank = new THREE.BoxGeometry(20, 3, 10);
        const matBank = new THREE.MeshStandardMaterial({ color: 0x69db7c, flatShading: true }); // Green

        // Start Bank
        const bankStart = new THREE.Mesh(geoBank, matBank);
        bankStart.position.set(0, -2, 4);
        bankStart.receiveShadow = true;
        scene.add(bankStart);

        // End Bank
        const bankEnd = new THREE.Mesh(geoBank, matBank);
        bankEnd.position.set(0, -2, -20);
        bankEnd.receiveShadow = true;
        scene.add(bankEnd);

        // Bridge Group (populated as questions are answered)
        const bridges = new THREE.Group();
        bridges.position.set(0, -0.5, 0);
        scene.add(bridges);
        bridgesRef.current = bridges;

        // Avatar
        const avatar = new THREE.Group();
        const matBody = new THREE.MeshStandardMaterial({ color: 0xff6b6b, flatShading: true });
        const body = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.2, 4), matBody);
        body.position.y = 0.6;
        body.castShadow = true;
        const head = new THREE.Mesh(new THREE.DodecahedronGeometry(0.4, 0), matBody);
        head.position.y = 1.4;
        head.castShadow = true;
        avatar.add(body);
        avatar.add(head);
        avatar.position.set(0, -0.5, 2); // Start pos on bank
        scene.add(avatar);
        avatarRef.current = avatar;

        const clock = new THREE.Clock();
        let frameId: number;
        const animate = () => {
            const time = clock.getElapsedTime();

            // Floating river effect
            river.position.y = -1 + Math.sin(time * 2) * 0.1;

            // Avatar idle bobbing
            if (!isAnimating && avatarRef.current) {
                avatarRef.current.position.y = -0.5 + Math.sin(time * 3) * 0.05;
            }

            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", handleResize);
            if (canvasRef.current) canvasRef.current.innerHTML = "";
            renderer.dispose();
        };
    }, [isAnimating]);

    // GSAP Animations for Modals
    useEffect(() => {
        if (stage === "setup" && setupCardRef.current) {
            gsap.fromTo(setupCardRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
        }
    }, [stage]);

    useEffect(() => {
        if (stage === "playing" && quizCardRef.current && !isAnimating) {
            gsap.fromTo(quizCardRef.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.2)" });
        }
    }, [qIndex, stage, isAnimating]);

    const handleStart = async () => {
        if (!canLaunch) return;
        setStage("loading");
        setError("");

        try {
            const result = await missionApi.buildMission({
                files,
                notesText,
                subject: selectedSubject || { id: "test", name: "General", folderId: "f1", isExam: false }
            });
            setQuestions(result.questions);
            setStage("playing");
            setQIndex(0);
            setScore(0);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load mission");
            setStage("setup");
        }
    };

    const handleAnswer = (optIndex: number) => {
        if (isAnimating || selectedOpt !== null) return;

        setSelectedOpt(optIndex);
        setIsAnimating(true);

        const isCorrect = optIndex === currentQ.answerIndex;

        if (isCorrect) {
            setScore(s => s + 100);

            // Build bridge tile physically
            if (bridgesRef.current && avatarRef.current) {
                const zPos = 2 - ((qIndex + 1) * 3); // Move forward 3 units per question

                const geoTile = new THREE.BoxGeometry(2, 0.5, 2);
                const matTile = new THREE.MeshStandardMaterial({ color: 0xfcc419 });
                const tile = new THREE.Mesh(geoTile, matTile);
                tile.position.set(0, -10, zPos); // Start below water
                bridgesRef.current.add(tile);

                // Animate tile up
                gsap.to(tile.position, {
                    y: -0.5,
                    duration: 0.5,
                    ease: "back.out(1.5)"
                });

                // Animate avatar jump
                gsap.to(avatarRef.current.position, {
                    z: zPos,
                    duration: 0.6,
                    delay: 0.2
                });
                gsap.to(avatarRef.current.position, {
                    y: 1,
                    duration: 0.3,
                    delay: 0.2,
                    yoyo: true,
                    repeat: 1
                });
            }
        } else {
            // Shake animation for wrong answer
            if (quizCardRef.current) {
                gsap.fromTo(quizCardRef.current,
                    { x: -10 },
                    {
                        x: 10, duration: 0.1, yoyo: true, repeat: 5, ease: "linear", onComplete: () => {
                            gsap.set(quizCardRef.current, { x: 0 });
                        }
                    }
                );
            }
        }

        // Wait before next question
        setTimeout(() => {
            if (qIndex + 1 >= questions.length || !isCorrect) {
                // End game if wrong or all done
                setStage("complete");
            } else {
                setQIndex(idx => idx + 1);
                setSelectedOpt(null);
            }
            setIsAnimating(false);
        }, 1500);
    };

    return (
        <div className="interland-wrapper">
            <div ref={canvasRef} className="interland-canvas-container" />

            {/* HUD */}
            <div className="interland-header">
                <button className="interland-btn-icon" onClick={() => navigate("/interland")}>
                    <ArrowLeft size={20} /> Exit
                </button>
                {stage === "playing" && (
                    <div className="hud-panel">
                        <span className="hud-score"><Sparkles size={16} /> {score} XP</span>
                        <span className="hud-progress"><Target size={16} /> Q{qIndex + 1}/{questions.length}</span>
                    </div>
                )}
            </div>

            {/* Setup Modal */}
            {stage === "setup" && (
                <div className="interland-action-card" ref={setupCardRef} style={{ bottom: "20%", maxWidth: "500px" }}>
                    <h2 style={{ color: "#4dabf7" }}>Reality River</h2>
                    <p>Don't fall for fake info! Answer correctly to build your bridge.</p>

                    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                        <button
                            className={`interland-btn-secondary ${inputTab === 'upload' ? 'active' : ''}`}
                            onClick={() => setInputTab("upload")} style={{ flex: 1 }}>
                            <Upload size={14} style={{ marginRight: '5px' }} /> Upload
                        </button>
                        <button
                            className={`interland-btn-secondary ${inputTab === 'paste' ? 'active' : ''}`}
                            onClick={() => setInputTab("paste")} style={{ flex: 1 }}>
                            <FileText size={14} style={{ marginRight: '5px' }} /> Paste
                        </button>
                    </div>

                    {inputTab === "upload" && (
                        <div style={{ border: '2px dashed #ccc', padding: '20px', borderRadius: '8px', cursor: 'pointer', marginBottom: '20px' }}
                            onClick={() => document.getElementById('river-upload')?.click()}>
                            <input
                                id="river-upload"
                                type="file" multiple
                                style={{ display: 'none' }}
                                onChange={(e) => setFiles(Array.from(e.target.files || []))}
                            />
                            <p style={{ margin: 0, fontWeight: 'bold' }}>{files.length ? `${files.length} files selected` : "Click to select notes"}</p>
                        </div>
                    )}

                    {inputTab === "paste" && (
                        <textarea
                            style={{ width: '100%', height: '100px', padding: '10px', borderRadius: '8px', borderColor: '#ccc', marginBottom: '20px' }}
                            placeholder="Paste your study notes here..."
                            value={notesText}
                            onChange={e => setNotesText(e.target.value)}
                        />
                    )}

                    {error && <p style={{ color: '#fa5252', fontWeight: 700 }}><AlertTriangle size={14} /> {error}</p>}

                    <button
                        className="interland-btn-primary"
                        style={{ width: '100%' }}
                        onClick={handleStart}
                        disabled={!canLaunch}>
                        Start Building
                    </button>
                </div>
            )}

            {/* Loading */}
            {stage === "loading" && (
                <div className="interland-title-card">
                    <h1>Generating River Path...</h1>
                </div>
            )}

            {/* Quiz Overlay */}
            {stage === "playing" && currentQ && (
                <div className="quiz-overlay">
                    <div className="quiz-card" ref={quizCardRef}>
                        <h3>{currentQ.prompt}</h3>
                        <div className="quiz-options">
                            {currentQ.options.map((opt, i) => {
                                let cName = "quiz-option-btn";
                                if (selectedOpt !== null) {
                                    if (i === currentQ.answerIndex) cName += " correct";
                                    else if (i === selectedOpt) cName += " wrong";
                                }
                                return (
                                    <button
                                        key={i}
                                        className={cName}
                                        disabled={selectedOpt !== null}
                                        onClick={() => handleAnswer(i)}
                                    >
                                        {opt}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Complete/Game Over Modal */}
            {stage === "complete" && (
                <div className="interland-action-card" style={{ bottom: "20%" }}>
                    <h2>{score > 0 && selectedOpt === currentQ?.answerIndex ? "River Crossed!" : "Splash! Try Again"}</h2>
                    <p>You earned {score} XP.</p>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        <button className="interland-btn-primary" onClick={() => setStage("setup")}>
                            <RotateCcw size={16} /> Replay
                        </button>
                        <button className="interland-btn-secondary" onClick={() => navigate("/interland")}>
                            <CheckCircle2 size={16} /> Done
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RealityRiver;
