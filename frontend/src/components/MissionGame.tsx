import {
  AlertTriangle,
  CheckCircle2,
  FileText,
  Flag,
  RotateCcw,
  Sparkles,
  Target,
  Trophy,
  Upload,
  X
} from "lucide-react";
import lottie from "lottie-web";
import { gsap } from "gsap";
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { missionApi, type MissionQuestion } from "../api/missionApi";
import type { Subject } from "../types/subject";

type MissionStage = "briefing" | "loading" | "running" | "complete";
type InputTab = "upload" | "paste";

interface MissionGameProps {
  open: boolean;
  subject: Subject;
  onClose: () => void;
  onShowMessage: (message: string) => void;
}

const padPositions: Array<[number, number, number]> = [
  [-2.4, -2.1, 2.3],
  [-0.8, -2.2, 1.3],
  [0.8, -2.2, 1.3],
  [2.4, -2.1, 2.3]
];

const padDefault = "#f4f7ff";
const padAnswer = "#5fd19f";
const padWrong = "#f37f8b";

const createFloatingIsland = (seed: number, topColor: number) => {
  const island = new THREE.Group();

  const rock = new THREE.Mesh(
    new THREE.CylinderGeometry(1.8, 0.7, 2.1, 6, 1),
    new THREE.MeshStandardMaterial({ color: 0x5b5f73, flatShading: true })
  );
  rock.position.y = -0.7;
  island.add(rock);

  const top = new THREE.Mesh(
    new THREE.CylinderGeometry(1.55, 1.6, 0.45, 6, 1),
    new THREE.MeshStandardMaterial({ color: topColor, flatShading: true })
  );
  top.position.y = 0.55;
  island.add(top);

  const crystal = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.2, 0),
    new THREE.MeshStandardMaterial({ color: 0x7ed9ff, emissive: 0x244764, flatShading: true })
  );
  crystal.position.set(0.2, 0.95, 0.05);
  island.add(crystal);

  island.position.set(seed * 2.8 - 5.6, Math.sin(seed) * 0.4 + 0.8, -seed * 1.8);
  return island;
};

const createAvatar = () => {
  const avatar = new THREE.Group();
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: 0x4572f2,
    flatShading: true
  });

  const body = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.95, 4), bodyMaterial);
  body.position.y = -1.45;
  avatar.add(body);

  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.95, 1.05, 0.7), bodyMaterial);
  torso.position.y = -0.55;
  avatar.add(torso);

  const head = new THREE.Mesh(new THREE.OctahedronGeometry(0.52, 0), bodyMaterial);
  head.position.y = 0.25;
  avatar.add(head);

  avatar.position.set(0, -0.2, 2.2);
  return avatar;
};

