import { useState, useEffect } from "react";
import { Upload, MessageSquare, BookOpen, CheckCircle, ChevronRight, ArrowLeft } from "lucide-react";
import { ChatInterface } from "../components/Hackathon/ChatInterface";
import { StudyModeTab } from "../components/Hackathon/StudyModeTab";
import { uploadApi } from "../api/uploadApi";

// Mock subjects to fulfill the 'exactly 3 subjects' requirement
const FIXED_SUBJECTS = [
    { id: "physics", name: "Physics" },
    { id: "chemistry", name: "Chemistry" },
    { id: "maths", name: "Maths" },
];

const HackathonDashboard = () => {
    const [activeSubjectId, setActiveSubjectId] = useState<string>(FIXED_SUBJECTS[0].id);
    const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
    const [files, setFiles] = useState<File[]>([]);
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        // Reset state when changing subject
        setCurrentStep(1);
        setFiles([]);
    }, [activeSubjectId]);

    const activeSubject = FIXED_SUBJECTS.find((s) => s.id === activeSubjectId)!;

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setIsUploading(true);
            const newFiles = Array.from(e.target.files);

            try {
                // Upload files to actual backend RAG pipeline sequentially
                for (const file of newFiles) {
                    await uploadApi.uploadNotes(file, activeSubjectId);
                }
                const updatedFiles = [...files, ...newFiles];
                setFiles(updatedFiles);
                // Move to Chat immediately upon successful upload
                setTimeout(() => setCurrentStep(2), 500);
            } catch (error) {
                console.error("Upload failed", error);
                alert("Failed to upload notes to knowledge base.");
            } finally {
                setIsUploading(false);
            }
        }
    };

    return (
        <div className="flex h-screen bg-neutral-900 text-neutral-100 font-sans overflow-hidden">
            {/* 1. Three-Subject Sidebar */}
            <aside className="w-64 bg-neutral-950 border-r border-neutral-800 flex flex-col shrink-0">
                <div className="p-6">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent flex items-center gap-2">
                        <BookOpen size={20} className="text-blue-500" />
                        AskMyNotes
                    </h1>
                    <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider font-semibold">Study Copilot</p>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {FIXED_SUBJECTS.map((subject) => (
                        <button
                            key={subject.id}
                            onClick={() => setActiveSubjectId(subject.id)}
                            className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeSubjectId === subject.id
                                ? "bg-blue-600/10 text-blue-400 border border-blue-500/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                                : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 border border-transparent"
                                }`}
                        >
                            <div className={`w-2 h-2 rounded-full mr-3 shadow-[0_0_8px_rgba(0,0,0,0.5)] ${activeSubjectId === subject.id ? "bg-blue-500 shadow-blue-500/50" : "bg-neutral-700"}`} />
                            <span className="font-medium tracking-wide">{subject.name}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-4 text-xs font-semibold tracking-wider uppercase text-neutral-600 text-center border-t border-neutral-800/80 bg-neutral-950/50">
                    Strict Subject Isolation
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 bg-neutral-900">
                {/* Header with Stepper logic */}
                <header className="h-20 border-b border-neutral-800/80 bg-neutral-900/50 backdrop-blur-md flex items-center justify-between px-8 shrink-0 shadow-sm z-10 w-full relative">
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold text-white shrink-0 tracking-tight">{activeSubject.name} Workspace</h2>
                        <p className="text-sm text-neutral-400 shrink-0 font-medium">Follow the guided process to study.</p>
                    </div>

                    <div className="border border-neutral-800 rounded-full px-5 py-2.5 bg-neutral-950 flex items-center shadow-inner">
                        <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-blue-400' : 'text-neutral-600'} transition-colors duration-300`}>
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${currentStep >= 1 ? 'bg-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)]' : 'bg-neutral-800'}`}>1</div>
                            <span className="text-sm font-semibold tracking-wide">Upload</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-neutral-700 mx-3" />
                        <div className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-indigo-400' : 'text-neutral-600'} transition-colors duration-300`}>
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${currentStep >= 2 ? 'bg-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.2)]' : 'bg-neutral-800'}`}>2</div>
                            <span className="text-sm font-semibold tracking-wide">Chat</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-neutral-700 mx-3" />
                        <div className={`flex items-center gap-2 ${currentStep >= 3 ? 'text-purple-400' : 'text-neutral-600'} transition-colors duration-300`}>
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${currentStep >= 3 ? 'bg-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.2)]' : 'bg-neutral-800'}`}>3</div>
                            <span className="text-sm font-semibold tracking-wide">Test</span>
                        </div>
                    </div>
                </header>

                {/* Step Content */}
                <div className="flex-1 overflow-hidden relative flex flex-col bg-neutral-900">
                    {/* Step 1: Upload Hub */}
                    {currentStep === 1 && (
                        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500 slide-in-from-bottom-4">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-full flex items-center justify-center mb-6 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                                <Upload size={40} className="text-blue-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-3">Upload your {activeSubject.name} Notes</h3>
                            <p className="text-neutral-400 max-w-lg mx-auto mb-10 text-base leading-relaxed">
                                Upload your study materials (PDF or TXT) to establish the AI's strictly-scoped knowledge base. The copilot will only answer questions based on these documents.
                            </p>
                            <label className={`cursor-pointer group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 transition-all transform active:scale-95 shadow-lg shadow-blue-500/20 border border-blue-400/30 ${isUploading ? 'opacity-50 pointer-events-none' : 'hover:-translate-y-0.5'}`}>
                                {isUploading ? (
                                    <span className="animate-spin text-white">↻</span>
                                ) : (
                                    <Upload size={22} className="group-hover:scale-110 transition-transform" />
                                )}
                                <span>{isUploading ? 'Processing Documents...' : 'Select Files to Upload'}</span>
                                <input type="file" multiple accept=".pdf,.txt" className="hidden" onChange={handleFileChange} disabled={isUploading} />
                            </label>

                            {files.length > 0 && (
                                <div className="mt-10 animate-in fade-in zoom-in duration-300">
                                    <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-6 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
                                        <CheckCircle size={18} />
                                        <span>{files.length} file(s) indexed securely</span>
                                    </div>
                                    <button
                                        onClick={() => setCurrentStep(2)}
                                        className="bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-3 rounded-lg font-bold text-base transition-all flex items-center gap-2 group border border-neutral-700 mx-auto"
                                    >
                                        Integrate & Chat Now
                                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 2: Chat Interface */}
                    {currentStep === 2 && (
                        <div className="flex-1 flex flex-col h-full bg-neutral-900 border-t border-neutral-800/50 relative animate-in fade-in duration-500">
                            {/* Navigation Bar for Step 2 */}
                            <div className="absolute top-4 right-8 z-20 flex gap-3">
                                <button
                                    onClick={() => setCurrentStep(1)}
                                    className="bg-neutral-900/80 backdrop-blur text-neutral-400 hover:text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors border border-neutral-700 md:opacity-0 md:group-hover:opacity-100"
                                >
                                    <Upload size={14} /> Add More
                                </button>
                                <button
                                    onClick={() => setCurrentStep(3)}
                                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-2 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg shadow-indigo-500/20 transition-all border border-indigo-400/30 hover:-translate-y-0.5"
                                >
                                    Proceed to Study Mode
                                    <ChevronRight size={16} />
                                </button>
                            </div>

                            <ChatInterface subjectId={activeSubjectId} subjectName={activeSubject.name} />
                        </div>
                    )}

                    {/* Step 3: Study Mode */}
                    {currentStep === 3 && (
                        <div className="flex-1 flex flex-col h-full bg-neutral-900 border-t border-neutral-800/50 relative animate-in slide-in-from-right-8 duration-500">
                            {/* Navigation Bar for Step 3 */}
                            <div className="absolute top-4 left-8 z-20">
                                <button
                                    onClick={() => setCurrentStep(2)}
                                    className="bg-neutral-900/80 backdrop-blur text-neutral-300 hover:text-white px-5 py-2 rounded-lg font-medium text-sm flex items-center gap-2 shadow-sm transition-colors border border-neutral-700 hover:border-neutral-500"
                                >
                                    <ArrowLeft size={16} /> Look back at Chat
                                </button>
                            </div>

                            <StudyModeTab subjectId={activeSubjectId} subjectName={activeSubject.name} />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default HackathonDashboard;
