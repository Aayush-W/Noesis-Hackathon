import { BookOpenCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useSubject } from "../hooks/useSubject";
import ChatInterface from "../components/ChatInterface";
import Heatmap from "../components/Heatmap";

interface FlashcardsWorkspaceProps {
  onOpenPracticeModal: () => void;
}

const FlashcardsWorkspace = ({ onOpenPracticeModal }: FlashcardsWorkspaceProps) => {
  const { selectedSubject } = useSubject();
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }
    gsap.fromTo(
      rootRef.current.querySelectorAll(".workspace-header, .workspace-grid > *"),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: "power2.out" }
    );
  }, [selectedSubject.id]);

  return (
    <section className="workspace-page" ref={rootRef}>
      <header className="workspace-header">
        <div>
          <small>AskMyNotes</small>
          <h1>{selectedSubject.name} workspace</h1>
          <p>Chat with your notes, then generate practice tests and targeted study guides.</p>
        </div>
        <div className="workspace-actions">
          <button type="button" onClick={onOpenPracticeModal}>
            <BookOpenCheck size={18} />
            Practice test
          </button>
        </div>
      </header>
      <div className="workspace-grid">
        <ChatInterface />
        <Heatmap />
      </div>
    </section>
  );
};

export default FlashcardsWorkspace;
