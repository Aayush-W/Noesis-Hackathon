import { Brain, Flame, Gamepad2, ShieldCheck, Sparkles, Sword, Trophy, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

interface HomeProps {
  onLaunchMission: () => void;
  onOpenPracticeModal: () => void;
  onShowMessage: (message: string) => void;
}

const Home = ({ onLaunchMission, onOpenPracticeModal, onShowMessage }: HomeProps) => {
  const navigate = useNavigate();
  const shellRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!shellRef.current) {
      return;
    }
    gsap.fromTo(
      shellRef.current.querySelectorAll("section"),
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, stagger: 0.09, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="home-shell" ref={shellRef}>
      <section className="game-hero">
        <div className="game-hero__content">
          <span className="eyebrow">Gamified study cockpit</span>
          <h1>Level up your preparation with missions, XP and quiz battles</h1>
          <p>
            A clean skeleton to build on: fewer blocks, clearer actions, and fun-first learning flow for test
            prep + general practice.
          </p>
          <div className="hero-actions">
            <button type="button" onClick={onLaunchMission}>
              <Sword size={18} />
              Launch Test Mission
            </button>
            <button
              type="button"
              className="button-ghost"
              onClick={() => {
                navigate("/flashcards");
                onShowMessage("Open flashcard workspace for quick drills.");
              }}
            >
              <Brain size={18} />
              Open Quiz Workspace
            </button>
          </div>
        </div>

        <div className="game-scene" aria-hidden="true">
          <div className="scene-orb"></div>
          <div className="scene-ring"></div>
          <div className="scene-chip chip-a"></div>
          <div className="scene-chip chip-b"></div>
          <div className="scene-chip chip-c"></div>
        </div>
      </section>

      <section className="hud-strip">
        <article>
          <Flame size={18} />
          <strong>7 day streak</strong>
          <span>Keep it burning</span>
        </article>
        <article>
          <Zap size={18} />
          <strong>Mission XP</strong>
          <span>Earned from note-driven rounds</span>
        </article>
        <article>
          <Trophy size={18} />
          <strong>Gold League</strong>
          <span>Top 12% this week</span>
        </article>
      </section>

      <section className="arena-grid">
        <article className="arena-card arena-card--test">
          <div className="arena-head">
            <ShieldCheck size={20} />
            <h3>Test Arena</h3>
          </div>
          <p>Timed mock tests with stricter scoring and confidence-aware hints.</p>
          <div className="tag-row">
            <span>Timed rounds</span>
            <span>Ranked mode</span>
            <span>Exam scope</span>
          </div>
          <button type="button" onClick={onLaunchMission}>
            Start test arena
          </button>
        </article>

        <article className="arena-card arena-card--quiz">
          <div className="arena-head">
            <Gamepad2 size={20} />
            <h3>General Quiz Arena</h3>
          </div>
          <p>Fast and playful quizzes for memory, speed, and concept retention.</p>
          <div className="tag-row">
            <span>Quick play</span>
            <span>Bonus XP</span>
            <span>Topic shuffle</span>
          </div>
          <button type="button" onClick={onLaunchMission}>
            Play quick quiz
          </button>
        </article>
      </section>

      <section className="quiz-play">
        <div className="quiz-play__header">
          <h2>Interland-style mission flow</h2>
          <span className="pill">3D scene + note-derived questions</span>
        </div>

        <article className="question-card">
          <span className="question-chip">
            <Sparkles size={14} />
            Mission sequence
          </span>
          <h3>Click Launch Test Mission to enter the 3D quiz map and generate rounds from uploaded notes.</h3>
          <div className="tag-row">
            <span>Upload or paste notes</span>
            <span>Auto-generate MCQs</span>
            <span>Progressive mission rounds</span>
          </div>
          <div className="question-footer">
            <button type="button" onClick={onLaunchMission}>
              Launch test mission
            </button>
            <button type="button" className="button-ghost" onClick={onOpenPracticeModal}>
              Open classic generator
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
