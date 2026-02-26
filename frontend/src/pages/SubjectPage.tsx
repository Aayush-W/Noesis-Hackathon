import { useState } from "react";
import { useNavigate } from "react-router-dom";

const languages = ["English (UK)", "English (US)", "Hindi"];

const SubjectPage = () => {
  const navigate = useNavigate();
  const [languageIndex, setLanguageIndex] = useState(0);

  return (
    <section className="study-groups-page">
      <div className="study-groups-hero">
        <div className="hero-graphic">
          <div className="card"></div>
          <div className="avatar-row">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <h1>
          Get your study group on Quizlet
          <br />
          and study flashcards together
        </h1>
        <button type="button" onClick={() => navigate("/flashcards")}>
          Create a group
        </button>
        <a href="https://quizlet.com/features/study-groups" target="_blank" rel="noreferrer">
          Learn more about study groups
        </a>
      </div>

      <footer>
        <div>
          <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noreferrer">
            Privacy
          </a>
          <a href="https://www.google.com/policies/terms/" target="_blank" rel="noreferrer">
            Terms
          </a>
        </div>
        <button
          type="button"
          onClick={() => setLanguageIndex((current) => (current + 1) % languages.length)}
        >
          {languages[languageIndex]}
        </button>
      </footer>
    </section>
  );
};

export default SubjectPage;
