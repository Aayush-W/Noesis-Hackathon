import { BookText, Globe, Upload, X } from "lucide-react";
import { ChangeEvent, useMemo, useRef, useState } from "react";

type GuideTab = "paste" | "upload" | "drive";

interface StudyGuideModalProps {
  open: boolean;
  onClose: () => void;
  onGenerated: (message: string) => void;
}

const StudyGuideModal = ({ open, onClose, onGenerated }: StudyGuideModalProps) => {
  const [tab, setTab] = useState<GuideTab>("paste");
  const [inputValue, setInputValue] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [driveConnected, setDriveConnected] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const canGenerate = useMemo(() => {
    if (tab === "paste") {
      return inputValue.trim().length > 30;
    }
    if (tab === "upload") {
      return selectedFiles.length > 0;
    }
    return driveConnected;
  }, [driveConnected, inputValue, selectedFiles.length, tab]);

  const onFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(Array.from(event.target.files ?? []));
  };

  if (!open) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="overlay__content">
        <header className="overlay__header">
          <div className="overlay__title">
            <BookText size={25} />
            <h2>Generate study guides</h2>
          </div>
          <button className="ghost-icon" type="button" onClick={onClose} aria-label="Close modal">
            <X size={26} />
          </button>
        </header>

        <div className="overlay__body">
          <div className="tab-row">
            <button className={`tab-button ${tab === "paste" ? "active" : ""}`} onClick={() => setTab("paste")}>
              Paste text
            </button>
            <button className={`tab-button ${tab === "upload" ? "active" : ""}`} onClick={() => setTab("upload")}>
              Upload files
            </button>
            <button className={`tab-button ${tab === "drive" ? "active" : ""}`} onClick={() => setTab("drive")}>
              Google Drive
            </button>
          </div>

          {tab === "paste" ? (
            <div>
              <textarea
                className="text-area text-area--large"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Paste your notes here. We'll do the rest."
              />
              <p className="char-count">{inputValue.length}/100,000 characters</p>
            </div>
          ) : null}

          {tab === "upload" ? (
            <div className="upload-card upload-card--small">
              <Upload size={48} />
              <h4>Drop files to build your study guide</h4>
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

          {tab === "drive" ? (
            <div className="upload-card upload-card--small">
              <Globe size={48} />
              <h4>Connect Google Drive to import source notes</h4>
              <button
                type="button"
                onClick={() => {
                  setDriveConnected(true);
                  onGenerated("Google Drive connected for study guide generation.");
                }}
              >
                {driveConnected ? "Drive connected" : "Connect Drive"}
              </button>
            </div>
          ) : null}

          <section className="guide-meta">
            <h4>This upload will also provide:</h4>
            <div>
              <span className="pill">Flashcards</span>
              <p>Memorise your material</p>
            </div>
          </section>
        </div>

        <footer className="overlay__footer">
          <p>
            This product is enhanced with AI and may provide incorrect or problematic content. Do not enter
            any personal data.
          </p>
          <button
            type="button"
            disabled={!canGenerate}
            onClick={() => {
              const sourceMessage =
                tab === "paste"
                  ? "Study guide generated from pasted notes."
                  : tab === "upload"
                    ? "Study guide generated from uploaded files."
                    : "Study guide generated from connected Google Drive notes.";
              onGenerated(sourceMessage);
              onClose();
              setInputValue("");
              setSelectedFiles([]);
              setDriveConnected(false);
              setTab("paste");
            }}
          >
            Generate
          </button>
        </footer>
      </div>
    </div>
  );
};

export default StudyGuideModal;
