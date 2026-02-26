import { FileSpreadsheet, FileText, Upload, X } from "lucide-react";
import { ChangeEvent, useMemo, useRef, useState } from "react";
import { studyApi } from "../api/studyApi";
import { useSubject } from "../hooks/useSubject";

type PracticeSourceTab = "upload" | "paste";

interface StudyModeProps {
  open: boolean;
  onClose: () => void;
  onGenerated: (message: string) => void;
}

const tabLabels: Record<PracticeSourceTab, string> = {
  upload: "Upload files",
  paste: "Paste text"
};

const StudyMode = ({ open, onClose, onGenerated }: StudyModeProps) => {
  const { selectedSubject } = useSubject();
  const [tab, setTab] = useState<PracticeSourceTab>("upload");
  const [pasteText, setPasteText] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const canGenerate = useMemo(() => {
    if (tab === "upload") {
      return selectedFiles.length > 0;
    }
    return pasteText.trim().length > 25;
  }, [pasteText, selectedFiles.length, tab]);

  if (!open) {
    return null;
  }

  const onFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(Array.from(event.target.files ?? []));
  };

  const onGenerate = async () => {
    if (!canGenerate || generating) {
      return;
    }
    setError("");
    setGenerating(true);
    try {
      const generated = await studyApi.generatePracticeTest(selectedSubject.id);
      const mcqCount = generated.mcqs?.length ?? 0;
      const saqCount = generated.saqs?.length ?? 0;

      if (mcqCount !== 5 || saqCount !== 3) {
        throw new Error(`Study mode expected 5 MCQs + 3 SAQs, but received ${mcqCount} MCQs and ${saqCount} SAQs.`);
      }

      onGenerated(
        `Practice test generated for ${selectedSubject.name}: ${mcqCount} MCQs + ${saqCount} SAQs.`
      );
      onClose();
      setPasteText("");
      setSelectedFiles([]);
      setTab("upload");
    } catch (generationError) {
      const message =
        generationError instanceof Error ? generationError.message : "Failed to generate study questions.";
      setError(message);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="overlay">
      <div className="overlay__content">
        <header className="overlay__header">
          <div className="overlay__title">
            <FileSpreadsheet size={25} />
            <h2>Generate practice tests</h2>
          </div>
          <button className="ghost-icon" type="button" onClick={onClose} aria-label="Close modal">
            <X size={26} />
          </button>
        </header>

        <div className="overlay__body">
          <h3>Generate a practice test</h3>
          <p>
            Subject scoped: <strong>{selectedSubject.name}</strong>. Choose or upload materials to generate
            questions from this subject only.
          </p>

          <div className="tab-row">
            {(Object.keys(tabLabels) as PracticeSourceTab[]).map((key) => (
              <button
                className={`tab-button ${tab === key ? "active" : ""}`}
                key={key}
                type="button"
                onClick={() => setTab(key)}
              >
                {tabLabels[key]}
              </button>
            ))}
          </div>

          {tab === "upload" ? (
            <div className="upload-card">
              <div className="upload-icons">
                <FileText size={45} />
                <Upload size={45} />
              </div>
              <h4>Drag and drop notes, readings, lecture slides, etc.</h4>
              <p>Supported file types are .docx, .pdf, .pptx</p>
              <button type="button" onClick={() => fileInputRef.current?.click()}>
                Browse files
              </button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.docx,.pptx,.txt,.png,.jpg,.jpeg"
                onChange={onFilesSelected}
                hidden
              />
              {selectedFiles.length ? (
                <div className="file-chip-row">
                  {selectedFiles.map((file) => (
                    <span className="file-chip" key={file.name}>
                      {file.name}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          {tab === "paste" ? (
            <textarea
              className="text-area"
              value={pasteText}
              onChange={(event) => setPasteText(event.target.value)}
              placeholder="Paste your notes here. We'll do the rest."
            />
          ) : null}

          {error ? <p className="evidence-panel__empty">{error}</p> : null}
        </div>

        <footer className="overlay__footer">
          <p>
            This product is enhanced using AI and may provide incorrect or problematic content. Do not enter
            any personal data.
          </p>
          <button type="button" disabled={!canGenerate || generating} onClick={onGenerate}>
            {generating ? "Generating..." : "Generate"}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default StudyMode;
