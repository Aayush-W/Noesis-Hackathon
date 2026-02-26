import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { gsap } from "gsap";
import { Play, ArrowLeft } from "lucide-react";
import "../styles.interland.css";

const InterlandHub = () => {
    const navigate = useNavigate();
    const canvasRef = useRef<HTMLDivElement>(null);
    const [activeIsland, setActiveIsland] = useState<string | null>(null);
    const [showPlay, setShowPlay] = useState(false);

    useEffect(() => {
        if (!canvasRef.current) return;

        // --- Scene Setup ---
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x75bbfd); // Bright sky blue
        scene.fog = new THREE.Fog(0x75bbfd, 15, 50);

        const camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        camera.position.set(0, 5, 20);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        canvasRef.current.appendChild(renderer.domElement);

        // --- Lighting ---
        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
        hemiLight.position.set(0, 20, 0);
        scene.add(hemiLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
        dirLight.position.set(10, 20, 10);
        dirLight.castShadow = true;
        scene.add(dirLight);

        // --- Islands Generation ---
        const islandsGroup = new THREE.Group();
        scene.add(islandsGroup);

        // Helper to create a stylized low-poly island
        const createIsland = (
            name: string,
            color: number,
            x: number,
            y: number,
            z: number
        ) => {
            const group = new THREE.Group();
            group.userData = { name };

            // Base Rock
            const geoRock = new THREE.DodecahedronGeometry(2.5, 0);
            const matRock = new THREE.MeshStandardMaterial({
                color: 0x555555,
                flatShading: true,
                roughness: 0.8,
            });
            const rock = new THREE.Mesh(geoRock, matRock);
            rock.scale.set(1, 0.5, 1);
            group.add(rock);

            // Top Surface
            const geoTop = new THREE.CylinderGeometry(2.2, 2.5, 0.5, 7);
            const matTop = new THREE.MeshStandardMaterial({
                color,
                flatShading: true,
            });
            const top = new THREE.Mesh(geoTop, matTop);
            top.position.y = 1;
            group.add(top);

            // Decorative Element (e.g. Castle, Crystal, Tree)
            const geoDeco = new THREE.ConeGeometry(0.8, 2, 4);
            const matDeco = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                flatShading: true,
            });
            const deco = new THREE.Mesh(geoDeco, matDeco);
            deco.position.y = 2.2;
            group.add(deco);

            group.position.set(x, y, z);
            return group;
        };

        const islandRiver = createIsland("Reality River", 0xff6b6b, -8, 0, -5); // Red
        const islandKingdom = createIsland("Kind Kingdom", 0x4dabf7, -4, 2, -12); // Blue
        const islandMountain = createIsland("Mindful Mountain", 0x51cf66, 6, -1, -8); // Green
        const islandTower = createIsland("Tower of Treasure", 0xfcc419, 8, 3, -15); // Yellow

        const islands = [islandRiver, islandKingdom, islandMountain, islandTower];
        islands.forEach((i) => islandsGroup.add(i));

        // --- Animation & Interaction Variables ---
        const mouse = new THREE.Vector2();
        let targetCameraX = 0;
        let targetCameraY = 5;

        // --- Interaction ---
        const raycaster = new THREE.Raycaster();
        const handleMouseMove = (event: MouseEvent) => {
            // Normalize mouse coordinates
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            // Parallax target computation
            targetCameraX = mouse.x * 3;
            targetCameraY = 5 + mouse.y * 1.5;
        };

        const handleClick = (event: MouseEvent) => {
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(islandsGroup.children, true);

            if (intersects.length > 0) {
                // Find the group containing userData.name
                let object: THREE.Object3D | null = intersects[0].object;
                while (object && !object.userData.name) {
                    object = object.parent;
                }

                if (object && object.userData.name) {
                    const islandName = object.userData.name;
                    setActiveIsland(islandName);
                    setShowPlay(true);

                    // Animate camera to focus on island
                    const targetPos = new THREE.Vector3();
                    object.getWorldPosition(targetPos);

                    gsap.to(camera.position, {
                        x: targetPos.x,
                        y: targetPos.y + 2,
                        z: targetPos.z + 10,
                        duration: 1.5,
                        ease: "power3.inOut",
                    });

                    gsap.to(camera.lookAt, {
                        // We need to animate a lookAt point in render loop usually, 
                        // but for simplicity we rely on OrbitControls or camera rotation if implemented.
                        // We'll stick to fixed lookAt origin for now, or just let it focus naturally.
                    });
                }
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick);

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        // --- Render Loop ---
        const clock = new THREE.Clock();
        let frameId: number;

        const animate = () => {
            const time = clock.getElapsedTime();

            // Bobbing islands
            islands.forEach((island, index) => {
                island.position.y += Math.sin(time * 1.5 + index) * 0.005;
                // Subtle rotation
                island.rotation.y += 0.002;
            });

            // Camera parallax damping (only if no island is deeply selected, 
            // but simplistic approach applies it softly anyway)
            if (!activeIsland) {
                camera.position.x += (targetCameraX - camera.position.x) * 0.02;
                camera.position.y += (targetCameraY - camera.position.y) * 0.02;
                camera.lookAt(0, 2, 0);
            } else {
                // Keep looking at the active island roughly
                const activeObj = islandsGroup.children.find((c: THREE.Object3D) => c.userData.name === activeIsland);
                if (activeObj) {
                    const pos = activeObj.position.clone();
                    pos.y += 1;
                    // camera.lookAt(pos); // Optional: direct stare
                }
            }

            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick);
            window.removeEventListener("resize", handleResize);
            if (canvasRef.current) {
                canvasRef.current.innerHTML = "";
            }
            renderer.dispose();
        };
    }, [activeIsland]);

    const handleBack = () => {
        navigate("/");
    };

    const handleDeselect = () => {
        setActiveIsland(null);
        setShowPlay(false);
        // Reloading scene is easiest way to reset camera in this quick prototype,
        // alternatively we animate camera back.
        window.location.reload();
    };

    return (
        <div className="interland-wrapper">
            <div ref={canvasRef} className="interland-canvas-container" />

            {/* Persistent UI */}
            <div className="interland-header">
                <button className="interland-btn-icon" onClick={handleBack}>
                    <ArrowLeft size={24} />
                    <span>Exit</span>
                </button>
                <div className="interland-logo">
                    <h2>INTERLAND</h2>
                    <p>Be Internet Awesome.</p>
                </div>
            </div>

            {/* Main Title Overlay (hides when island selected) */}
            {!activeIsland && (
                <div className="interland-title-card">
                    <h1>Play Your Way to Being Internet Awesome!</h1>
                    <p>Explore the islands to learn digital citizenship and safety.</p>
                </div>
            )}

            {/* Selected Island Overlay */}
            {showPlay && activeIsland && (
                <div className="interland-action-card">
                    <h2>{activeIsland}</h2>
                    <p>Ready to test your skills?</p>
                    <div className="action-buttons">
                        <button className="interland-btn-primary" onClick={() => navigate("/interland/river")}>
                            <Play size={20} fill="currentColor" /> Let's Do This!
                        </button>
                        <button className="interland-btn-secondary" onClick={handleDeselect}>
                            Back to Map
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InterlandHub;
