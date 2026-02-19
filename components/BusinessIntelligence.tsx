'use client';
import { ArrowUp, MoreHorizontal, CheckCircle2, AlertCircle, TrendingUp, Users, MessageSquare, PhoneCall, CreditCard, Bell } from 'lucide-react';

export default function BusinessIntelligence() {
    return (
        <section className="py-24 bg-[#0A0A0A] relative border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side Text */}
                    <div className="space-y-6 order-2 lg:order-1">
                        <h2 className="text-sm font-bold tracking-widest text-[#2C3E6B] mb-3 uppercase">Sovereign Systems</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight uppercase font-oswald">
                            Business <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Intelligence</span>
                        </h3>
                        <p className="text-gray-400 text-lg max-w-md">
                            We don't just fix pipes; we build systems. Our proprietary software tracks every lead, job, and review to ensure maximum efficiency.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-[#2C3E6B]/20 rounded-lg text-[#2C3E6B]"><TrendingUp className="w-5 h-5" /></div>
                                <div>
                                    <h4 className="text-white font-bold">Revenue Tracking</h4>
                                    <p className="text-sm text-gray-400">Real-time financial performance.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-[#2C3E6B]/20 rounded-lg text-[#2C3E6B]"><Users className="w-5 h-5" /></div>
                                <div>
                                    <h4 className="text-white font-bold">Lead Restoration</h4>
                                    <p className="text-sm text-gray-400">Automated follow-ups on lost leads.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Visuals (Dashboard Mockup) */}
                    <div className="relative order-1 lg:order-2">
                        <div className="max-w-md mx-auto space-y-6 relative z-10">

                            {/* Card 1: Automated Follow-Up */}
                            <div className="bg-[#101a22] rounded-xl p-5 border border-white/10 relative overflow-hidden shadow-2xl">
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-2">
                                        <span className="p-1.5 bg-[#2C3E6B]/10 rounded-lg text-[#2C3E6B]"><TrendingUp className="w-4 h-4" /></span>
                                        <h4 className="font-semibold text-white">Automated Follow-Up</h4>
                                    </div>
                                    <span className="text-[10px] font-medium bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full border border-green-500/20">Active</span>
                                </div>

                                {/* Mock Timeline */}
                                <div className="relative py-2 flex justify-between items-center text-center">
                                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 -translate-y-1/2 -z-10 mx-4"></div>

                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-6 h-6 rounded-full bg-[#2C3E6B] flex items-center justify-center text-[10px] text-white"><CheckCircle2 className="w-3 h-3" /></div>
                                        <span className="text-[9px] text-gray-500 uppercase">Enquiry</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-6 h-6 rounded-full bg-[#2C3E6B] flex items-center justify-center text-[10px] text-white"><MessageSquare className="w-3 h-3" /></div>
                                        <span className="text-[9px] text-gray-500 uppercase">SMS</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-6 h-6 rounded-full bg-[#2C3E6B] flex items-center justify-center text-[10px] text-white"><PhoneCall className="w-3 h-3" /></div>
                                        <span className="text-[9px] text-gray-500 uppercase">Call</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-6 h-6 rounded-full bg-white border-2 border-[#2C3E6B] flex items-center justify-center text-[10px] text-[#2C3E6B] shadow-[0_0_10px_#2C3E6B]"><CreditCard className="w-3 h-3" /></div>
                                        <span className="text-[9px] text-white font-bold uppercase">Quote</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 opacity-50">
                                        <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-[10px] text-gray-500"><Bell className="w-3 h-3" /></div>
                                        <span className="text-[9px] text-gray-500 uppercase">Remind</span>
                                    </div>
                                </div>

                                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between">
                                    <span className="text-[10px] text-gray-500">Last updated: 2m ago</span>
                                    <span className="text-[10px] text-gray-600 font-bold uppercase tracking-wider">Powered by Sovereign</span>
                                </div>
                            </div>

                            {/* Card 2: Revenue Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#101a22] p-4 rounded-xl border border-white/10">
                                    <div className="text-gray-400 text-xs font-medium mb-1">Leads Generated</div>
                                    <div className="text-2xl font-bold text-white">47</div>
                                    <div className="text-[10px] text-green-500 flex items-center mt-1 gap-1">
                                        <ArrowUp className="w-3 h-3" /> 12% vs last wk
                                    </div>
                                </div>
                                <div className="bg-[#101a22] p-4 rounded-xl border border-white/10">
                                    <div className="text-gray-400 text-xs font-medium mb-1">Jobs Booked</div>
                                    <div className="text-2xl font-bold text-white">31</div>
                                    <div className="text-[10px] text-green-500 flex items-center mt-1 gap-1">
                                        <ArrowUp className="w-3 h-3" /> 8% vs last wk
                                    </div>
                                </div>

                                <div className="col-span-2 bg-[#2C3E6B]/10 p-4 rounded-xl border border-[#2C3E6B]/30 relative overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="text-[#2C3E6B] text-xs font-bold uppercase tracking-wider mb-1">Revenue Recovered</div>
                                        <div className="text-3xl font-bold text-[#2C3E6B]">£4,200</div>
                                        <div className="text-[10px] text-gray-400 mt-1">From automated follow-ups this month</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#2C3E6B]/20 rounded-full blur-[120px] -z-10"></div>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest opacity-60">Powered by Sovereign Systems</span>
                </div>
            </div>
        </section>
    );
}
