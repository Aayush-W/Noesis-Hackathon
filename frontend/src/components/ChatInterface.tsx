import { SendHorizonal } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { qaApi } from "../api/qaApi";
import { useQA } from "../hooks/useQA";
import { useSubject } from "../hooks/useSubject";
import type { AnswerPayload } from "../types/document";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  payload?: AnswerPayload;
}

const ChatInterface = () => {
  const { selectedSubject } = useSubject();
  const { setLatestInsight } = useQA();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "assistant-seed",
      role: "assistant",
      text: `Ask any question from ${selectedSubject.name}. Answers are scoped only to your uploaded notes.`
    }
  ]);

  useEffect(() => {
    setMessages([
      {
        id: "assistant-seed",
        role: "assistant",
        text: `Ask any question from ${selectedSubject.name}. Answers are scoped only to your uploaded notes.`
      }
    ]);
  }, [selectedSubject.id, selectedSubject.name]);

  const submitQuestion = async (event: FormEvent) => {
    event.preventDefault();
    const trimmed = prompt.trim();
    if (!trimmed || loading) {
      return;
    }

    setLoading(true);
    setMessages((current) => [
      ...current,
      { id: `user-${Date.now()}`, role: "user", text: trimmed }
    ]);
    setPrompt("");

    try {
      const answer = await qaApi.askQuestion(trimmed, selectedSubject);
      setLatestInsight(selectedSubject.id, trimmed, answer);
      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          text: answer.answer,
          payload: answer
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="panel chat-panel">
      <div className="panel-title-row">
        <h2>Subject-scoped Q&A</h2>
        <span className="pill">{selectedSubject.name}</span>
      </div>

      <div className="chat-list">
        {messages.map((message) => (
          <article className={`chat-bubble chat-bubble--${message.role}`} key={message.id}>
            <p>{message.text}</p>
            {message.payload ? (
              <footer>
                <strong>
                  {message.payload.confidenceTier} ({(message.payload.confidenceScore * 100).toFixed(1)}%)
                </strong>
                {message.payload.citations.length ? (
                  message.payload.citations.map((citation) => (
                    <span key={`${message.id}-${citation.chunkId || citation.locationRef}`}>
                      {citation.fileName} | {citation.locationRef}
                    </span>
                  ))
                ) : (
                  <span>No grounded citation found. Returned strict NOT_FOUND.</span>
                )}
                {message.payload.evidenceSnippets.length ? (
                  <div className="evidence-list">
                    {message.payload.evidenceSnippets.slice(0, 3).map((snippet) => (
                      <small key={`${message.id}-${snippet.slice(0, 20)}`}>{snippet}</small>
                    ))}
                  </div>
                ) : null}
              </footer>
            ) : null}
          </article>
        ))}
      </div>

      <form className="chat-input-row" onSubmit={submitQuestion}>
        <input
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="Ask from your notes only..."
          aria-label="Ask question"
        />
        <button type="submit" disabled={loading}>
          <SendHorizonal size={18} />
          {loading ? "Checking..." : "Ask"}
        </button>
      </form>
    </section>
  );
};

export default ChatInterface;
