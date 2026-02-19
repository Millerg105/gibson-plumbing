'use client';

import { useState, type FormEvent } from 'react';
import { ArrowLeft, ArrowRight, Lightbulb, Phone } from 'lucide-react';

type QuizOption = {
    label: string;
    score: number;
};

type QuizQuestion = {
    id: string;
    question: string;
    insight: string;
    options: QuizOption[];
};

const QUESTIONS: QuizQuestion[] = [
    {
        id: 'boiler-age',
        question: 'How old is your current boiler?',
        insight: 'Boilers over 10 years old can lose up to 30% efficiency.',
        options: [
            { label: '0-5 Years', score: 0 },
            { label: '5-10 Years', score: 1 },
            { label: '10-15 Years', score: 2 },
            { label: '15+ Years', score: 3 },
        ],
    },
    {
        id: 'last-service',
        question: 'When was your boiler last serviced?',
        insight: 'Annual servicing keeps performance high and helps prevent breakdowns.',
        options: [
            { label: 'Within 12 months', score: 0 },
            { label: '1-2 years ago', score: 1 },
            { label: '2-3 years ago', score: 2 },
            { label: 'Over 3 years ago', score: 3 },
        ],
    },
    {
        id: 'heating-consistency',
        question: 'How quickly does your home warm up?',
        insight: 'Slow warm-up can indicate poor circulation or reduced boiler output.',
        options: [
            { label: 'Very quickly', score: 0 },
            { label: 'Reasonably quickly', score: 1 },
            { label: 'Takes a while', score: 2 },
            { label: 'Often never fully warms', score: 3 },
        ],
    },
    {
        id: 'faults-pressure',
        question: 'How often do you reset pressure or see fault codes?',
        insight: 'Frequent resets are a common sign that your system needs attention.',
        options: [
            { label: 'Never', score: 0 },
            { label: 'A few times yearly', score: 1 },
            { label: 'Monthly', score: 2 },
            { label: 'Weekly or more', score: 3 },
        ],
    },
    {
        id: 'energy-bills',
        question: 'How are your winter energy bills changing?',
        insight: 'Rising bills with similar usage often point to efficiency losses.',
        options: [
            { label: 'Stable or lower', score: 0 },
            { label: 'Slightly higher', score: 1 },
            { label: 'Noticeably higher', score: 2 },
            { label: 'Much higher each year', score: 3 },
        ],
    },
];

