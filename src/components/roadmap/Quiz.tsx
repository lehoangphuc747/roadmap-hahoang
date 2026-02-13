import React, { useState, useMemo, useRef, useEffect } from 'react';
import { marked } from 'marked';
import type { Question } from '../../data/quiz/session20';

interface QuizProps {
    sessionId?: number;
    /** Buổi 28: "grammar" = tên cấu trúc → chọn nghĩa; "grammar-reverse" = nghĩa → chọn cấu trúc */
    quizSet?: 'default' | 'grammar' | 'grammar-reverse';
}

// Dynamic quiz data loader
const getQuizData = async (sessionId: number = 20, quizSet: 'default' | 'grammar' | 'grammar-reverse' = 'default') => {
    try {
        const module = await import(`../../data/quiz/session${sessionId}.ts`);
        // Buổi 28: bài ôn tên cấu trúc (tên → nghĩa)
        if (sessionId === 28 && quizSet === 'grammar' && 'grammarNameQuizQuestions' in module) {
            return (module as { grammarNameQuizQuestions: Question[] }).grammarNameQuizQuestions;
        }
        // Buổi 28: bài ôn nghĩa → chọn cấu trúc (dạng ngược)
        if (sessionId === 28 && quizSet === 'grammar-reverse' && 'grammarMeaningToNameQuizQuestions' in module) {
            return (module as { grammarMeaningToNameQuizQuestions: Question[] }).grammarMeaningToNameQuizQuestions;
        }
        return module.quizQuestions;
    } catch (error) {
        console.error(`Failed to load session${sessionId}:`, error);
        // Fallback to session 20
        const module = await import('../../data/quiz/session20.ts');
        return module.quizQuestions;
    }
};

