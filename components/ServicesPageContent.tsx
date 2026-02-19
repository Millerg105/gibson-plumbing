'use client';

import { useState, type FormEvent } from 'react';
import { Check, PhoneCall } from 'lucide-react';

const serviceColumns = [
    [
        'Plumbing and Heating',
        'Service and Repair',
        'Leaks',
        'Burst Pipe',
        'Central Heating',
        'Boiler Repair',
    ],
    [
        'Tanks and Cylinders',
        'Heating Controls',
        'Industrial Systems',
        'Landlord Certificates',
        'Maintenance Contracts',
        'Domestic and Commercial',
    ],
];

export default function ServicesPageContent() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name.trim() || !phone.trim()) return;
        setSubmitted(true);
    };

    return (
        <>
            <section className="relative min-h-[44vh] w-full overflow-hidden border-b border-white/10">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/HERO/505411076_1564832594859847_8539765231592124547_n.jpg")' }}
                />
                <div className="absolute inset-0 bg-black/70" />

                <div className="relative mx-auto flex min-h-[44vh] w-full max-w-[1280px] flex-col justify-center px-4 pt-24 md:px-8">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#9fb4e6] font-altform">Our Services</p>
                    <h1 className="text-4xl font-bold uppercase leading-none text-white md:text-6xl font-oswald">Our Services</h1>
                    <p className="mt-6 text-sm text-white/60 md:text-base">Home <span className="mx-2 text-white/30">|</span> <span className="text-white">Our Services</span></p>
                </div>
            </section>

            <section className="bg-[#0A0A0A] py-16 md:py-20">
                <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-4 md:grid-cols-[1.2fr_0.8fr] md:px-8">
                    <div>
                        <h2 className="text-3xl font-bold uppercase text-white font-oswald md:text-4xl">Need a plumber in Wigan, North West?</h2>
                        <p className="mt-6 max-w-[760px] text-white/75 leading-relaxed">
                            We cover most of the North West including Wigan, Bolton, Chorley, Lancashire, Cheshire and Greater Manchester. Whether you are local in Wigan or farther afield in Warrington, Liverpool, Preston or Blackburn, our team is ready to help.
                        </p>
                        <p className="mt-4 text-white/85 font-semibold">Call <a href="tel:01942873026" className="text-[#9fb4e6] hover:text-white transition-colors">01942 873 026</a> for a no-obligation quote.</p>

                        <h3 className="mt-10 text-2xl font-bold text-white font-oswald md:text-3xl">Energy Efficiency &amp; Servicing</h3>
                        <p className="mt-4 max-w-[760px] text-white/75 leading-relaxed">
                            We work with many boiler brands, both old and new. You could save hundreds by upgrading to a more energy-efficient system, and keep your boiler running at its best with regular servicing and flushing.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
                            {serviceColumns.map((column, columnIndex) => (
                                <div key={columnIndex} className="space-y-3">
                                    {column.map((service) => (
                                        <div key={service} className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5">
                                            <Check className="h-4 w-4 shrink-0 text-[#b7c8ee]" />
                                            <span className="text-white/85">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="rounded-2xl border border-white/10 bg-[#11161f] p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9fb4e6]">Request Callback</p>
                            <h4 className="mt-3 text-2xl font-bold text-white font-oswald">Need help quickly?</h4>
                            <p className="mt-2 text-sm text-white/65">Leave your details and we will call you back to discuss your job.</p>

                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your name"
                                        className="h-11 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/35 focus:border-[#2C3E6B] focus:outline-none"
                                    />
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Phone number"
                                        className="h-11 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/35 focus:border-[#2C3E6B] focus:outline-none"
                                    />
                                    <button
                                        type="submit"
                                        className="h-11 w-full rounded-lg bg-[#2C3E6B] text-sm font-bold text-white transition-colors hover:bg-[#3d5285]"
                                    >
                                        Request call back
                                    </button>
                                </form>
                            ) : (
                                <p className="mt-5 rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-3 py-3 text-sm text-emerald-200">
                                    Thanks, we have your details. A member of the team will call you shortly.
                                </p>
                            )}
                        </div>

                        <a
                            href="tel:01942873026"
                            className="flex items-center justify-between rounded-2xl border border-[#2C3E6B]/35 bg-[#2C3E6B]/15 p-5 transition-colors hover:bg-[#2C3E6B]/25"
                        >
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b7c8ee]">Call now</p>
                                <p className="mt-1 text-2xl font-bold text-white">01942 873 026</p>
                            </div>
                            <PhoneCall className="h-6 w-6 text-white" />
                        </a>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">Trusted Standards</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {['Gas Safe Registered', 'City & Guilds Qualified', 'Worcester Ready', 'Baxi Experience'].map((badge) => (
                                    <span key={badge} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
