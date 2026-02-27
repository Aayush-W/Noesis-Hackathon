import { Mic, MicOff, SendHorizonal, Volume2, VolumeX } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { qaApi, type ChatTurn } from "../api/qaApi";
import type { AnswerPayload } from "../types/document";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  payload?: AnswerPayload;
}

interface ChatInterfaceProps {
  subjectId: string;
  subjectName: string;
  onQuestionAsked?: () => void;
  onAnswer?: (payload: AnswerPayload) => void;
}

const ChatInterface = ({ subjectId, subjectName, onQuestionAsked, onAnswer }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "seed",
      role: "assistant",
      text: `Welcome, Agent. I am your ${subjectName} study AI. Ask me anything from your uploaded notes and I will answer with strict citations. You can also use voice input.`,
    },
  ]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.onresult = (e: SpeechRecognitionEvent) => {
      const transcript = e.results[0]?.[0]?.transcript ?? "";
      if (transcript.trim()) setPrompt(transcript);
      setListening(false);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
  }, []);

  const toggleMic = () => {
    if (!recognitionRef.current) return;
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  const speak = (text: string) => {
    if (!ttsEnabled || !("speechSynthesis" in window) || !text.trim()) return;
    window.speechSynthesis.cancel();
    const clean = text.replace(/\[SOURCE:[^\]]*\]/g, "").replace(/\s+/g, " ").trim();
    if (!clean) return;
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const getHistory = (): ChatTurn[] =>
    messages
      .filter((m) => m.id !== "seed")
      .slice(-8)
      .map((m) => ({ role: m.role, content: m.text }));

  const subject = { id: subjectId, name: subjectName };

  const submitQuestion = async (e?: FormEvent) => {
    e?.preventDefault();
    const trimmed = prompt.trim();
    if (!trimmed || loading) return;

    onQuestionAsked?.();
    setMessages((prev) => [...prev, { id: `u-${Date.now()}`, role: "user", text: trimmed }]);
    setPrompt("");
    setLoading(true);

    try {
      const answer = await qaApi.askQuestion(trimmed, subject, getHistory());
      setMessages((prev) => [
        ...prev,
        { id: `a-${Date.now()}`, role: "assistant", text: answer.answer, payload: answer },
      ]);
      onAnswer?.(answer);
      speak(answer.answer);
    } catch (err) {
      const errText = err instanceof Error ? err.message : "Something went wrong.";
      setMessages((prev) => [
        ...prev,
        { id: `e-${Date.now()}`, role: "assistant", text: `ERROR: ${errText}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((m) => (
          <div key={m.id} className={`chat-bubble ${m.role} ${m.text.startsWith("ERROR:") ? "error" : ""}`}>
            <div>{m.text}</div>

            {m.payload && (
              <>
                <div className="chat-bubble__meta">
                  <span className={`confidence-badge ${m.payload.confidenceTier}`}>
                    {m.payload.confidenceTier} - {(m.payload.confidenceScore * 100).toFixed(0)}%
                  </span>
                  {m.payload.citations?.map((c, i) => (
                    <span className="citation-chip" key={i}>
                      DOC {c.fileName} | {c.locationRef}
                    </span>
                  ))}
                </div>

                {m.payload.evidenceSnippets?.length > 0 && (
                  <details className="chat-evidence">
                    <summary>View evidence ({m.payload.evidenceSnippets.length} snippets)</summary>
                    {m.payload.evidenceSnippets.map((s, i) => (
                      <p key={i}>"{s}"</p>
                    ))}
                  </details>
                )}
              </>
            )}
          </div>
        ))}

        {loading && (
          <div className="chat-bubble assistant">
            <div className="chat-loading">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form className="chat-input-bar" onSubmit={submitQuestion}>
        <button
          type="button"
          className={`chat-action-btn ${listening ? "listening" : ""}`}
          onClick={toggleMic}
          title={listening ? "Stop listening" : "Voice input"}
        >
          {listening ? <MicOff size={18} /> : <Mic size={18} />}
        </button>

        <input
          type="text"
          placeholder={`Ask about ${subjectName}...`}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
        />

        <button
          type="button"
          className={`chat-action-btn ${ttsEnabled ? "active" : ""}`}
          onClick={() => setTtsEnabled(!ttsEnabled)}
          title={ttsEnabled ? "Disable voice output" : "Enable voice output"}
        >
          {ttsEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>

        <button type="submit" className="chat-action-btn send" disabled={loading || !prompt.trim()}>
          <SendHorizonal size={18} />
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;
