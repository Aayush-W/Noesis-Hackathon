import { Mic, MicOff, SendHorizonal, Volume2, VolumeX } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { qaApi, type ChatTurn } from "../api/qaApi";
import { useQA } from "../hooks/useQA";
import { useSubject } from "../hooks/useSubject";
import type { AnswerPayload } from "../types/document";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  payload?: AnswerPayload;
}

interface SpeechRecognitionLike {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: any) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

const initialAssistantMessage = (subjectName: string): ChatMessage => ({
  id: "assistant-seed",
  role: "assistant",
  text: `Ask any question from ${subjectName}. Answers are scoped only to your uploaded notes.`
});

const ChatInterface = () => {
  const { selectedSubject } = useSubject();
  const { setLatestInsight } = useQA();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialAssistantMessage(selectedSubject.name)]);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  useEffect(() => {
    setMessages([initialAssistantMessage(selectedSubject.name)]);
  }, [selectedSubject.id, selectedSubject.name]);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSpeechSupported(false);
      return;
    }

    setSpeechSupported(true);
    const recognition: SpeechRecognitionLike = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const spoken = event?.results?.[0]?.[0]?.transcript?.trim();
      if (spoken) {
        setPrompt((current) => (current ? `${current} ${spoken}` : spoken));
      }
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
    return () => {
      recognition.stop();
      recognitionRef.current = null;
    };
  }, []);

  const historyPayload: ChatTurn[] = useMemo(
    () =>
      messages
        .filter((message) => message.id !== "assistant-seed")
        .slice(-8)
        .map((message) => ({
          role: message.role,
          content: message.text
        })),
    [messages]
  );

  const speak = (text: string) => {
    if (!ttsEnabled || !("speechSynthesis" in window) || !text.trim()) {
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const toggleListening = () => {
    if (!speechSupported || !recognitionRef.current || loading) {
      return;
    }

    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
      return;
    }

    setListening(true);
    recognitionRef.current.start();
  };

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
      const answer = await qaApi.askQuestion(trimmed, selectedSubject, historyPayload);
      setLatestInsight(selectedSubject.id, trimmed, answer);
      setMessages((current) => {
        const updated = [
          ...current,
          {
            id: `assistant-${Date.now()}`,
            role: "assistant" as const,
            text: answer.answer,
            payload: answer
          }
        ];
        return updated;
      });
      speak(answer.answer);
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

      <div className="voice-row">
        <button
          type="button"
          className={`voice-button ${listening ? "active" : ""}`}
          onClick={toggleListening}
          disabled={!speechSupported}
        >
          {listening ? <MicOff size={15} /> : <Mic size={15} />}
          {speechSupported ? (listening ? "Stop voice input" : "Voice input") : "Voice unavailable"}
        </button>

        <button
          type="button"
          className={`voice-button ${ttsEnabled ? "active" : ""}`}
          onClick={() => {
            if (ttsEnabled && "speechSynthesis" in window) {
              window.speechSynthesis.cancel();
            }
            setTtsEnabled((current) => !current);
          }}
        >
          {ttsEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
          {ttsEnabled ? "Voice playback on" : "Voice playback off"}
        </button>
      </div>

      <div className="chat-list">
        {messages.map((message) => (
          <article className={`chat-bubble chat-bubble--${message.role}`} key={message.id}>
            <p>{message.text}</p>
            {message.role === "assistant" && message.id !== "assistant-seed" ? (
              <button type="button" className="bubble-speak" onClick={() => speak(message.text)}>
                <Volume2 size={12} />
                Read aloud
              </button>
            ) : null}
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
