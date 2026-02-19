'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<{ from: 'bot' | 'user'; text: string }[]>([
        { from: 'bot', text: "Hi! I'm Gibson's assistant. How can I help you today?" }
    ])
    const [input, setInput] = useState('')
    const [showOptions, setShowOptions] = useState(true)

    const faqs = [
        { q: "Emergency Callout?", a: "For emergencies, please call 01942 873 026 immediately. We are available 24/7 for urgent leaks and boiler breakdowns." },
        { q: "Book Boiler Service", a: "We offer comprehensive boiler servicing to keep your home safe and warm. Our standard service includes a full safety check." },
        { q: "Pricing / Callout Fee", a: "We believe in transparency. Our standard callout fee is competitive, and we provide free estimates for larger installations." },
        { q: "Bathroom Renovation", a: "We specialize in luxury bathroom transformations! From design to installation, we handle everything." }
    ]

    const handleQuickReply = (faq: { q: string; a: string }) => {
        setShowOptions(false)
        setMessages(prev => [...prev, { from: 'user', text: faq.q }])

        setTimeout(() => {
            setMessages(prev => [...prev,
            { from: 'bot', text: faq.a },
            { from: 'bot', text: "Thanks! Please leave your Name and Phone Number below, and I'll have an engineer call you back shortly." }
            ])
        }, 600)
    }

    const handleSend = () => {
        if (!input.trim()) return
        setShowOptions(false)
        setMessages(prev => [...prev, { from: 'user', text: input }])
        setInput('')

        setTimeout(() => {
            setMessages(prev => [...prev, {
                from: 'bot',
                text: "Thank you. I've logged your enquiry. Please verify your phone number below if you haven't already, and we'll be in touch!"
            }])
        }, 1000)
    }

    return (
        <>
            {/* Chat bubble button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[#2C3E6B] rounded-full shadow-lg flex items-center justify-center hover:bg-[#3a5090] transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.svg
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </motion.svg>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="w-6 h-6"
                        >
                            <Image
                                src="/SOLO gemini-logo-2.png"
                                alt="Gibson logo"
                                width={24}
                                height={24}
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notification dot */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0A0A0A]" />
                )}
            </motion.button>

            {/* Preview bubble when closed */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: 1, duration: 0.3 }}
                        className="fixed bottom-24 right-6 z-40 bg-[#111111] border border-white/10 rounded-xl px-4 py-3 shadow-xl max-w-[200px]"
                    >
                        <p className="text-white text-sm">Need a plumber? Chat with us!</p>
                        <div className="absolute right-6 -bottom-2 w-3 h-3 bg-[#111111] border-r border-b border-white/10 rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Chat window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-[9999] w-[360px] max-w-[calc(100vw-3rem)] bg-[#0A0A0A] rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#2C3E6B] px-5 py-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-semibold">Gibson Plumbing</h3>
                                <p className="text-white/60 text-xs flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                                    Online now
                                </p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="h-80 overflow-y-auto p-4 space-y-3">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${msg.from === 'user'
                                        ? 'bg-white/10 text-white rounded-br-sm'
                                        : 'bg-[#2C3E6B] text-white rounded-bl-sm'
                                        }`}>
                                        <p className="text-sm leading-relaxed">{msg.text}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Quick replies */}
                            {showOptions && (
                                <div className="flex flex-wrap gap-2 mt-4 animate-fade-in">
                                    {faqs.map((faq, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleQuickReply(faq)}
                                            className="text-xs bg-[#2C3E6B]/10 border border-[#2C3E6B]/30 text-white/90 px-3 py-2 rounded-lg hover:bg-[#2C3E6B] hover:text-white transition-all duration-300 text-left"
                                        >
                                            {faq.q}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#2C3E6B]"
                                />
                                <button
                                    onClick={handleSend}
                                    className="w-10 h-10 bg-[#2C3E6B] rounded-full flex items-center justify-center hover:bg-[#3a5090] transition-colors"
                                >
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-center text-white/20 text-[10px] mt-3 tracking-wide">
                                Powered by Sovereign Systems
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