export default function Quiz({ sessionId = 20, quizSet = 'default' }: QuizProps) {
    const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Load quiz data on mount or when sessionId / quizSet changes
    useEffect(() => {
        const loadQuiz = async () => {
            console.log('[Quiz] Loading session:', sessionId, quizSet);
            setIsLoading(true);
            const questions = await getQuizData(sessionId, quizSet);
            console.log('[Quiz] Loaded questions:', questions.length, 'questions');
            setQuizQuestions(questions);
            setIsLoading(false);
        };
        loadQuiz();
    }, [sessionId, quizSet]);

    // Type for storing user answer state
    interface UserAnswer {
        questionId: number;
        selectedOption: string | null;
        textInput: string;
        isCorrect: boolean | null; // null = not answered/checked yet
        isChecked: boolean;
    }

    // Persistent state for ALL questions
    // Map questionIndex (0 to N) -> UserAnswer
    const [answers, setAnswers] = useState<Record<number, UserAnswer>>({});

    const [isFinished, setIsFinished] = useState(false);

    /** Câu nào đã xem dịch tiếng Việt trước khi chọn đáp án → trừ 0,5 điểm (chỉ áp dụng khi question có translationVi) */
    const [translationPeeked, setTranslationPeeked] = useState<Record<number, boolean>>({});

    //  Element refs for focus management
    const inputRef = useRef<HTMLInputElement>(null);
    const nextBtnRef = useRef<HTMLButtonElement>(null);

    // Derived stats (có translationVi + peek → trừ 0,5 điểm mỗi câu)
    const score = useMemo(() => {
        let total = 0;
        quizQuestions.forEach((q, idx) => {
            const a = answers[idx];
            if (!a?.isCorrect) return;
            const peeked = (q as Question & { translationVi?: string }).translationVi && translationPeeked[idx];
            total += peeked ? 0.5 : 1;
        });
        return total;
    }, [answers, quizQuestions, translationPeeked]);

    // Helper: đáp án đúng (hiển thị / so sánh) — hỗ trợ cả string và string[]
    const getCorrectAnswers = (q: Question): string[] =>
        Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer];
    const getCorrectAnswerDisplay = (q: Question): string =>
        getCorrectAnswers(q).join(' / ');

    /** Chuyển **text** trong câu hỏi thành chữ in đậm (màu nổi bật) */
    const renderQuestionWithBold = (text: string): React.ReactNode => {
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return parts.map((part, i) =>
            i % 2 === 1 ? (
                <strong key={i} className="text-indigo-600 font-bold">{part}</strong>
            ) : (
                part
            )
        );
    };

    // Current question - guaranteed to exist after loading check below
    const question = quizQuestions[currentIndex] || null;

    // Safe accessors for CURRENT question state
    const currentAnswerState: UserAnswer | null = question && answers[currentIndex] ? answers[currentIndex] : (question ? {
        questionId: question.id,
        selectedOption: null,
        textInput: '',
        isCorrect: null,
        isChecked: false
    } : null);

    const selectedOption = currentAnswerState?.selectedOption || null;
    const textInput = currentAnswerState?.textInput || '';
    const isChecked = currentAnswerState?.isChecked || false;

    // Shuffle options only once per question
    const shuffledOptions = useMemo(() => {
        if (question && question.type === 'multiple-choice' && question.options) {
            return [...question.options].sort(() => Math.random() - 0.5);
        }
        return [];
    }, [currentIndex, question]); // Note: In a real persistent app,  shuffle might need persistence too, but re-shuffle on revisit is acceptable for now or usually minor. 
    // Actually, re-shuffling might be annoying if user goes back. 
    // Ideally shuffled options should be static or memoized by question ID globally, 
    // but for simplicity let's accept re-shuffle on mount/remount of index if simple.

    // Focus input automatically on new question
    useEffect(() => {
        if (question && question.type === 'fill-input' && !isChecked) {
            // slightly delay to ensure render
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [currentIndex, isChecked, question]);

    // Update LOCAL answer state helper
    const updateCurrentAnswer = (updates: Partial<UserAnswer>) => {
        if (!question) return; // Safety check

        setAnswers(prev => ({
            ...prev,
            [currentIndex]: {
                questionId: question.id,
                selectedOption: currentAnswerState?.selectedOption || null,
                textInput: currentAnswerState?.textInput || '',
                isCorrect: currentAnswerState?.isCorrect || null,
                isChecked: currentAnswerState?.isChecked || false,
                ...updates
            }
        }));
    };

    // Handle Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isFinished) return;

            // Number keys 1-4 for MC
            if (question.type === 'multiple-choice' && !isChecked && shuffledOptions) {
                const key = parseInt(e.key);
                if (key >= 1 && key <= 4 && key <= shuffledOptions.length) {
                    handleSelect(shuffledOptions[key - 1]);
                }
            }

            if (e.key === 'Enter') {
                if (isChecked) {
                    handleNext();
                } else {
                    if (selectedOption || textInput.trim().length > 0) {
                        handleCheck();
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isChecked, selectedOption, textInput, isFinished, shuffledOptions, currentIndex]); // Add dependencies

    const handleSelect = (option: string) => {
        if (isChecked) return;
        updateCurrentAnswer({ selectedOption: option });
    };

    const handleTextChange = (val: string) => {
        if (isChecked) return;
        updateCurrentAnswer({ textInput: val });
    }

    const handleCheck = () => {
        let isCorrect = false;
        const correct = question.correctAnswer;

        if (question.type === 'multiple-choice') {
            isCorrect = Array.isArray(correct) ? correct.includes(selectedOption ?? '') : selectedOption === correct;
        } else {
            const normalizedInput = textInput.trim().toLowerCase();
            const answerStr = Array.isArray(correct) ? correct[0] : correct;
            if (answerStr && normalizedInput === answerStr.toLowerCase()) isCorrect = true;
        }

        updateCurrentAnswer({
            isChecked: true,
            isCorrect: isCorrect
        });
    };

    const handleNext = () => {
        if (currentIndex < quizQuestions.length - 1) {
            setCurrentIndex(c => c + 1);
        } else {
            finishQuiz();
        }
    };

    const finishQuiz = () => {
        setIsFinished(true);
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleRestart = () => {
        setAnswers({});
        setTranslationPeeked({});
        setCurrentIndex(0);
        setIsFinished(false);
    };

    const jumpToQuestion = (index: number) => {
        if (isFinished) return;
        // Optional: Block navigation if current question checked? No, user requested free navigation logic implies freedom.
        setCurrentIndex(index);
    };

    // --- RENDERERS ---

    // Loading state
    if (isLoading || quizQuestions.length === 0) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="text-center">
                    <div className="text-4xl mb-4">⏳</div>
                    <div className="text-slate-600 font-medium">Đang tải câu hỏi...</div>
                </div>
            </div>
        );
    }

    if (isFinished) {
        // ... (Same finish screen logic, but using `answers` state)
        const totalQ = quizQuestions.length;
        const peekCountForDownload = Object.values(translationPeeked).filter(Boolean).length;
        const downloadHtmlResult = () => {
            const dateStr = new Intl.DateTimeFormat('vi-VN', { dateStyle: 'full', timeStyle: 'short' }).format(new Date());
            const wrongCount = Object.values(answers).filter(a => a.isChecked && !a.isCorrect).length;
            const skippedCount = quizQuestions.length - Object.values(answers).filter(a => a.isChecked).length;
            const scoreDisplay = typeof score === 'number' && score % 1 !== 0 ? score.toFixed(1) : score;

            const html = `
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kết quả bài kiểm tra - Buổi 20</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #334155; max-width: 800px; margin: 0 auto; padding: 20px; background: #f8fafc; }
        .card { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; border: 1px solid #e2e8f0; }
        h1 { color: #1e293b; margin-bottom: 8px; }
        .header-meta { color: #64748b; font-size: 0.9em; margin-bottom: 24px; }
        .score-box { background: #f1f5f9; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 30px; }
        .score-num { font-size: 3em; font-weight: bold; color: #4f46e5; display: block; }
        .score-detail { font-weight: bold; color: #475569; }
        .q-item { border-bottom: 1px solid #f1f5f9; padding: 20px 0; }
        .q-item:last-child { border-bottom: none; }
        .q-header { display: flex; justify-content: space-between; margin-bottom: 10px; align-items: baseline; }
        .q-num { font-weight: bold; color: #1e293b; }
        .status { font-size: 0.8em; padding: 4px 8px; border-radius: 4px; font-weight: bold; }
        .correct { background: #dcfce7; color: #166534; }
        .wrong { background: #ffe4e6; color: #9f1239; }
        .skipped { background: #f1f5f9; color: #64748b; }
        .q-text { font-size: 1.1em; margin-bottom: 12px; white-space: pre-line; font-weight: 500; }
        .answer-row { margin-top: 8px; font-size: 0.95em; }
        .label { font-weight: bold; font-size: 0.85em; color: #94a3b8; width: 80px; display: inline-block; }
        .val { font-weight: 500; }
        .val.user-wrong { color: #e11d48; text-decoration: line-through; }
        .val.user-correct { color: #16a34a; }
        .val.correct-ans { color: #16a34a; }
        .explanation { margin-top: 12px; font-size: 0.9em; background: #f8fafc; padding: 12px; border-radius: 6px; color: #64748b; border: 1px dashed #cbd5e1; }
        .explanation h3 { font-weight: bold; font-size: 1em; margin: 0.75em 0 0.25em; }
        .explanation strong { color: #4f46e5; }
        .explanation code { background: #e2e8f0; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
        .explanation ul { margin: 0.5em 0; padding-left: 1.5em; }
        .explanation hr { margin: 0.75em 0; border: none; border-top: 1px solid #e2e8f0; }
    </style>
</head>
<body>
    <div class="card">
        <h1>Kết quả bài kiểm tra - Buổi 20</h1>
        <div class="header-meta">Ngày làm bài: ${dateStr}</div>
        
        <div class="score-box">
            <span class="score-num">${scoreDisplay} / ${quizQuestions.length}</span>
            <span class="score-detail">Chính xác: ${Math.round((score / quizQuestions.length) * 100)}%</span>
            <div style="margin-top: 10px; font-size: 0.9em; color: #64748b;">
                Đúng: ${scoreDisplay} | Sai: ${wrongCount} | Bỏ qua: ${skippedCount}
            </div>
            ${peekCountForDownload > 0 ? `<div style="margin-top: 8px; font-size: 0.85em; color: #b45309;">Đã trừ ${peekCountForDownload * 0.5} điểm do xem dịch trước khi trả lời (${peekCountForDownload} câu)</div>` : ''}
        </div>
    </div>

    <div class="card">
        ${quizQuestions.map((q, idx) => {
                const ans = answers[idx];
                const isCorrect = ans?.isCorrect;
                const userChoice = ans?.selectedOption || ans?.textInput || '(Chưa trả lời)';
                const statusClass = isCorrect ? 'correct' : (ans?.isChecked ? 'wrong' : 'skipped');
                const statusText = isCorrect ? 'ĐÚNG' : (ans?.isChecked ? 'SAI' : 'BỎ QUA');

                return `
            <div class="q-item">
                <div class="q-header">
                    <span class="q-num">Câu ${idx + 1} (${q.grammarPoint})</span>
                    <span class="status ${statusClass}">${statusText}</span>
                </div>
                <div class="q-text">${q.question.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#4f46e5;font-weight:bold">$1</strong>')}</div>
                
                <div class="answer-row">
                    <span class="label">Bạn chọn:</span>
                    <span class="val ${isCorrect ? 'user-correct' : 'user-wrong'}">${userChoice}</span>
                </div>
                ${!isCorrect ? `
                <div class="answer-row">
                    <span class="label">Đáp án:</span>
                    <span class="val correct-ans">${getCorrectAnswerDisplay(q)}</span>
                </div>` : ''}
                
                <div class="explanation">
                    💡 ${marked.parse(q.explanation, { async: false })}
                </div>
            </div>`;
            }).join('')}
    </div>
</body>
</html>`;

            const blob = new Blob([html], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `KetQua_BaiTap_Buoi20_${new Date().getTime()}.html`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        };
        const percentage = Math.round((score / totalQ) * 100);
        const peekCount = Object.values(translationPeeked).filter(Boolean).length;
        // Find wrong using `answers`
        const wrongIds = Object.values(answers)
            .filter(a => a.isChecked && !a.isCorrect)
            .map(a => a.questionId);

        return (
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 animate-fade-in relative overflow-hidden">
                <div className="text-center relative z-10">
                    <div className="mb-6 text-6xl">{percentage >= 80 ? '🏆' : percentage >= 50 ? '🙂' : '📚'}</div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Hoàn thành!</h2>
                    <p className="text-slate-500 mb-8">Bạn đã hoàn thành bài kiểm tra ngữ pháp.</p>

                    <div className="bg-slate-50 rounded-xl p-6 mb-8 inline-block w-full max-w-sm">
                        <div className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-2">Điểm số của bạn</div>
                        <div className="text-5xl font-bold text-indigo-600 mb-2">{Number(score) === score && score % 1 !== 0 ? score.toFixed(1) : score} / {totalQ}</div>
                        <div className={`font-bold ${percentage >= 80 ? 'text-emerald-500' : 'text-slate-600'}`}>
                            {percentage}% Chính xác
                        </div>
                        {peekCount > 0 && (
                            <div className="mt-2 text-amber-600 text-sm">
                                Đã trừ {peekCount * 0.5} điểm do xem dịch trước khi trả lời ({peekCount} câu)
                            </div>
                        )}
                    </div>
                </div>

                {/* Result Grid Review */}
                <div className="mb-8">
                    <h3 className="text-center text-slate-500 font-bold mb-4">Chi tiết kết quả</h3>
                    <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
                        {quizQuestions.map((q, idx) => {
                            const ans = answers[idx];
                            const statusClass = ans?.isCorrect
                                ? 'bg-emerald-500 text-white border-emerald-600'
                                : (ans?.isChecked ? 'bg-rose-500 text-white border-rose-600' : 'bg-slate-100 text-slate-300');
                            return (
                                <div key={idx} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${statusClass}`}>
                                    {idx + 1}
                                </div>
                            )
                        })}
                    </div>
                </div>

                {wrongIds.length > 0 && (
                    <div className="mb-8 p-6 bg-rose-50 rounded-xl border border-rose-100 text-left">
                        <h3 className="font-bold text-rose-800 mb-4 flex items-center gap-2">
                            <span>⚠️</span> Cần xem lại ({wrongIds.length} câu)
                        </h3>
                        {/* Compacted for better overview */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                            {wrongIds.map(id => {
                                const q = quizQuestions.find(i => i.id === id);
                                if (!q) return null;
                                return (
                                    <div key={id} className="text-sm bg-white p-4 rounded-lg border border-rose-100 shadow-sm h-full">
                                        <div className="font-bold text-slate-700 mb-2 flex justify-between items-start">
                                            <span>#{id} {q.grammarPoint}</span>
                                            <span className="text-rose-500 text-[10px] bg-rose-50 px-2 py-0.5 rounded uppercase tracking-wider">Sai</span>
                                        </div>
                                        <div className="text-slate-500 mb-2 line-clamp-2" title={q.question}>
                                            {renderQuestionWithBold(q.question.replace(/\n/g, ' '))}
                                        </div>
                                        <div className="text-emerald-600 font-medium bg-emerald-50 inline-block px-2 py-1 rounded mb-1 text-xs">
                                            Đ.án: {getCorrectAnswerDisplay(q)}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

                <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={handleRestart}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all"
                    >
                        Làm lại bài
                    </button>
                    <button
                        onClick={downloadHtmlResult}
                        className="bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2"
                    >
                        <span>📥</span> Tải kết quả (HTML)
                    </button>
                </div>
                <div className="mt-6 text-center">
                    <a href="/" className="text-slate-400 hover:text-slate-600 font-medium text-sm underline">Quay về Lộ trình</a>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full font-sans">
            <div className="mx-auto w-full max-w-[1920px] flex flex-col lg:flex-row gap-4 items-start">

                {/* LEFT COLUMN: Main Quiz Card */}
                <div className="flex-1 w-full order-2 lg:order-1">
                    <div className="bg-white rounded-xl border-2 border-slate-300 overflow-hidden relative flex flex-col">
                        <div className="p-4 md:p-6 flex-1 flex flex-col">
                            {/* Header Row: Progress + Grammar Point */}
                            <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-bold text-slate-800">
                                        <span className="text-indigo-600">{currentIndex + 1}</span>
                                        <span className="text-slate-400 font-normal text-sm"> / {quizQuestions.length}</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
                                        📖 {question.grammarPoint}
                                    </span>
                                    {question.type === 'fill-input' && (
                                        <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                                            ⌨️ Tự luận
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Question Text (hỗ trợ **cấu trúc** → in đậm màu indigo) */}
                            <div className="mb-4">
                                <h3 className="text-lg font-bold text-slate-900 leading-relaxed whitespace-pre-line">
                                    {renderQuestionWithBold(question.question)}
                                </h3>
                                {/* Dịch tiếng Việt: chỉ hiển thị sau khi chọn đáp án; xem trước = trừ 0,5 điểm */}
                                {question.translationVi && (
                                    <div className="mt-3">
                                        {isChecked ? (
                                            <p className="text-slate-600 text-sm bg-slate-50 p-3 rounded-lg border border-slate-200">
                                                🇻🇳 <span className="font-medium">Dịch:</span> {question.translationVi}
                                            </p>
                                        ) : translationPeeked[currentIndex] ? (
                                            <p className="text-amber-800 text-sm bg-amber-50 p-3 rounded-lg border border-amber-200">
                                                🇻🇳 <span className="font-medium">Dịch:</span> {question.translationVi}
                                                <span className="block mt-1 text-amber-600 text-xs font-medium">⚠️ Đã xem trước khi trả lời – trừ 0,5 điểm</span>
                                            </p>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() => setTranslationPeeked(prev => ({ ...prev, [currentIndex]: true }))}
                                                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium py-2 px-3 rounded-lg border border-indigo-200 bg-indigo-50/50 hover:bg-indigo-50 transition-colors"
                                            >
                                                📖 Xem dịch tiếng Việt (trừ 0,5 điểm nếu xem trước khi trả lời)
                                            </button>
                                        )}
                                    </div>
                                )}
                                {question.description && !question.translationVi && (
                                    <p className="text-slate-500 text-sm mt-2 italic bg-slate-50 p-2 rounded-lg border border-slate-100 inline-block">
                                        💡 {question.description}
                                    </p>
                                )}
                            </div>

                            {/* Input Area */}
                            <div className="mb-4 flex-1">
                                {question.type === 'multiple-choice' && question.options ? (
                                    <div className="grid grid-cols-1 gap-3">
                                        {shuffledOptions.map((opt, idx) => {
                                            // Styling Logic with Persistence Focus
                                            let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium flex justify-between items-center group relative overflow-hidden ";

                                            if (isChecked) {
                                                if (getCorrectAnswers(question).includes(opt)) {
                                                    btnClass += "border-emerald-500 bg-emerald-50 text-emerald-800 shadow-sm";
                                                } else if (opt === selectedOption) {
                                                    btnClass += "border-rose-200 bg-rose-50 text-rose-800";
                                                } else {
                                                    btnClass += "border-slate-100 text-slate-400 opacity-50 grayscale";
                                                }
                                            } else {
                                                if (opt === selectedOption) {
                                                    btnClass += "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-md shadow-indigo-100";
                                                } else {
                                                    btnClass += "border-slate-100 hover:border-indigo-300 hover:bg-slate-50 text-slate-600 hover:shadow-sm";
                                                }
                                            }

                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleSelect(opt)}
                                                    disabled={isChecked}
                                                    className={btnClass}
                                                >
                                                    <span className="flex items-center gap-4 relative z-10">
                                                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold border transition-colors ${isChecked
                                                            ? (getCorrectAnswers(question).includes(opt) ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-200 bg-white text-slate-300')
                                                            : (selectedOption === opt ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-200 bg-white text-slate-400 group-hover:border-indigo-300 group-hover:text-indigo-400')
                                                            }`}>
                                                            {idx + 1}
                                                        </span>
                                                        <span className="text-lg">{opt}</span>
                                                    </span>
                                                    {isChecked && getCorrectAnswers(question).includes(opt) && <span className="text-xl">✅</span>}
                                                    {isChecked && opt === selectedOption && !getCorrectAnswers(question).includes(opt) && <span className="text-xl">❌</span>}
                                                </button>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <div>
                                        <div className="relative">
                                            <input
                                                ref={inputRef}
                                                type="text"
                                                value={textInput}
                                                onChange={(e) => handleTextChange(e.target.value)}
                                                disabled={isChecked}
                                                placeholder="Nhập câu trả lời..."
                                                className={`w-full p-5 text-lg border-2 rounded-2xl outline-none transition-all shadow-sm ${isChecked
                                                    ? (currentAnswerState.isCorrect
                                                        ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                                                        : 'border-rose-500 bg-rose-50 text-rose-800')
                                                    : 'border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 text-slate-700'
                                                    }`}
                                                autoComplete="off"
                                            />
                                            {isChecked && (
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">
                                                    {currentAnswerState.isCorrect ? '✅' : '❌'}
                                                </div>
                                            )}
                                        </div>

                                        {isChecked && !currentAnswerState.isCorrect && (
                                            <div className="mt-4 p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-start gap-3">
                                                <span className="text-xl">💡</span>
                                                <div>
                                                    <div className="text-xs font-bold text-emerald-600 uppercase mb-1">Đáp án đúng</div>
                                                    <div className="font-bold text-emerald-900 text-lg">{getCorrectAnswerDisplay(question)}</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {isChecked && (
                                <div className={`p-5 rounded-2xl mb-8 border-2 animate-fade-in ${currentAnswerState.isCorrect
                                    ? 'bg-emerald-50/50 text-emerald-900 border-emerald-400'
                                    : 'bg-rose-50/50 text-rose-900 border-rose-400'
                                    }`}>
                                    <div className="font-bold mb-2 flex items-center gap-2 text-lg">
                                        {currentAnswerState.isCorrect ? '🎉 Chính xác!' : '😢 Rất tiếc!'}
                                    </div>
                                    <div
                                        className="explanation-markdown text-sm leading-relaxed opacity-90 [&_h3]:font-bold [&_h3]:text-base [&_h3]:mt-3 [&_h3]:mb-1 [&_strong]:text-indigo-600 [&_code]:bg-slate-200 [&_code]:px-1.5 [&_code]:rounded [&_code]:text-slate-800 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2 [&_li]:my-0.5 [&_hr]:my-3 [&_hr]:border-slate-200 [&_p]:my-1"
                                        dangerouslySetInnerHTML={{ __html: marked.parse(question.explanation, { async: false }) }}
                                    />
                                </div>
                            )}

                            {/* Action Button */}
                            <div className="pt-3 border-t border-slate-100">
                                <button
                                    ref={nextBtnRef}
                                    onClick={isChecked ? handleNext : handleCheck}
                                    disabled={!isChecked && ((question.type === 'multiple-choice' && !selectedOption) || (question.type === 'fill-input' && !textInput.trim()))}
                                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all active:scale-[0.99] flex items-center justify-center gap-2 ${!isChecked && ((question.type === 'multiple-choice' && !selectedOption) || (question.type === 'fill-input' && !textInput.trim()))
                                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none border border-slate-200'
                                        : isChecked
                                            ? 'bg-slate-800 text-white hover:bg-slate-900 shadow-slate-300'
                                            : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200 hover:shadow-indigo-300'
                                        }`}
                                >
                                    {isChecked
                                        ? (currentIndex === quizQuestions.length - 1 ? <span>Xem kết quả 🏁</span> : <span>Câu tiếp theo <span className="opacity-70 text-sm font-normal">(Enter)</span> →</span>)
                                        : <span>Kiểm tra <span className="opacity-70 text-sm font-normal">(Enter)</span></span>}
                                </button>
                                {!isChecked && (
                                    <div className="text-center mt-3 text-slate-400 text-xs">
                                        Phím tắt: [1-4] chọn, [Enter] kiểm tra
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Dashboard Sidebar */}
                <div className="w-full lg:w-[280px] flex-shrink-0 order-1 lg:order-2">
                    <div className="bg-white rounded-xl border-2 border-slate-400 p-3 sticky top-4">
                        <div className="flex justify-between items-center mb-3">
                            <span className="font-bold text-slate-700 text-sm">Câu hỏi</span>
                            <span className="text-xs font-bold px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded">Điểm: {typeof score === 'number' && score % 1 !== 0 ? score.toFixed(1) : score}</span>
                        </div>

                        {/* Question Grid */}
                        <div className="grid grid-cols-8 md:grid-cols-10 lg:grid-cols-8 gap-1">
                            {quizQuestions.map((q, idx) => {
                                const ans = answers[idx];
                                // Determine status
                                const isCurrent = idx === currentIndex;
                                const isAnswered = ans?.isChecked;
                                const isCorrect = ans?.isCorrect;

                                let bgClass = "bg-slate-50 text-slate-400 border-slate-100 hover:bg-white hover:border-indigo-200 hover:text-indigo-400"; // default
                                if (isAnswered) {
                                    if (isCorrect) bgClass = "bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600 shadow-sm shadow-emerald-200";
                                    else bgClass = "bg-rose-500 text-white border-rose-600 hover:bg-rose-600 shadow-sm shadow-rose-200";
                                }
                                if (isCurrent) {
                                    bgClass += " ring-2 ring-indigo-500 ring-offset-2 z-10 scale-110 font-bold shadow-md";
                                    if (!isAnswered) bgClass = "bg-white text-indigo-600 border-indigo-200 hover:border-indigo-300"; // Outline style for current active but unanswered
                                }

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => jumpToQuestion(idx)}
                                        className={`w-7 h-7 rounded flex items-center justify-center text-xs font-medium border transition-all ${bgClass}`}
                                        title={`Câu ${idx + 1}`}
                                    >
                                        {idx + 1}
                                    </button>
                                )
                            })}
                        </div>

                        <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-3 text-[10px] text-slate-400">
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Đúng</span>
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500"></span>Sai</span>
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full border border-indigo-500"></span>Hiện tại</span>
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-200"></span>Chưa làm</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