export default function BoilerQuiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<(number | null)[]>(Array(QUESTIONS.length).fill(null));
    const [showResult, setShowResult] = useState(false);
    const [leadName, setLeadName] = useState('');
    const [leadPhone, setLeadPhone] = useState('');
    const [leadSubmitted, setLeadSubmitted] = useState(false);

    const currentQuestion = QUESTIONS[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;
    const answeredCurrent = answers[currentQuestionIndex] !== null;
    const progressPercent = Math.round(((currentQuestionIndex + 1) / QUESTIONS.length) * 100);

    const totalScore = answers.reduce<number>((sum, score) => sum + (score ?? 0), 0);

    const result =
        totalScore <= 4
            ? {
                title: 'Excellent Efficiency',
                accent: 'text-emerald-400',
                summary: 'Your answers suggest your boiler is running efficiently right now.',
                recommendation: 'Keep annual servicing in place to maintain performance and reliability.',
            }
            : totalScore <= 8
                ? {
                    title: 'Fair Efficiency',
                    accent: 'text-amber-300',
                    summary: 'Your system is doing okay, but there are signs of avoidable heat and cost loss.',
                    recommendation: 'A professional tune-up and system check could improve running costs.',
                }
                : {
                    title: 'Needs Attention',
                    accent: 'text-red-300',
                    summary: 'Your boiler may be costing more than it should and could be at higher risk of faults.',
                    recommendation: 'Book a boiler health check soon to avoid bigger repair costs.',
                };

    const selectAnswer = (score: number) => {
        setAnswers((prev) => {
            const next = [...prev];
            next[currentQuestionIndex] = score;
            return next;
        });
    };

    const handleContinue = () => {
        if (!answeredCurrent) return;
        if (isLastQuestion) {
            setShowResult(true);
            return;
        }
        setCurrentQuestionIndex((prev) => prev + 1);
    };

    const handleBack = () => {
        if (showResult) {
            setShowResult(false);
            return;
        }
        setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
    };

    const handleRetake = () => {
        setCurrentQuestionIndex(0);
        setAnswers(Array(QUESTIONS.length).fill(null));
        setShowResult(false);
        setLeadName('');
        setLeadPhone('');
        setLeadSubmitted(false);
    };

    const handleLeadSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!leadName.trim() || !leadPhone.trim()) return;
        setLeadSubmitted(true);
    };

    return (
        <section className="py-24 bg-[#F0F2F5] relative border-t border-black/5 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-[#2C3E6B] mb-3 uppercase">Boiler Health Check</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-[#0F2040] leading-tight uppercase font-oswald">
                        Is Your Boiler <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F2040] to-slate-400">Efficient?</span>
                    </h3>
                    <p className="text-slate-500 mt-4">Take our 30-second health check to see if you could be saving money.</p>
                </div>

                <div className="max-w-xl mx-auto bg-slate-900 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative z-20">
                    {!showResult ? (
                        <>
                            <div className="mb-8">
                                <div className="flex justify-between text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                                    <span>Question {currentQuestionIndex + 1} of {QUESTIONS.length}</span>
                                    <span>{progressPercent}% Completed</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#2C3E6B] to-[#3d5285] rounded-full shadow-[0_0_10px_rgba(44,62,107,0.5)] transition-all duration-300"
                                        style={{ width: `${progressPercent}%` }}
                                    ></div>
                                </div>
                            </div>

                            <h4 className="text-2xl font-bold text-white mb-6">{currentQuestion.question}</h4>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {currentQuestion.options.map((option) => {
                                        const isSelected = answers[currentQuestionIndex] === option.score;
                                        return (
                                            <button
                                                key={option.label}
                                                onClick={() => selectAnswer(option.score)}
                                                className={`
                                                    relative h-14 rounded-lg border flex items-center justify-center transition-all duration-200 text-sm font-bold
                                                    ${isSelected
                                                        ? 'bg-white/10 border-white text-white shadow-lg shadow-white/5'
                                                        : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:border-white/20 hover:text-gray-100'
                                                    }
                                                `}
                                            >
                                                {option.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="mt-8 flex items-center gap-4 p-4 rounded-xl bg-[#2C3E6B]/10 border border-[#2C3E6B]/20">
                                <div className="p-2 bg-[#2C3E6B]/20 rounded-full text-[#2C3E6B]">
                                    <Lightbulb className="w-5 h-5" />
                                </div>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    <span className="font-bold text-white block mb-0.5 uppercase text-xs tracking-wider">Why this matters</span>
                                    {currentQuestion.insight}
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                                <button
                                    onClick={handleBack}
                                    disabled={currentQuestionIndex === 0}
                                    className="text-white/70 hover:text-white disabled:text-white/25 disabled:cursor-not-allowed px-3 py-2 rounded-md transition-colors flex items-center gap-1.5"
                                >
                                    <ArrowLeft className="w-4 h-4" /> Back
                                </button>

                                <button
                                    onClick={handleContinue}
                                    disabled={!answeredCurrent}
                                    className="bg-[#2C3E6B] hover:bg-[#3d5285] disabled:bg-[#2C3E6B]/40 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-[#2C3E6B]/20"
                                >
                                    {isLastQuestion ? 'See Result' : 'Continue'} <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mb-6">
                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Assessment complete</p>
                                <h4 className={`text-3xl font-bold mb-3 ${result.accent}`}>{result.title}</h4>
                                <p className="text-gray-200 leading-relaxed">{result.summary}</p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-4 mb-6">
                                <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Recommendation</p>
                                <p className="text-white/85 text-sm leading-relaxed">{result.recommendation}</p>
                            </div>

                            <div className="rounded-xl border border-[#2C3E6B]/30 bg-[#2C3E6B]/10 p-4 mb-6">
                                <p className="text-xs uppercase tracking-widest text-[#9fb4e6] mb-2">Need help now?</p>
                                <a
                                    href="tel:01942873026"
                                    className="inline-flex items-center gap-2 text-white font-bold hover:text-[#dbe7ff] transition-colors"
                                >
                                    <Phone className="w-4 h-4" /> Call 01942 873 026
                                </a>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-[#101010] p-4 mb-6">
                                <p className="text-xs uppercase tracking-widest text-white/45 mb-3">Request a callback</p>

                                {!leadSubmitted ? (
                                    <form onSubmit={handleLeadSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <input
                                            type="text"
                                            value={leadName}
                                            onChange={(e) => setLeadName(e.target.value)}
                                            placeholder="Your name"
                                            className="h-11 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[#2C3E6B]"
                                        />
                                        <input
                                            type="tel"
                                            value={leadPhone}
                                            onChange={(e) => setLeadPhone(e.target.value)}
                                            placeholder="Phone number"
                                            className="h-11 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[#2C3E6B]"
                                        />
                                        <button
                                            type="submit"
                                            className="sm:col-span-2 h-11 rounded-lg bg-[#2C3E6B] hover:bg-[#3d5285] text-white text-sm font-bold transition-colors"
                                        >
                                            Request callback
                                        </button>
                                    </form>
                                ) : (
                                    <p className="text-emerald-300 text-sm">Thanks, we have your details. A member of the team will call you shortly.</p>
                                )}
                            </div>

                            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                                <button
                                    onClick={handleBack}
                                    className="text-white/70 hover:text-white px-3 py-2 rounded-md transition-colors flex items-center gap-1.5"
                                >
                                    <ArrowLeft className="w-4 h-4" /> Review answers
                                </button>

                                <button
                                    onClick={handleRetake}
                                    className="bg-white/10 hover:bg-white/15 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors"
                                >
                                    Retake quiz
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* Footer Link */}
                <div className="mt-12 text-center pb-8 relative z-20">
                    <span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest opacity-60">Powered by Sovereign Systems</span>
                </div>

                {/* Background Gradients - Positioned relative to container but pushed back */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#2C3E6B]/10 rounded-full blur-[80px] -z-10"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#2C3E6B]/5 rounded-full blur-[100px] -z-10"></div>
            </div>
        </section>
    );
}
