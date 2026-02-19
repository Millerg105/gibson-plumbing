'use client';
import { Smartphone, Star, MessageSquare } from 'lucide-react';

export default function TechReports() {
    return (
        <section className="py-24 bg-[#0A0A0A] relative border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-sm font-bold tracking-widest text-[#2C3E6B] mb-3 uppercase">Tech Suite</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight uppercase font-oswald">
                        Innovation In <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Action</span>
                    </h3>
                    <p className="text-gray-400 mt-4 leading-relaxed">
                        Equipping our team with the latest technology to ensure faster response times, transparent service, and automated quality control.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* Mobile Command Card */}
                    <div className="glass-card p-1 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-[#2C3E6B]/30 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E6B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="bg-[#101822] rounded-[22px] p-8 h-full relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Mobile Command</h4>
                                    <p className="text-xs text-gray-400">Your Business, In Pocket</p>
                                </div>
                                <div className="bg-[#2C3E6B]/20 p-2 rounded-lg text-[#2C3E6B]">
                                    <Smartphone className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Mock Phone UI */}
                            <div className="relative mx-auto bg-gray-900 border border-gray-700 rounded-xl p-3 shadow-2xl max-w-[220px] transform group-hover:scale-105 transition-transform duration-500">
                                <div className="flex justify-between items-center mb-4 px-1 opacity-70 border-b border-gray-800 pb-2">
                                    <span className="text-[10px] font-medium text-white">9:41</span>
                                    <div className="flex gap-1">
                                        <div className="w-3 h-2 bg-white/80 rounded-sm"></div>
                                        <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="bg-[#2C3E6B] rounded-lg p-3 mb-3 shadow-lg shadow-[#2C3E6B]/20">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="bg-white/20 px-1.5 py-0.5 rounded text-[8px] font-bold text-white uppercase">New Job</span>
                                        <span className="text-[9px] text-white/80">2m ago</span>
                                    </div>
                                    <h5 className="text-[10px] font-bold text-white">Heater Repair</h5>
                                    <p className="text-[9px] text-white/80 mt-1">123 Main St, Wigan</p>
                                </div>

                                <div className="space-y-2">
                                    <div className="bg-gray-800 rounded-lg p-2 flex items-center gap-2">
                                        <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center text-[8px] text-gray-300">10am</div>
                                        <div><div className="text-[9px] text-white font-bold">Leak Detect</div></div>
                                    </div>
                                    <div className="bg-gray-800 rounded-lg p-2 flex items-center gap-2">
                                        <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center text-[8px] text-gray-300">1pm</div>
                                        <div><div className="text-[9px] text-white font-bold">Install</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Automated Reputation Card */}
                    <div className="glass-card p-1 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-[#2C3E6B]/30 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-bl from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="bg-[#101822] rounded-[22px] p-8 h-full relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Auto Reputation</h4>
                                    <p className="text-xs text-gray-400">One-Click Reviews</p>
                                </div>
                                <div className="bg-green-500/10 p-2 rounded-lg text-green-500">
                                    <Star className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Mock SMS UI */}
                            <div className="relative bg-gray-900 border border-gray-700 rounded-xl p-4 shadow-xl max-w-full mx-auto transform group-hover:translate-y-[-5px] transition-transform duration-500">
                                <div className="flex items-center gap-3 border-b border-gray-800 pb-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300"><MessageSquare className="w-4 h-4" /></div>
                                    <div>
                                        <div className="text-xs font-bold text-white">Dave (Customer)</div>
                                        <div className="text-[9px] text-gray-500">Mobile • +44 7700 900</div>
                                    </div>
                                </div>

                                <div className="flex justify-end mb-2">
                                    <div className="bg-[#2C3E6B] text-white rounded-2xl rounded-tr-sm py-2 px-3 max-w-[90%] text-[10px] leading-relaxed relative">
                                        <p>Hi Dave, thanks for choosing Gibson! Could you leave us a review?</p>
                                        <div className="mt-2 bg-black/20 rounded p-1.5 flex items-center gap-2 cursor-pointer">
                                            <div className="w-5 h-5 bg-white rounded flex items-center justify-center text-[10px] text-[#4285F4] font-bold">G</div>
                                            <div>
                                                <div className="text-[9px] font-bold">Review on Google</div>
                                                <div className="text-yellow-400 text-[8px] flex">★★★★★</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end"><span className="text-[8px] text-gray-500">Delivered</span></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="mt-12 text-center pb-8">
                <span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest opacity-60">Powered by Sovereign Systems</span>
            </div>
        </section>
    );
}