const MissionGame = ({ open, subject, onClose, onShowMessage }: MissionGameProps) => {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const nextTimerRef = useRef<number | null>(null);
  const padMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);

  const [stage, setStage] = useState<MissionStage>("briefing");
  const [inputTab, setInputTab] = useState<InputTab>("upload");
  const [files, setFiles] = useState<File[]>([]);
  const [notesText, setNotesText] = useState("");
  const [questions, setQuestions] = useState<MissionQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [streak, setStreak] = useState(0);
  const [warning, setWarning] = useState("");
  const [error, setError] = useState("");

  const currentQuestion = questions[questionIndex];
  const canLaunch = files.length > 0 || notesText.trim().length > 50;

  const progress = useMemo(() => {
    if (!questions.length || stage !== "running") {
      return 0;
    }
    return Math.round(((questionIndex + 1) / questions.length) * 100);
  }, [questionIndex, questions.length, stage]);

  const resetMission = useCallback(() => {
    setStage("briefing");
    setInputTab("upload");
    setFiles([]);
    setNotesText("");
    setQuestions([]);
    setQuestionIndex(0);
    setSelectedOptionIndex(null);
    setScore(0);
    setCorrectAnswers(0);
    setStreak(0);
    setWarning("");
    setError("");
  }, []);

  useEffect(() => {
    if (!open) {
      resetMission();
    }
  }, [open, resetMission]);

  useEffect(() => {
    if (!open || !sceneRef.current) {
      return;
    }

    const container = sceneRef.current;
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x90cdf3, 14, 42);

    const camera = new THREE.PerspectiveCamera(
      52,
      container.clientWidth / Math.max(1, container.clientHeight),
      0.1,
      120
    );
    camera.position.set(0, 1.8, 9.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const hemi = new THREE.HemisphereLight(0xd7f2ff, 0x435772, 1.2);
    scene.add(hemi);

    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
    sun.position.set(5, 8, 7);
    scene.add(sun);

    const islands: THREE.Group[] = [];
    const topColors = [0x6ae77a, 0x6bd3ff, 0xff934f, 0x83c3ff, 0x71efcb];
    topColors.forEach((color, index) => {
      const island = createFloatingIsland(index, color);
      islands.push(island);
      scene.add(island);
    });

    const avatar = createAvatar();
    scene.add(avatar);

    padMaterialsRef.current = [];
    padPositions.forEach((position) => {
      const pad = new THREE.Group();
      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(0.85, 0.72, 0.36, 6, 1),
        new THREE.MeshStandardMaterial({ color: 0xcc3f52, flatShading: true })
      );
      base.position.y = -0.25;
      pad.add(base);

      const topMaterial = new THREE.MeshStandardMaterial({ color: padDefault, flatShading: true });
      padMaterialsRef.current.push(topMaterial);
      const top = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.08, 6, 1), topMaterial);
      top.position.y = -0.02;
      pad.add(top);

      pad.position.set(position[0], position[1], position[2]);
      pad.rotation.y = Math.PI / 6;
      scene.add(pad);
    });

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / Math.max(1, height);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      islands.forEach((island, index) => {
        island.position.y += Math.sin(elapsed * 1.1 + index) * 0.002;
        island.rotation.y += 0.0012 + index * 0.0001;
      });

      avatar.position.y = -0.2 + Math.sin(elapsed * 2) * 0.09;
      avatar.rotation.y = Math.sin(elapsed * 0.8) * 0.16;
      camera.position.x = Math.sin(elapsed * 0.35) * 0.45;
      camera.lookAt(0, -0.4, 0.8);

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      scene.clear();
      container.innerHTML = "";
      padMaterialsRef.current = [];
    };
  }, [open]);

  useEffect(() => {
    if (!open || !badgeRef.current) {
      return;
    }

    const animation = lottie.loadAnimation({
      container: badgeRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets4.lottiefiles.com/packages/lf20_6hfubfpk.json"
    });

    return () => animation.destroy();
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, open]);

  useEffect(() => {
    const card = panelRef.current;
    if (!open || !card) {
      return;
    }
    gsap.fromTo(card, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.46, ease: "power3.out" });
  }, [open, stage, questionIndex]);

  useEffect(() => {
    const materials = padMaterialsRef.current;
    if (!materials.length) {
      return;
    }

    const answerIndex = currentQuestion?.answerIndex ?? -1;
    materials.forEach((material, index) => {
      let targetColor = padDefault;
      if (selectedOptionIndex !== null) {
        if (index === answerIndex) {
          targetColor = padAnswer;
        } else if (index === selectedOptionIndex) {
          targetColor = padWrong;
        }
      }
      gsap.to(material.color, {
        r: new THREE.Color(targetColor).r,
        g: new THREE.Color(targetColor).g,
        b: new THREE.Color(targetColor).b,
        duration: 0.25
      });
    });
  }, [currentQuestion, selectedOptionIndex]);

  useEffect(
    () => () => {
      if (nextTimerRef.current !== null) {
        window.clearTimeout(nextTimerRef.current);
      }
    },
    []
  );

  if (!open) {
    return null;
  }

  const closeMission = () => {
    if (nextTimerRef.current !== null) {
      window.clearTimeout(nextTimerRef.current);
    }
    resetMission();
    onClose();
  };

  const startMission = async () => {
    if (!canLaunch || stage === "loading") {
      return;
    }

    setError("");
    setWarning("");
    setStage("loading");

    try {
      const result = await missionApi.buildMission({
        files,
        notesText,
        subject
      });
      setQuestions(result.questions);
      setWarning(result.warning ?? "");
      setScore(0);
      setCorrectAnswers(0);
      setStreak(0);
      setQuestionIndex(0);
      setSelectedOptionIndex(null);
      setStage("running");
      onShowMessage("Mission ready. Pick the right route for each question.");
    } catch (missionError) {
      const message = missionError instanceof Error ? missionError.message : "Mission generation failed.";
      setError(message);
      setStage("briefing");
    }
  };

  const selectOption = (optionIndex: number) => {
    if (stage !== "running" || selectedOptionIndex !== null || !currentQuestion) {
      return;
    }

    setSelectedOptionIndex(optionIndex);
    const correct = optionIndex === currentQuestion.answerIndex;

    if (correct) {
      setCorrectAnswers((count) => count + 1);
      setStreak((current) => current + 1);
      setScore((current) => current + 120 + streak * 20);
      onShowMessage("Correct move. XP awarded.");
    } else {
      setStreak(0);
      onShowMessage(`Wrong platform. Correct answer: ${currentQuestion.options[currentQuestion.answerIndex]}`);
    }

    const isFinal = questionIndex + 1 >= questions.length;
    nextTimerRef.current = window.setTimeout(() => {
      if (isFinal) {
        setStage("complete");
        setSelectedOptionIndex(null);
        return;
      }
      setQuestionIndex((index) => index + 1);
      setSelectedOptionIndex(null);
    }, 950);
  };

  const onFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []);
    setFiles(selected);
  };

  const accuracy = questions.length ? Math.round((correctAnswers / questions.length) * 100) : 0;

  return (
    <div className="mission-overlay">
      <div className="mission-shell">
        <button type="button" className="mission-close" onClick={closeMission} aria-label="Close mission">
          <X size={20} />
        </button>

        <div className="mission-scene" ref={sceneRef} aria-hidden="true" />

        <header className="mission-hud">
          <div className="mission-hud__left">
            <span className="mission-pill">
              <Flag size={14} />
              Test Mission
            </span>
            <strong>{subject.name}</strong>
          </div>
          <div className="mission-hud__right">
            <span>
              <Target size={14} />
              {stage === "running" ? `${questionIndex + 1}/${questions.length}` : "Ready"}
            </span>
            <span>
              <Sparkles size={14} />
              {score} XP
            </span>
          </div>
        </header>

        <div className="mission-progress">
          <div style={{ width: `${progress}%` }} />
        </div>

        {(stage === "briefing" || stage === "loading") && (
          <section className="mission-panel mission-panel--briefing" ref={panelRef}>
            <h2>Launch mission from your own notes</h2>
            <p>
              Upload notes or paste text. Questions are generated directly from those notes, then played in this
              mission arena.
            </p>

            <div className="mission-tabs">
              <button
                type="button"
                className={inputTab === "upload" ? "active" : ""}
                onClick={() => setInputTab("upload")}
              >
                <Upload size={14} />
                Upload notes
              </button>
              <button
                type="button"
                className={inputTab === "paste" ? "active" : ""}
                onClick={() => setInputTab("paste")}
              >
                <FileText size={14} />
                Paste notes
              </button>
            </div>

            {inputTab === "upload" && (
              <label className="mission-upload">
                <input
                  type="file"
                  multiple
                  accept=".pdf,.docx,.pptx,.txt,.md,.csv,.png,.jpg,.jpeg"
                  onChange={onFileSelect}
                />
                <span>Drop files here or click to browse.</span>
                <small>Selected: {files.length ? files.map((file) => file.name).join(", ") : "None yet"}</small>
              </label>
            )}

            {inputTab === "paste" && (
              <textarea
                value={notesText}
                onChange={(event) => setNotesText(event.target.value)}
                placeholder="Paste your notes here. Use at least one detailed paragraph for good quiz generation."
              />
            )}

            {warning ? (
              <div className="mission-alert mission-alert--warning">
                <AlertTriangle size={16} />
                {warning}
              </div>
            ) : null}
            {error ? (
              <div className="mission-alert mission-alert--error">
                <AlertTriangle size={16} />
                {error}
              </div>
            ) : null}

            <button type="button" className="mission-cta" onClick={startMission} disabled={!canLaunch || stage === "loading"}>
              {stage === "loading" ? "Generating mission..." : "Start Mission"}
            </button>
          </section>
        )}

        {stage === "running" && currentQuestion && (
          <section className="mission-panel mission-panel--question" ref={panelRef}>
            <div className="mission-question-head">
              <span>Question {questionIndex + 1}</span>
              <span>Streak: {streak}</span>
            </div>
            <h3>{currentQuestion.prompt}</h3>
            <p className="mission-source">{currentQuestion.sourceRef}</p>

            <div className="mission-options">
              {currentQuestion.options.map((option, index) => {
                const chosen = selectedOptionIndex === index;
                const isAnswer = currentQuestion.answerIndex === index;
                const className =
                  selectedOptionIndex === null
                    ? ""
                    : isAnswer
                      ? "correct"
                      : chosen
                        ? "wrong"
                        : "";
                return (
                  <button key={`${currentQuestion.id}-${option}`} type="button" className={className} onClick={() => selectOption(index)}>
                    {option}
                  </button>
                );
              })}
            </div>

            {selectedOptionIndex !== null ? <p className="mission-explanation">{currentQuestion.explanation}</p> : null}
          </section>
        )}

        {stage === "complete" && (
          <section className="mission-panel mission-panel--complete" ref={panelRef}>
            <div className="mission-lottie" ref={badgeRef} aria-hidden="true" />
            <h2>Mission complete</h2>
            <p>Your quiz route was generated from uploaded notes for {subject.name}.</p>

            <div className="mission-result-grid">
              <article>
                <strong>{score}</strong>
                <span>XP</span>
              </article>
              <article>
                <strong>{correctAnswers}/{questions.length}</strong>
                <span>Correct</span>
              </article>
              <article>
                <strong>{accuracy}%</strong>
                <span>Accuracy</span>
              </article>
            </div>

            <div className="mission-complete-actions">
              <button
                type="button"
                onClick={() => {
                  setQuestionIndex(0);
                  setSelectedOptionIndex(null);
                  setScore(0);
                  setCorrectAnswers(0);
                  setStreak(0);
                  setStage("running");
                }}
              >
                <RotateCcw size={14} />
                Replay
              </button>
              <button type="button" className="button-ghost" onClick={closeMission}>
                <CheckCircle2 size={14} />
                Exit
              </button>
              <button
                type="button"
                className="button-ghost"
                onClick={() => {
                  resetMission();
                  onShowMessage("Mission reset. Upload another note set.");
                }}
              >
                <Trophy size={14} />
                New mission
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MissionGame;
