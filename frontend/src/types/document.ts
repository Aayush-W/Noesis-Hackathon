export type SourceFormat =
  | "PDF"
  | "DOCX"
  | "PPTX"
  | "XLSX"
  | "TXT"
  | "IMAGE"
  | "GDOC";

export type ConfidenceTier = "HIGH" | "MEDIUM" | "NOT_FOUND";

export interface Citation {
  fileName: string;
  locationRef: string;
  chunkId: string;
  sourceFormat: SourceFormat;
}

export interface AnswerPayload {
  answer: string;
  confidenceTier: ConfidenceTier;
  confidenceScore: number;
  citations: Citation[];
  evidenceSnippets: string[];
  topChunkIds?: string[];
}

export interface PracticeQuestion {
  id: string;
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
  sourceFormat: SourceFormat;
  locationRef: string;
}
