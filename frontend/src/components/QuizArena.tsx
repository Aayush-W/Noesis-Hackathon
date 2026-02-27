import { RefreshCw, RotateCcw, Trophy } from "lucide-react";
import { useState } from "react";
import { studyApi } from "../api/studyApi";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizArenaProps {
  subjectId: string;
  subjectName: string;
  onMissionComplete?: (score: number, total: number) => void;
}

const QuizArena = ({ subjectId, subjectName, onMissionComplete }: QuizArenaProps) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [results, setResults] = useState<Array<"correct" | "wrong">>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [finished, setFinished] = useState(false);

  const generateQuiz = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await studyApi.generatePracticeTest(subjectId);
      const mcqs: QuizQuestion[] = (data.mcqs ?? []).map(
        (q: { question: string; options: string[]; correctOptionIndex: number; explanation?: string }) => ({
          question: q.question,
          options: q.options,
          correctIndex: q.correctOptionIndex ?? 0,
          explanation: q.explanation ?? "Answer derived from your uploaded notes.",
        })
      );

      if (mcqs.length === 0) {
        setError("No questions could be generated. Upload more notes first.");
        return;
      }

      setQuestions(mcqs.slice(0, 5));
      setCurrent(0);
      setSelected(null);
      setResults([]);
      setFinished(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate quiz.");
    } finally {
      setLoading(false);
    }
  };

  const handleOption = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const isCorrect = idx === questions[current].correctIndex;
    setResults((prev) => [...prev, isCorrect ? "correct" : "wrong"]);
  };

  const nextQuestion = () => {
    if (current + 1 >= questions.length) {
      const finalScore = results.filter((r) => r === "correct").length;
      onMissionComplete?.(finalScore, questions.length);
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  const score = results.filter((r) => r === "correct").length;

  if (questions.length === 0 && !loading) {
    return (
      <div className="quiz-arena">
        <div className="quiz-scorecard" style={{ marginTop: 60 }}>
          <div className="quiz-scorecard__ring good">
            <Trophy size={48} />
          </div>
          <h2>Quiz Arena</h2>
          <p>
            Generate 5 MCQs from your {subjectName} notes
            <br />
            and test your knowledge, Agent.
          </p>
          {error && <p style={{ color: "var(--danger)", marginBottom: 16 }}>{error}</p>}
          <div className="quiz-scorecard__actions">
            <button className="btn-primary" onClick={generateQuiz} type="button">
              <RefreshCw size={16} /> Generate Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="quiz-arena">
        <div className="quiz-scorecard" style={{ marginTop: 60 }}>
          <div className="quiz-scorecard__ring good" style={{ animation: "arcPulse 1s infinite" }}>
            <RefreshCw size={36} style={{ animation: "spin 1s linear infinite" }} />
          </div>
          <h2>Generating Questions...</h2>
          <p>The AI is crafting MCQs from your uploaded notes.</p>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (finished) {
    const grade = score >= 4 ? "great" : score >= 2 ? "good" : "poor";
    const label = score >= 4 ? "Excellent, Agent!" : score >= 2 ? "Good effort!" : "Keep studying!";
    return (
      <div className="quiz-arena">
        <div className="quiz-scorecard" style={{ marginTop: 40 }}>
          <div className={`quiz-scorecard__ring ${grade}`}>
            {score}/{questions.length}
          </div>
          <h2>{label}</h2>
          <p>
            You scored {score} out of {questions.length} in {subjectName}.
          </p>
          <div className="quiz-scorecard__actions">
            <button className="btn-primary" onClick={generateQuiz} type="button">
              <RefreshCw size={16} /> New Quiz
            </button>
            <button
              className="btn-ghost"
              onClick={() => {
                setQuestions([]);
                setFinished(false);
              }}
              type="button"
            >
              <RotateCcw size={16} /> Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="quiz-arena">
      <div className="quiz-header">
        <h2>{subjectName} - Challenge</h2>
        <div className="quiz-progress">
          {questions.map((_, i) => {
            let cls = "pending";
            if (i < results.length) cls = results[i];
            if (i === current && selected === null) cls = "current";
            return (
              <div key={i} className={`quiz-progress__gem ${cls}`}>
                {i + 1}
              </div>
            );
          })}
        </div>
      </div>

      <div className="quiz-question-card">
        <h3>
          Q{current + 1}. {q.question}
        </h3>

        <div className="quiz-options">
          {q.options.map((opt, idx) => {
            let cls = "";
            if (selected !== null) {
              if (idx === q.correctIndex) cls = selected === idx ? "correct" : "reveal-correct";
              else if (idx === selected) cls = "wrong";
            }
            return (
              <button
                key={idx}
                type="button"
                className={`quiz-option ${cls}`}
                onClick={() => handleOption(idx)}
                disabled={selected !== null}
              >
                {String.fromCharCode(65 + idx)}. {opt}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <>
            <div className="quiz-explanation">
              <strong>{selected === q.correctIndex ? "Correct!" : "Incorrect."}</strong> {q.explanation}
            </div>
            <button className="btn-primary quiz-next-btn" onClick={nextQuestion} type="button">
              {current + 1 >= questions.length ? "See Results" : "Next Question"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizArena;
