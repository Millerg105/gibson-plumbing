'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, Clock, User, Phone, Mail, MapPin, Wrench,
    ArrowRight, ArrowLeft, Info, CheckCircle, Flame,
    Droplets, ShowerHead, ThermometerSun, Building2,
    Zap, Shield, FileText, MessageSquare, ChevronRight
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Gibson Plumbing — Online Booking Section
   Full 4-step interactive booking flow
   ───────────────────────────────────────────── */

// ── Service data ──
const SERVICES = [
    { id: 'boiler-service', name: 'Boiler Service & Repair', icon: Flame, description: 'Annual servicing, breakdowns & repairs', duration: '1-2 hrs', price: 'From £75' },
    { id: 'emergency', name: 'Emergency Plumbing', icon: Zap, description: '24/7 burst pipes, leaks & flooding', duration: 'ASAP', price: 'Call for quote' },
    { id: 'boiler-install', name: 'New Boiler Installation', icon: ThermometerSun, description: 'Combi, system & conventional boilers', duration: '1-2 days', price: 'From £1,800' },
    { id: 'bathroom', name: 'Bathroom Renovation', icon: ShowerHead, description: 'Full design, supply & fit service', duration: '5-10 days', price: 'From £3,500' },
    { id: 'central-heating', name: 'Central Heating', icon: Flame, description: 'Full system design, install & powerflushing', duration: '2-5 days', price: 'From £2,200' },
    { id: 'general-plumbing', name: 'General Plumbing', icon: Droplets, description: 'Taps, toilets, leaks & pipework', duration: '1-3 hrs', price: 'From £60' },
    { id: 'landlord-cert', name: 'Landlord Gas Certificate', icon: FileText, description: 'CP12 certificates & safety checks', duration: '30-60 min', price: 'From £55' },
    { id: 'commercial', name: 'Commercial & Industrial', icon: Building2, description: 'Business premises plumbing & heating', duration: 'Varies', price: 'Quote required' },
];

// ── Generate next 14 days ──
function getAvailableDates(): { date: Date; day: string; dayNum: number; month: string; available: boolean }[] {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const result = [];
    const now = new Date();
    for (let i = 1; i <= 14; i++) {
        const d = new Date(now);
        d.setDate(now.getDate() + i);
        result.push({
            date: d,
            day: days[d.getDay()],
            dayNum: d.getDate(),
            month: months[d.getMonth()],
            available: d.getDay() !== 0, // closed Sundays
        });
    }
    return result;
}

// ── Time slots ──
const TIME_SLOTS = [
    { time: '08:00 AM', period: 'morning' },
    { time: '09:00 AM', period: 'morning' },
    { time: '10:00 AM', period: 'morning' },
    { time: '11:00 AM', period: 'morning' },
    { time: '12:00 PM', period: 'afternoon' },
    { time: '01:00 PM', period: 'afternoon' },
    { time: '02:00 PM', period: 'afternoon' },
    { time: '03:00 PM', period: 'afternoon' },
    { time: '04:00 PM', period: 'afternoon' },
    { time: '05:00 PM', period: 'evening' },
];

// ── Step labels ──
const STEPS = [
    { num: 1, label: 'Service', icon: Wrench },
    { num: 2, label: 'Schedule', icon: Calendar },
    { num: 3, label: 'Details', icon: User },
    { num: 4, label: 'Confirm', icon: CheckCircle },
];

// ── Animation variants ──
const stepVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 80 : -80, opacity: 0 }),
};

