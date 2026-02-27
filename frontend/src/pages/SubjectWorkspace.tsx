import { ArrowLeft, FileUp, Globe, MessageSquare, Trophy, Upload, X } from "lucide-react";
import { ChangeEvent, DragEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { uploadApi } from "../api/uploadApi";
import ChatInterface from "../components/ChatInterface";
import QuizArena from "../components/QuizArena";
import type { AnswerPayload } from "../types/document";

type Tab = "upload" | "chat" | "quiz";

const PROGRESS_STORAGE_KEY = "amn_subject_progress_v1";

interface MissionProgress {
  xp: number;
  rank: string;
  streak: number;
  filesUploaded: number;
  urlSources: number;
  chunksIndexed: number;
  questionsAsked: number;
  highConfidenceAnswers: number;
  quizWins: number;
  lastActiveDate: string;
}

const SUBJECT_META: Record<string, { name: string; color: string }> = {
  physics: { name: "Physics", color: "var(--stone-physics)" },
  chemistry: { name: "Chemistry", color: "var(--stone-chemistry)" },
  maths: { name: "Maths", color: "var(--stone-maths)" },
};

const toDateKey = (date: Date): string => date.toISOString().slice(0, 10);

const resolveRank = (xp: number): string => {
  if (xp >= 1700) return "Endgame Strategist";
  if (xp >= 1000) return "Infinity Vanguard";
  if (xp >= 500) return "Field Avenger";
  if (xp >= 200) return "Avenger Cadet";
  return "Recruit";
};

const getYesterday = (today: string): string => {
  const date = new Date(`${today}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() - 1);
  return toDateKey(date);
};

const applyStreak = (progress: MissionProgress): MissionProgress => {
  const today = toDateKey(new Date());
  if (progress.lastActiveDate === today) return progress;
  const streak = progress.lastActiveDate === getYesterday(today) ? progress.streak + 1 : 1;
  return { ...progress, streak, lastActiveDate: today };
};

const defaultProgress = (): MissionProgress => ({
  xp: 0,
  rank: "Recruit",
  streak: 1,
  filesUploaded: 0,
  urlSources: 0,
  chunksIndexed: 0,
  questionsAsked: 0,
  highConfidenceAnswers: 0,
  quizWins: 0,
  lastActiveDate: toDateKey(new Date()),
});

const loadSubjectProgress = (subjectId: string): MissionProgress => {
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw) as Record<string, MissionProgress>;
    const fromStorage = parsed[subjectId];
    if (!fromStorage) return defaultProgress();
    return applyStreak({ ...defaultProgress(), ...fromStorage, rank: resolveRank(fromStorage.xp ?? 0) });
  } catch {
    return defaultProgress();
  }
};

const saveSubjectProgress = (subjectId: string, progress: MissionProgress): void => {
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    const parsed = (raw ? JSON.parse(raw) : {}) as Record<string, MissionProgress>;
    parsed[subjectId] = progress;
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(parsed));
  } catch {
    // Ignore storage errors in private browsing modes.
  }
};

const SubjectWorkspace = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const subjectId = id ?? "physics";
  const meta = SUBJECT_META[subjectId] ?? { name: subjectId, color: "var(--arc-blue)" };

  const [tab, setTab] = useState<Tab>("upload");
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [hasUploaded, setHasUploaded] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [urlUploading, setUrlUploading] = useState(false);
  const [progress, setProgress] = useState<MissionProgress>(() => loadSubjectProgress(subjectId));
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setProgress(loadSubjectProgress(subjectId));
  }, [subjectId]);

  const updateProgress = useCallback(
    (updater: (prev: MissionProgress) => MissionProgress) => {
      setProgress((prev) => {
        const touched = applyStreak(prev);
        const updated = updater(touched);
        const next = { ...updated, rank: resolveRank(updated.xp) };
        saveSubjectProgress(subjectId, next);
        return next;
      });
    },
    [subjectId]
  );

  const onFilesSelected = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    setFiles((prev) => [...prev, ...selected]);
    setUploadMsg(null);
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleUpload = async () => {
    if (!files.length || uploading) return;
    setUploading(true);
    setUploadMsg(null);
    try {
      let totalChunks = 0;
      for (const file of files) {
        const res = await uploadApi.uploadNotes(file, subjectId);
        totalChunks += res.chunkCount ?? 0;
      }
      setUploadMsg({
        type: "success",
        text: `${files.length} file(s) uploaded. ${totalChunks} chunks indexed.`,
      });
      updateProgress((prev) => ({
        ...prev,
        xp: prev.xp + files.length * 25 + Math.min(totalChunks, 120),
        filesUploaded: prev.filesUploaded + files.length,
        chunksIndexed: prev.chunksIndexed + totalChunks,
      }));
      setFiles([]);
      setHasUploaded(true);
    } catch (err) {
      setUploadMsg({ type: "error", text: err instanceof Error ? err.message : "Upload failed." });
    } finally {
      setUploading(false);
    }
  };

  const handleUrlUpload = async () => {
    if (!urlInput.trim() || urlUploading) return;
    setUrlUploading(true);
    setUploadMsg(null);
    try {
      const result = await uploadApi.uploadFromUrl(urlInput.trim(), subjectId);
      setUploadMsg({
        type: "success",
        text: `URL indexed (${result.chunkCount} chunks). ${result.title ? `Title: ${result.title}` : ""}`,
      });
      updateProgress((prev) => ({
        ...prev,
        xp: prev.xp + 45 + Math.min(result.chunkCount, 100),
        urlSources: prev.urlSources + 1,
        chunksIndexed: prev.chunksIndexed + result.chunkCount,
      }));
      setUrlInput("");
      setHasUploaded(true);
    } catch (err) {
      setUploadMsg({ type: "error", text: err instanceof Error ? err.message : "URL ingestion failed." });
    } finally {
      setUrlUploading(false);
    }
  };

  const onQuestionAsked = () => {
    updateProgress((prev) => ({
      ...prev,
      xp: prev.xp + 8,
      questionsAsked: prev.questionsAsked + 1,
    }));
  };

  const onAnswer = (payload: AnswerPayload) => {
    if (payload.confidenceTier === "HIGH") {
      updateProgress((prev) => ({
        ...prev,
        xp: prev.xp + 16,
        highConfidenceAnswers: prev.highConfidenceAnswers + 1,
      }));
      return;
    }
    if (payload.confidenceTier === "MEDIUM") {
      updateProgress((prev) => ({ ...prev, xp: prev.xp + 10 }));
      return;
    }
    updateProgress((prev) => ({ ...prev, xp: prev.xp + 4 }));
  };

  const onMissionComplete = (score: number, total: number) => {
    const ratio = total > 0 ? score / total : 0;
    const bonus = ratio >= 0.8 ? 60 : ratio >= 0.6 ? 30 : 0;
    updateProgress((prev) => ({
      ...prev,
      xp: prev.xp + score * 30 + bonus,
      quizWins: prev.quizWins + (ratio >= 0.6 ? 1 : 0),
    }));
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1048576).toFixed(1)} MB`;
  };

  const handleDrop = useCallback((e: DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...dropped]);
    setUploadMsg(null);
  }, []);

  const tabs: { key: Tab; label: string; icon: typeof FileUp }[] = [
    { key: "upload", label: "Upload Intel", icon: FileUp },
    { key: "chat", label: "Ask Jarvis", icon: MessageSquare },
    { key: "quiz", label: "Battle Quiz", icon: Trophy },
  ];

  const xpMeter = useMemo(() => {
    const tierBase = Math.floor(progress.xp / 500) * 500;
    const progressInTier = progress.xp - tierBase;
    return Math.round((progressInTier / 500) * 100);
  }, [progress.xp]);

  return (
    <div className="workspace">
      <div className="grid-bg" />

      <div className="workspace__topbar">
        <button className="workspace__back" onClick={() => navigate("/")} title="Back to dossiers">
          <ArrowLeft size={18} />
        </button>
        <span className="workspace__subject-name" style={{ color: meta.color }}>
          {meta.name}
        </span>
        <span className="workspace__rank-badge">{progress.rank}</span>
        <div className="workspace__tabs">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.key}
                type="button"
                className={`workspace__tab ${tab === t.key ? "active" : ""}`}
                onClick={() => setTab(t.key)}
              >
                <Icon size={16} /> {t.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="workspace__body">
        <section className="mission-hud">
          <div className="mission-hud__headline">
            <h2>Mission Board</h2>
            <p>
              XP {progress.xp} | Streak {progress.streak} day(s)
            </p>
          </div>
          <div className="mission-hud__xp-track">
            <div className="mission-hud__xp-fill" style={{ width: `${Math.min(xpMeter, 100)}%` }} />
          </div>
          <div className="mission-hud__stats">
            <article>
              <span>Files</span>
              <strong>{progress.filesUploaded}</strong>
            </article>
            <article>
              <span>URLs</span>
              <strong>{progress.urlSources}</strong>
            </article>
            <article>
              <span>Chunks</span>
              <strong>{progress.chunksIndexed}</strong>
            </article>
            <article>
              <span>Questions</span>
              <strong>{progress.questionsAsked}</strong>
            </article>
            <article>
              <span>High Confidence</span>
              <strong>{progress.highConfidenceAnswers}</strong>
            </article>
            <article>
              <span>Quiz Wins</span>
              <strong>{progress.quizWins}</strong>
            </article>
          </div>
        </section>

        {tab === "upload" && (
          <div className="upload-zone">
            <div
              className={`upload-dropzone ${dragOver ? "drag-over" : ""}`}
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
            >
              <div className="upload-dropzone__icon">
                <Upload size={40} />
              </div>
              <h3>Drop your notes here</h3>
              <p>or click to browse files</p>
              <div className="upload-dropzone__formats">
                <span>PDF</span>
                <span>DOCX</span>
                <span>PPTX</span>
                <span>TXT</span>
                <span>Images</span>
              </div>
            </div>
            <input
              ref={fileRef}
              type="file"
              multiple
              accept=".pdf,.docx,.pptx,.txt,.png,.jpg,.jpeg"
              style={{ display: "none" }}
              onChange={onFilesSelected}
            />

            {files.length > 0 && (
              <div className="upload-file-list">
                {files.map((f, i) => (
                  <div className="upload-file-item" key={`${f.name}-${i}`}>
                    <span className="upload-file-item__name">{f.name}</span>
                    <span className="upload-file-item__size">{formatSize(f.size)}</span>
                    <button className="upload-file-item__remove" onClick={() => removeFile(i)} type="button">
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="upload-submit">
              <button className="btn-primary" disabled={!files.length || uploading} onClick={handleUpload} type="button">
                <Upload size={16} />
                {uploading ? "Uploading..." : `Upload ${files.length} file(s)`}
              </button>
            </div>

            <div className="upload-url-card">
              <h4>
                <Globe size={16} /> Index a web source
              </h4>
              <div className="upload-url-row">
                <input
                  type="url"
                  placeholder="https://example.com/notes-page"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                />
                <button className="btn-ghost" type="button" disabled={!urlInput.trim() || urlUploading} onClick={handleUrlUpload}>
                  {urlUploading ? "Indexing..." : "Index URL"}
                </button>
              </div>
            </div>

            {uploadMsg && <p className={`upload-status ${uploadMsg.type}`}>{uploadMsg.text}</p>}

            {hasUploaded && (
              <div style={{ textAlign: "center", marginTop: 24 }}>
                <button className="btn-primary" onClick={() => setTab("chat")} type="button">
                  <MessageSquare size={16} /> Proceed to Chat
                </button>
              </div>
            )}
          </div>
        )}

        {tab === "chat" && (
          <ChatInterface subjectId={subjectId} subjectName={meta.name} onQuestionAsked={onQuestionAsked} onAnswer={onAnswer} />
        )}

        {tab === "quiz" && (
          <QuizArena subjectId={subjectId} subjectName={meta.name} onMissionComplete={onMissionComplete} />
        )}
      </div>
    </div>
  );
};

export default SubjectWorkspace;
