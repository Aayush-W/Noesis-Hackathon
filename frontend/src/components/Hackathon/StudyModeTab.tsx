import { useState } from "react";
import { BookOpen, CheckCircle, RefreshCcw, FileText } from "lucide-react";
import { studyApi } from "../../api/studyApi";
import type { PracticeQuestion } from "../../types/document";

interface StudyModeTabProps {
    subjectId: string;
    subjectName: string;
}

export const StudyModeTab = ({ subjectId, subjectName }: StudyModeTabProps) => {
    const [questions, setQuestions] = useState<PracticeQuestion[] | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        setIsGenerating(true);
        setError(null);
        try {
            const generated = await studyApi.generatePracticeTest(subjectId);

            // We expect the backend to give us exactly 5 MCQs and 3 short answers, 
            // but for this UI prototype we'll render whatever complies with the PracticeQuestion type.
            setQuestions(generated);
        } catch (err) {
            console.error(err);
            setError("Failed to generate study materials.");
        } finally {
            setIsGenerating(false);
        }
    };

    if (!questions) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                    <BookOpen size={32} className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Subject-Scoped Study Mode</h3>
                <p className="text-neutral-400 max-w-md mb-8">
                    Generate an intelligent practice exam exclusively derived from your uploaded notes for {subjectName}.
                    Includes 5 Multiple Choice and 3 Short Answer questions.
                </p>
                <button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2 group disabled:opacity-50"
                >
                    {isGenerating ? (
                        <>
                            <RefreshCcw size={20} className="animate-spin" />
                            Generating Test...
                        </>
                    ) : (
                        <>
                            <CheckCircle size={20} className="group-hover:scale-110 transition-transform" />
                            Generate Study Material
                        </>
                    )}
                </button>
            </div>
        );
    }

    return (
        <div className="h-full overflow-y-auto p-8 relative">
            <div className="max-w-3xl mx-auto pb-20">
                <div className="flex items-center justify-between font-bold mb-8 pb-4 border-b border-neutral-800">
                    <h2 className="text-2xl text-white">Practice Test: {subjectName}</h2>
                    <button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="text-sm bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded flex items-center gap-2 transition-colors disabled:opacity-50"
                    >
                        <RefreshCcw size={16} className={isGenerating ? "animate-spin" : ""} />
                        Regenerate
                    </button>
                </div>

                <div className="space-y-8">
                    {questions.map((q, index) => {
                        const isMCQ = q.options && q.options.length > 0;
                        return (
                            <div key={q.id} className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl shadow-sm">
                                <div className="flex gap-4">
                                    <span className="text-blue-500 font-bold text-lg select-none">Q{index + 1}.</span>
                                    <div className="flex-1 space-y-4">
                                        <p className="text-lg text-neutral-100 font-medium">{q.question}</p>

                                        {isMCQ ? (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                                                {q.options!.map((opt, i) => (
                                                    <div key={i} className={`p-4 rounded-lg border ${opt === q.answer ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-100" : "bg-neutral-950 border-neutral-800 text-neutral-400"}`}>
                                                        <div className="flex items-center gap-3">
                                                            <div className={`w-5 h-5 rounded-full border flex-shrink-0 ${opt === q.answer ? "border-emerald-500 bg-emerald-500/20" : "border-neutral-700"}`} />
                                                            <span>{opt}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 mt-4">
                                                <div className="text-xs text-neutral-500 font-bold mb-1 uppercase">Model Answer</div>
                                                <p className="text-neutral-200">{q.answer}</p>
                                            </div>
                                        )}

                                        <div className="mt-4 pt-4 border-t border-neutral-800 space-y-2">
                                            <div className="text-sm text-neutral-300">
                                                <span className="font-bold text-blue-400 mr-2">Explanation:</span>
                                                {q.explanation}
                                            </div>
                                            <div className="text-xs flex items-center gap-1.5 text-neutral-500 bg-neutral-950 w-max px-2 py-1 rounded">
                                                <FileText size={12} />
                                                Source: <span className="font-semibold text-neutral-400">{q.sourceFormat || "Unknown"}</span> | {q.locationRef}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