export default function OnlineBooking() {
    const [currentStep, setCurrentStep] = useState(1);
    const [direction, setDirection] = useState(1);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', postcode: '', notes: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const dates = useMemo(() => getAvailableDates(), []);
    const selectedServiceData = SERVICES.find(s => s.id === selectedService);
    const selectedDateData = selectedDate !== null ? dates[selectedDate] : null;

    // Randomly disable 2-3 time slots per day to feel real
    const unavailableSlots = useMemo(() => {
        const count = 2 + Math.floor(Math.random() * 2);
        const indices = new Set<number>();
        while (indices.size < count) indices.add(Math.floor(Math.random() * TIME_SLOTS.length));
        return indices;
    }, [selectedDate]);

    function goNext() {
        if (currentStep < 4) { setDirection(1); setCurrentStep(prev => prev + 1); }
    }
    function goBack() {
        if (currentStep > 1) { setDirection(-1); setCurrentStep(prev => prev - 1); }
    }
    function canProceed(): boolean {
        switch (currentStep) {
            case 1: return selectedService !== null;
            case 2: return selectedDate !== null && selectedTime !== null;
            case 3: return formData.name.trim() !== '' && formData.phone.trim() !== '';
            default: return true;
        }
    }
    function handleSubmit() {
        setIsSubmitted(true);
    }
    function resetBooking() {
        setCurrentStep(1);
        setDirection(1);
        setSelectedService(null);
        setSelectedDate(null);
        setSelectedTime(null);
        setFormData({ name: '', phone: '', email: '', postcode: '', notes: '' });
        setIsSubmitted(false);
    }

    // Generate a booking reference
    const bookingRef = useMemo(() => {
        return `GPH-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    }, [isSubmitted]);

    return (
        <section className="py-20 md:py-32 bg-white relative z-10 overflow-hidden border-t border-black/5">
            {/* Background glow effects */}
            <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-[#2C3E6B]/20 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-48 w-[400px] h-[400px] bg-[#2C3E6B]/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                {/* ── Section Header ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column — Intro & Trust Signals */}
                    <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="space-y-8 lg:sticky lg:top-32"
                    >
                        <div>
                            <p className="text-xs tracking-[0.3em] text-[#2C3E6B] mb-4 uppercase font-altform font-bold">Book Online</p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F2040] leading-[1.05] uppercase font-oswald tracking-tight">
                                Schedule An<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F2040] via-[#2C3E6B] to-[#2C3E6B]">Engineer</span>
                            </h2>
                            <p className="text-slate-500 text-base md:text-lg mt-6 max-w-lg leading-relaxed">
                                Book directly into our engineers' live diaries. Choose your service, pick a time that works, and receive instant confirmation. No waiting around.
                            </p>
                        </div>

                        {/* Trust Signals */}
                        <div className="space-y-4">
                            {[
                                { icon: Shield, text: 'Gas Safe Registered — every engineer fully certified' },
                                { icon: Clock, text: 'Same-day availability for emergency callouts' },
                                { icon: CheckCircle, text: 'No payment required until job completion' },
                                { icon: MessageSquare, text: 'SMS confirmation & reminders sent automatically' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 1, x: 0 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-[#2C3E6B]/15 border border-[#2C3E6B]/20 flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-4 h-4 text-[#2C3E6B]" />
                                    </div>
                                    <span className="text-slate-600 text-sm">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick call CTA */}
                        <div className="pt-4 border-t border-black/8">
                            <p className="text-xs text-slate-400 uppercase tracking-widest mb-3 font-altform">Prefer to call?</p>
                            <a
                                href="tel:01942873026"
                                className="inline-flex items-center gap-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-[#2C3E6B]/30 rounded-xl px-5 py-3.5 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#2C3E6B] flex items-center justify-center">
                                    <Phone className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-[#0F2040] font-bold text-lg tracking-wide">01942 873 026</p>
                                    <p className="text-slate-400 text-xs">Mon-Sat, 8am - 6pm</p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#2C3E6B] transition-colors ml-2" />
                            </a>
                        </div>

                        {/* SMS Conversation Demo */}
                        <div className="hidden lg:block">
                            <p className="text-xs text-slate-400 uppercase tracking-widest mb-3 font-altform">Automated Reminders</p>
                            <div className="bg-[#0A1628] rounded-2xl p-5 border border-white/8 max-w-sm">
                                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-[#2C3E6B] flex items-center justify-center">
                                        <Wrench className="w-3.5 h-3.5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-bold">Gibson Plumbing</p>
                                        <p className="text-white/30 text-[10px]">Automated SMS</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-white/5 text-white/70 text-xs p-3 rounded-xl rounded-tl-sm max-w-[90%] border border-white/5">
                                        Hi! Your boiler service is confirmed for tomorrow at 11:30 AM. Your engineer is Ben. Reply C to confirm or R to reschedule.
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="bg-[#2C3E6B] text-white text-xs p-3 rounded-xl rounded-tr-sm">
                                            C
                                        </div>
                                    </div>
                                    <div className="bg-white/5 text-white/70 text-xs p-3 rounded-xl rounded-tl-sm max-w-[90%] border border-white/5">
                                        Confirmed! Ben will arrive between 11:15-11:45 AM. He'll call 30 mins before. — Gibson P&H
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    <p className="text-[10px] text-green-500/70 font-bold uppercase tracking-wider">Reduces no-shows by 35%</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column — Booking Interface */}
                    <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-[#0A1628] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl shadow-[#0A1628]/50">

                            {/* ── Top Bar ── */}
                            <div className="bg-white/[0.03] backdrop-blur-sm border-b border-white/5 px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {currentStep > 1 && !isSubmitted && (
                                        <button onClick={goBack} className="p-1.5 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-all">
                                            <ArrowLeft className="w-4 h-4" />
                                        </button>
                                    )}
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#2C3E6B]" />
                                        <span className="text-white font-bold text-sm font-altform uppercase tracking-wider">
                                            {isSubmitted ? 'Booking Confirmed' : 'Book an Engineer'}
                                        </span>
                                    </div>
                                </div>
                                <span className="text-[10px] text-white/20 font-mono">GIBSON P&H</span>
                            </div>

                            {/* ── Progress Steps ── */}
                            {!isSubmitted && (
                                <div className="px-6 py-5 border-b border-white/5">
                                    <div className="flex items-center justify-between">
                                        {STEPS.map((step, i) => (
                                            <div key={step.num} className="flex items-center flex-1 last:flex-initial">
                                                <div className="flex flex-col items-center gap-1.5">
                                                    <div className={`
                                                        w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300
                                                        ${currentStep >= step.num
                                                            ? 'bg-[#2C3E6B] text-white shadow-lg shadow-[#2C3E6B]/25'
                                                            : 'bg-white/5 border border-white/10 text-white/30'
                                                        }
                                                    `}>
                                                        {currentStep > step.num ? (
                                                            <CheckCircle className="w-4 h-4" />
                                                        ) : (
                                                            <step.icon className="w-3.5 h-3.5" />
                                                        )}
                                                    </div>
                                                    <span className={`text-[9px] uppercase tracking-widest font-bold transition-colors duration-300 ${currentStep >= step.num ? 'text-[#2C3E6B]' : 'text-white/20'
                                                        }`}>
                                                        {step.label}
                                                    </span>
                                                </div>
                                                {i < STEPS.length - 1 && (
                                                    <div className={`flex-1 h-[1px] mx-3 transition-colors duration-500 ${currentStep > step.num ? 'bg-[#2C3E6B]/50' : 'bg-white/5'
                                                        }`} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* ── Step Content ── */}
                            <div className="relative min-h-[480px]">
                                <AnimatePresence mode="wait" custom={direction}>

                                    {/* ════════════════════════════════════════════
                                        STEP 1 — Service Selection
                                        ════════════════════════════════════════════ */}
                                    {currentStep === 1 && !isSubmitted && (
                                        <motion.div
                                            key="step1"
                                            custom={direction}
                                            variants={stepVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                            className="p-6 space-y-5"
                                        >
                                            <div>
                                                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                                    <Wrench className="w-4 h-4 text-[#2C3E6B]" />
                                                    What do you need?
                                                </h3>
                                                <p className="text-white/40 text-xs mt-1">Select the service that best matches your requirements</p>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {SERVICES.map((service) => {
                                                    const Icon = service.icon;
                                                    const isSelected = selectedService === service.id;
                                                    return (
                                                        <button
                                                            key={service.id}
                                                            onClick={() => setSelectedService(service.id)}
                                                            className={`
                                                                relative text-left p-4 rounded-xl border transition-all duration-200 group
                                                                ${isSelected
                                                                    ? 'bg-[#2C3E6B]/15 border-[#2C3E6B]/40 shadow-lg shadow-[#2C3E6B]/10'
                                                                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10'
                                                                }
                                                            `}
                                                        >
                                                            {isSelected && (
                                                                <div className="absolute top-3 right-3">
                                                                    <CheckCircle className="w-4 h-4 text-[#2C3E6B]" />
                                                                </div>
                                                            )}
                                                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors ${isSelected ? 'bg-[#2C3E6B]/25' : 'bg-white/5 group-hover:bg-white/10'
                                                                }`}>
                                                                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#2C3E6B]' : 'text-white/50 group-hover:text-white/70'}`} />
                                                            </div>
                                                            <p className={`text-sm font-bold mb-0.5 transition-colors ${isSelected ? 'text-white' : 'text-white/80'}`}>
                                                                {service.name}
                                                            </p>
                                                            <p className="text-[11px] text-white/30 leading-relaxed">{service.description}</p>
                                                            <div className="flex items-center gap-3 mt-3 pt-2.5 border-t border-white/5">
                                                                <span className="text-[10px] text-white/25 flex items-center gap-1">
                                                                    <Clock className="w-3 h-3" /> {service.duration}
                                                                </span>
                                                                <span className={`text-[10px] font-bold ${isSelected ? 'text-[#2C3E6B]' : 'text-white/30'}`}>
                                                                    {service.price}
                                                                </span>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* ════════════════════════════════════════════
                                        STEP 2 — Date & Time
                                        ════════════════════════════════════════════ */}
                                    {currentStep === 2 && !isSubmitted && (
                                        <motion.div
                                            key="step2"
                                            custom={direction}
                                            variants={stepVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                            className="p-6 space-y-6"
                                        >
                                            {/* Selected service badge */}
                                            {selectedServiceData && (
                                                <div className="flex items-center gap-2 bg-[#2C3E6B]/10 border border-[#2C3E6B]/20 rounded-lg px-3 py-2">
                                                    <selectedServiceData.icon className="w-3.5 h-3.5 text-[#2C3E6B]" />
                                                    <span className="text-xs text-white/70 font-medium">{selectedServiceData.name}</span>
                                                    <span className="text-[10px] text-white/30 ml-auto">{selectedServiceData.duration}</span>
                                                </div>
                                            )}

                                            {/* Date selection */}
                                            <div className="space-y-3">
                                                <h3 className="text-white font-bold flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-[#2C3E6B]" />
                                                    <span className="text-sm">Choose a Date</span>
                                                </h3>
                                                <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
                                                    {dates.map((d, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={() => d.available ? setSelectedDate(i) : null}
                                                            disabled={!d.available}
                                                            className={`
                                                                flex-shrink-0 w-[60px] h-[76px] rounded-xl flex flex-col items-center justify-center border transition-all duration-200
                                                                ${!d.available
                                                                    ? 'opacity-25 cursor-not-allowed border-white/5 bg-transparent'
                                                                    : selectedDate === i
                                                                        ? 'bg-[#2C3E6B] border-[#2C3E6B] text-white shadow-lg shadow-[#2C3E6B]/25 scale-[1.02]'
                                                                        : 'bg-white/[0.02] border-white/[0.06] text-white/50 hover:bg-white/[0.05] hover:border-white/10'
                                                                }
                                                            `}
                                                        >
                                                            <span className="text-[10px] font-medium opacity-60 uppercase">{d.day}</span>
                                                            <span className="text-xl font-bold leading-tight">{d.dayNum}</span>
                                                            <span className="text-[9px] opacity-50">{d.month}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Time slots */}
                                            <div className="space-y-3">
                                                <h3 className="text-white font-bold flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-[#2C3E6B]" />
                                                    <span className="text-sm">Available Times</span>
                                                    {selectedDate === null && (
                                                        <span className="text-[10px] text-white/20 font-normal ml-2">Select a date first</span>
                                                    )}
                                                </h3>

                                                {selectedDate !== null ? (
                                                    <>
                                                        {/* Morning */}
                                                        <div>
                                                            <p className="text-[10px] text-white/25 uppercase tracking-wider mb-2 font-bold">Morning</p>
                                                            <div className="grid grid-cols-4 gap-2">
                                                                {TIME_SLOTS.filter(s => s.period === 'morning').map((slot, i) => {
                                                                    const originalIndex = TIME_SLOTS.findIndex(s => s.time === slot.time);
                                                                    const isUnavailable = unavailableSlots.has(originalIndex);
                                                                    const isActive = selectedTime === slot.time;
                                                                    return (
                                                                        <button
                                                                            key={slot.time}
                                                                            onClick={() => !isUnavailable && setSelectedTime(slot.time)}
                                                                            disabled={isUnavailable}
                                                                            className={`
                                                                                py-2.5 rounded-lg text-xs font-bold border transition-all duration-200
                                                                                ${isUnavailable
                                                                                    ? 'opacity-20 cursor-not-allowed border-white/5 line-through text-white/30'
                                                                                    : isActive
                                                                                        ? 'bg-[#2C3E6B] border-[#2C3E6B] text-white shadow-lg shadow-[#2C3E6B]/20'
                                                                                        : 'bg-white/[0.02] border-white/[0.06] text-white/50 hover:bg-white/[0.05] hover:border-white/10'
                                                                                }
                                                                            `}
                                                                        >
                                                                            {slot.time}
                                                                        </button>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                        {/* Afternoon & Evening */}
                                                        <div>
                                                            <p className="text-[10px] text-white/25 uppercase tracking-wider mb-2 font-bold">Afternoon</p>
                                                            <div className="grid grid-cols-4 gap-2">
                                                                {TIME_SLOTS.filter(s => s.period === 'afternoon' || s.period === 'evening').map((slot) => {
                                                                    const originalIndex = TIME_SLOTS.findIndex(s => s.time === slot.time);
                                                                    const isUnavailable = unavailableSlots.has(originalIndex);
                                                                    const isActive = selectedTime === slot.time;
                                                                    return (
                                                                        <button
                                                                            key={slot.time}
                                                                            onClick={() => !isUnavailable && setSelectedTime(slot.time)}
                                                                            disabled={isUnavailable}
                                                                            className={`
                                                                                py-2.5 rounded-lg text-xs font-bold border transition-all duration-200
                                                                                ${isUnavailable
                                                                                    ? 'opacity-20 cursor-not-allowed border-white/5 line-through text-white/30'
                                                                                    : isActive
                                                                                        ? 'bg-[#2C3E6B] border-[#2C3E6B] text-white shadow-lg shadow-[#2C3E6B]/20'
                                                                                        : 'bg-white/[0.02] border-white/[0.06] text-white/50 hover:bg-white/[0.05] hover:border-white/10'
                                                                                }
                                                                            `}
                                                                        >
                                                                            {slot.time}
                                                                        </button>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <div className="h-32 flex items-center justify-center border border-dashed border-white/5 rounded-xl">
                                                        <p className="text-white/15 text-sm">Select a date above to see available times</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Summary bar */}
                                            {selectedDate !== null && selectedTime !== null && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="bg-[#2C3E6B]/10 border border-[#2C3E6B]/20 rounded-lg p-3 flex items-start gap-3"
                                                >
                                                    <Info className="w-4 h-4 text-[#2C3E6B] flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs text-white/50 leading-relaxed">
                                                        <span className="text-white font-bold">{selectedDateData?.day} {selectedDateData?.dayNum} {selectedDateData?.month}</span> at{' '}
                                                        <span className="text-white font-bold">{selectedTime}</span> — {selectedServiceData?.name}. No payment required at booking.
                                                    </p>
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    )}

                                    {/* ════════════════════════════════════════════
                                        STEP 3 — Customer Details
                                        ════════════════════════════════════════════ */}
                                    {currentStep === 3 && !isSubmitted && (
                                        <motion.div
                                            key="step3"
                                            custom={direction}
                                            variants={stepVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                            className="p-6 space-y-5"
                                        >
                                            <div>
                                                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                                    <User className="w-4 h-4 text-[#2C3E6B]" />
                                                    Your Details
                                                </h3>
                                                <p className="text-white/40 text-xs mt-1">We'll use these to confirm your appointment</p>
                                            </div>

                                            {/* Booking summary badge */}
                                            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex items-center gap-4">
                                                <div className="w-11 h-11 rounded-xl bg-[#2C3E6B]/15 flex items-center justify-center flex-shrink-0">
                                                    {selectedServiceData && <selectedServiceData.icon className="w-5 h-5 text-[#2C3E6B]" />}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-white text-sm font-bold truncate">{selectedServiceData?.name}</p>
                                                    <p className="text-white/30 text-xs">
                                                        {selectedDateData?.day} {selectedDateData?.dayNum} {selectedDateData?.month} at {selectedTime}
                                                    </p>
                                                </div>
                                                <button onClick={() => { setDirection(-1); setCurrentStep(1); }} className="text-[10px] text-[#2C3E6B] font-bold uppercase tracking-wider hover:text-white transition-colors">
                                                    Edit
                                                </button>
                                            </div>

                                            {/* Form Fields */}
                                            <div className="space-y-4">
                                                {/* Name */}
                                                <div className="space-y-1.5">
                                                    <label className="text-xs text-white/40 font-medium flex items-center gap-1.5">
                                                        <User className="w-3 h-3" /> Full Name <span className="text-[#2C3E6B]">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={formData.name}
                                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                        placeholder="e.g. John Smith"
                                                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-[#2C3E6B]/50 focus:ring-1 focus:ring-[#2C3E6B]/20 transition-all"
                                                    />
                                                </div>
                                                {/* Phone */}
                                                <div className="space-y-1.5">
                                                    <label className="text-xs text-white/40 font-medium flex items-center gap-1.5">
                                                        <Phone className="w-3 h-3" /> Phone Number <span className="text-[#2C3E6B]">*</span>
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                        placeholder="e.g. 07700 900 000"
                                                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-[#2C3E6B]/50 focus:ring-1 focus:ring-[#2C3E6B]/20 transition-all"
                                                    />
                                                </div>
                                                {/* Email */}
                                                <div className="space-y-1.5">
                                                    <label className="text-xs text-white/40 font-medium flex items-center gap-1.5">
                                                        <Mail className="w-3 h-3" /> Email Address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                        placeholder="e.g. john@email.com"
                                                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-[#2C3E6B]/50 focus:ring-1 focus:ring-[#2C3E6B]/20 transition-all"
                                                    />
                                                </div>
                                                {/* Postcode */}
                                                <div className="space-y-1.5">
                                                    <label className="text-xs text-white/40 font-medium flex items-center gap-1.5">
                                                        <MapPin className="w-3 h-3" /> Postcode
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={formData.postcode}
                                                        onChange={e => setFormData({ ...formData, postcode: e.target.value })}
                                                        placeholder="e.g. WN6 0HR"
                                                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-[#2C3E6B]/50 focus:ring-1 focus:ring-[#2C3E6B]/20 transition-all"
                                                    />
                                                </div>
                                                {/* Notes */}
                                                <div className="space-y-1.5">
                                                    <label className="text-xs text-white/40 font-medium flex items-center gap-1.5">
                                                        <MessageSquare className="w-3 h-3" /> Additional Notes
                                                    </label>
                                                    <textarea
                                                        value={formData.notes}
                                                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                                        placeholder="Describe your issue or any access instructions..."
                                                        rows={3}
                                                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-[#2C3E6B]/50 focus:ring-1 focus:ring-[#2C3E6B]/20 transition-all resize-none"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* ════════════════════════════════════════════
                                        STEP 4 — Review & Confirm
                                        ════════════════════════════════════════════ */}
                                    {currentStep === 4 && !isSubmitted && (
                                        <motion.div
                                            key="step4"
                                            custom={direction}
                                            variants={stepVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                            className="p-6 space-y-5"
                                        >
                                            <div>
                                                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#2C3E6B]" />
                                                    Review Your Booking
                                                </h3>
                                                <p className="text-white/40 text-xs mt-1">Check everything looks correct before confirming</p>
                                            </div>

                                            {/* Booking card */}
                                            <div className="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden">
                                                {/* Service banner */}
                                                <div className="bg-gradient-to-r from-[#2C3E6B] to-[#1e2b4d] px-5 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                                            {selectedServiceData && <selectedServiceData.icon className="w-5 h-5 text-white" />}
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] text-white/60 uppercase tracking-wider font-bold">Service</p>
                                                            <p className="text-white font-bold">{selectedServiceData?.name}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Details grid */}
                                                <div className="p-5 space-y-4">
                                                    <div className="flex items-start gap-3 pb-3 border-b border-white/5">
                                                        <div className="w-9 h-9 rounded-lg bg-[#2C3E6B]/10 flex items-center justify-center flex-shrink-0">
                                                            <Calendar className="w-4 h-4 text-[#2C3E6B]" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] text-white/30 uppercase tracking-wider font-bold">Date & Time</p>
                                                            <p className="text-white font-bold text-sm">{selectedDateData?.day} {selectedDateData?.dayNum} {selectedDateData?.month}</p>
                                                            <p className="text-[#2C3E6B] text-sm font-bold">{selectedTime}</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-3 pb-3 border-b border-white/5">
                                                        <div className="w-9 h-9 rounded-lg bg-[#2C3E6B]/10 flex items-center justify-center flex-shrink-0">
                                                            <User className="w-4 h-4 text-[#2C3E6B]" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] text-white/30 uppercase tracking-wider font-bold">Customer</p>
                                                            <p className="text-white font-bold text-sm">{formData.name}</p>
                                                            <p className="text-white/40 text-xs">{formData.phone}</p>
                                                            {formData.email && <p className="text-white/40 text-xs">{formData.email}</p>}
                                                        </div>
                                                    </div>

                                                    {(formData.postcode || formData.notes) && (
                                                        <div className="flex items-start gap-3">
                                                            <div className="w-9 h-9 rounded-lg bg-[#2C3E6B]/10 flex items-center justify-center flex-shrink-0">
                                                                <MapPin className="w-4 h-4 text-[#2C3E6B]" />
                                                            </div>
                                                            <div>
                                                                {formData.postcode && (
                                                                    <>
                                                                        <p className="text-[10px] text-white/30 uppercase tracking-wider font-bold">Location</p>
                                                                        <p className="text-white font-bold text-sm">{formData.postcode}</p>
                                                                    </>
                                                                )}
                                                                {formData.notes && (
                                                                    <p className="text-white/40 text-xs mt-1 italic">"{formData.notes}"</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Pricing note */}
                                            <div className="bg-[#2C3E6B]/10 border border-[#2C3E6B]/20 rounded-lg p-3 flex items-start gap-3">
                                                <Info className="w-4 h-4 text-[#2C3E6B] flex-shrink-0 mt-0.5" />
                                                <div className="text-xs text-white/50 leading-relaxed">
                                                    <span className="text-white font-bold">No payment required.</span> Your engineer will provide a quote on site. You only pay once the work is completed to your satisfaction.
                                                </div>
                                            </div>

                                            {/* What happens next */}
                                            <div className="space-y-2">
                                                <p className="text-[10px] text-white/25 uppercase tracking-wider font-bold">After booking</p>
                                                {[
                                                    'SMS confirmation sent within 2 minutes',
                                                    'Engineer contacts you 24 hours before',
                                                    'Reminder text the morning of your appointment',
                                                ].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-2">
                                                        <CheckCircle className="w-3 h-3 text-green-500/60" />
                                                        <span className="text-xs text-white/40">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* ════════════════════════════════════════════
                                        CONFIRMED STATE
                                        ════════════════════════════════════════════ */}
                                    {isSubmitted && (
                                        <motion.div
                                            key="confirmed"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className="p-6 flex flex-col items-center text-center space-y-6"
                                        >
                                            {/* Success icon */}
                                            <div className="relative mt-4">
                                                <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                                                <div className="relative w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30">
                                                    <CheckCircle className="w-10 h-10 text-white" />
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-white font-bold text-2xl mb-1">Booking Confirmed</h3>
                                                <p className="text-white/40 text-sm">Your appointment has been successfully scheduled</p>
                                            </div>

                                            {/* Reference */}
                                            <div className="bg-white/[0.03] border border-white/5 rounded-xl px-6 py-4 w-full">
                                                <p className="text-[10px] text-white/25 uppercase tracking-wider font-bold mb-1">Booking Reference</p>
                                                <p className="text-white font-mono font-bold text-lg tracking-wider">#{bookingRef}</p>
                                            </div>

                                            {/* Summary card */}
                                            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 w-full text-left space-y-3">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-white/30 text-xs">Service</span>
                                                    <span className="text-white text-xs font-bold">{selectedServiceData?.name}</span>
                                                </div>
                                                <div className="h-[1px] bg-white/5" />
                                                <div className="flex justify-between items-center">
                                                    <span className="text-white/30 text-xs">Date</span>
                                                    <span className="text-white text-xs font-bold">{selectedDateData?.day} {selectedDateData?.dayNum} {selectedDateData?.month}</span>
                                                </div>
                                                <div className="h-[1px] bg-white/5" />
                                                <div className="flex justify-between items-center">
                                                    <span className="text-white/30 text-xs">Time</span>
                                                    <span className="text-[#2C3E6B] text-xs font-bold">{selectedTime}</span>
                                                </div>
                                                <div className="h-[1px] bg-white/5" />
                                                <div className="flex justify-between items-center">
                                                    <span className="text-white/30 text-xs">Customer</span>
                                                    <span className="text-white text-xs font-bold">{formData.name}</span>
                                                </div>
                                            </div>

                                            {/* SMS notice */}
                                            <div className="bg-[#2C3E6B]/10 border border-[#2C3E6B]/20 rounded-lg p-3 flex items-start gap-3 w-full">
                                                <MessageSquare className="w-4 h-4 text-[#2C3E6B] flex-shrink-0 mt-0.5" />
                                                <p className="text-xs text-white/50 leading-relaxed text-left">
                                                    <span className="text-white font-bold">SMS confirmation sent</span> to {formData.phone}. You'll also receive a reminder 24 hours before your appointment.
                                                </p>
                                            </div>

                                            {/* Actions */}
                                            <div className="w-full space-y-3 pt-2">
                                                <a
                                                    href="tel:01942873026"
                                                    className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-bold py-3 rounded-xl text-sm hover:bg-white/10 transition-all"
                                                >
                                                    <Phone className="w-4 h-4" /> Call Us: 01942 873 026
                                                </a>
                                                <button
                                                    onClick={resetBooking}
                                                    className="w-full bg-[#2C3E6B] hover:bg-[#3d5285] text-white font-bold py-3.5 rounded-xl text-sm shadow-lg shadow-[#2C3E6B]/20 transition-all"
                                                >
                                                    Book Another Appointment
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* ── Bottom Action Bar ── */}
                            {!isSubmitted && (
                                <div className="px-6 py-5 border-t border-white/5 bg-white/[0.01]">
                                    {currentStep < 4 ? (
                                        <button
                                            onClick={goNext}
                                            disabled={!canProceed()}
                                            className={`
                                                w-full font-bold py-3.5 rounded-xl uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2
                                                ${canProceed()
                                                    ? 'bg-[#2C3E6B] hover:bg-[#3d5285] text-white shadow-lg shadow-[#2C3E6B]/20 cursor-pointer'
                                                    : 'bg-white/5 text-white/20 cursor-not-allowed'
                                                }
                                            `}
                                        >
                                            Continue <ArrowRight className="w-4 h-4" />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleSubmit}
                                            className="w-full bg-[#2C3E6B] hover:bg-[#3d5285] text-white font-bold py-3.5 rounded-xl uppercase tracking-wider text-sm shadow-lg shadow-[#2C3E6B]/20 transition-all flex items-center justify-center gap-2"
                                        >
                                            Confirm Booking <CheckCircle className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            )}

                            {/* Powered by */}
                            <div className="text-center py-3 border-t border-white/[0.03]">
                                <span className="text-[9px] text-white/15 font-medium uppercase tracking-widest">Powered by Sovereign Systems</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
