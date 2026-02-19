import { Award, Wrench, ShieldCheck, Bath, ArrowRight, Phone, Flame } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Logos3 } from '@/components/ui/logos3';

export default function About() {
    const services = [
        {
            title: 'Emergency Repairs',
            description: '24/7 rapid response for leaks, bursts, and breakdowns.',
            icon: Wrench,
            className: 'md:col-span-1 md:row-span-1 bg-zinc-900/50'
        },
        {
            title: 'Luxury Bathrooms',
            description: 'Complete design and installation of premium suites.',
            icon: Bath,
            className: 'md:col-span-2 md:row-span-1 bg-[#2C3E6B]'
        },
        {
            title: 'Boiler Systems',
            description: 'High-efficiency installs and servicing.',
            icon: ShieldCheck,
            className: 'md:col-span-1 md:row-span-1 bg-zinc-900/50'
        },
        {
            title: 'Commercial',
            description: 'Large scale mechanical and heating contracts.',
            icon: Award,
            className: 'md:col-span-1 md:row-span-1 bg-zinc-900/50'
        },
        {
            title: 'Power Flushing',
            description: 'Restore full heating performance and extend your system life.',
            icon: Flame,
            className: 'md:col-span-1 md:row-span-1 bg-[#2C3E6B]'
        },
    ];

    return (
        <section className="py-24 bg-white border-t border-black/5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="max-w-[1400px] mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1.04fr_0.96fr] gap-14 lg:gap-10 items-start mb-20">

                    {/* LEFT COLUMN — photo stack */}
                    <div className="relative lg:pr-8 flex flex-col gap-4">
                        <div className="absolute -inset-2 bg-gradient-to-br from-[#2C3E6B]/30 via-[#2C3E6B]/5 to-transparent rounded-[2rem] blur-2xl opacity-60 pointer-events-none" />

                        <div className="relative mb-1">
                            <p className="text-xs tracking-[0.24em] text-[#2C3E6B] uppercase font-altform font-bold mb-2">Project Snapshots</p>
                            <h3 className="text-2xl md:text-3xl font-oswald uppercase tracking-tight text-[#0F2040]">From Recent Bathroom Installs</h3>
                        </div>

                        {/* Hero photo — full width */}
                        <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-zinc-900 aspect-[16/10] w-full">
                            <Image
                                src="/about us 3/487298241_1500030844673356_3364429620033682151_n.jpg"
                                alt="Gibson bathroom installation"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
                            <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 bg-[#2C3E6B]/90 backdrop-blur-md px-5 py-4 md:px-6 md:py-5 rounded-xl border border-[#5f78b8]/35 w-fit max-w-[85%] shadow-xl shadow-black/35">
                                <h3 className="text-xl md:text-2xl font-bold font-altform text-white uppercase mb-1">Over 20 Years</h3>
                                <p className="text-white/85 text-xs md:text-sm">Of delivering excellence in Wigan.</p>
                            </div>
                        </div>

                        {/* Two equal photos side-by-side */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-zinc-900 aspect-[4/3]">
                                <Image
                                    src="/about us 3/574282056_1689013079108464_6843722183469312655_n.jpg"
                                    alt="Gibson plumbing installation"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>
                            <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-zinc-900 aspect-[4/3]">
                                <Image
                                    src="/about us 3/612597497_1747213623288409_2050588822871596554_n.jpg"
                                    alt="Contemporary ensuite with mirror lighting"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* 4th photo — full width, same size as hero */}
                        <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-zinc-900 aspect-[16/10] w-full">
                            <Image
                                src="/project-images/489929278_1512043933472047_4732552171357439409_n.jpg"
                                alt="Gibson heating and pipework installation"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>

                        {/* Caption — below the 4th photo */}
                        <p className="relative text-slate-500 text-sm leading-relaxed max-w-[62ch]">
                            Every install is finished to the same standard: clean lines, practical layout, and long-term reliability for everyday use.
                        </p>
                    </div>

                    {/* RIGHT COLUMN — text + carousel + service cards */}
                    <div className="space-y-6 lg:pt-4 lg:border-l lg:border-black/8 lg:pl-10">
                        <div>
                            <p className="text-xs tracking-[0.25em] text-[#2C3E6B] mb-6 uppercase font-altform font-bold">About Our Firm</p>
                            <h2 className="text-4xl md:text-6xl font-bold text-[#0F2040] leading-[1.1] mb-8 font-oswald uppercase tracking-tight">
                                Precision Engineering <br />
                                <span className="text-[#0F2040]/30">& Expert Design.</span>
                            </h2>
                            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                                If you are looking for a reliable plumber or gas engineer based in the North West then you are in the right place. NVQ qualified and Gas Safe Registered engineers and WIAPS approved benefiting from Commercial and Domestic Plumbing and Heating experience we are available to help you plan, install or maintain all aspects of plumbing and mechanical works.
                            </p>
                        </div>

                        <Logos3
                            heading="NVQ & Gas Safe Screenshots"
                            logos={[
                                {
                                    id: 'shot-1',
                                    description: 'Accreditation screenshot 1',
                                    image: '/Screenshot 2026-02-19 141344.png',
                                    className: 'h-16 w-auto',
                                },
                                {
                                    id: 'shot-2',
                                    description: 'Accreditation screenshot 2',
                                    image: '/Screenshot 2026-02-19 141357.png',
                                    className: 'h-16 w-auto',
                                },
                                {
                                    id: 'shot-3',
                                    description: 'Accreditation screenshot 3',
                                    image: '/Screenshot 2026-02-19 141401.png',
                                    className: 'h-16 w-auto',
                                },
                                {
                                    id: 'shot-4',
                                    description: 'Accreditation screenshot 4',
                                    image: '/Screenshot 2026-02-19 141405.png',
                                    className: 'h-16 w-auto',
                                },
                                {
                                    id: 'nvq-qualified',
                                    description: 'NVQ qualified badge',
                                    image: '/city guilds.jpg',
                                    className: 'h-16 w-auto',
                                },
                                {
                                    id: 'gas-safe',
                                    description: 'Gas Safe engineer badge',
                                    image: '/gas safe.png',
                                    className: 'h-16 w-auto',
                                },
                            ]}
                            className="pt-1"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                            {services.map((service, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        'group relative flex flex-col justify-between overflow-hidden rounded-xl p-6 border border-white/15 transition-all hover:border-white/30',
                                        service.className
                                    )}
                                >
                                    <div className="mb-4">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 text-white">
                                            <service.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white font-oswald uppercase">{service.title}</h3>
                                        <p className="text-white/60 text-sm mt-2 leading-relaxed">{service.description}</p>
                                    </div>
                                    <div className="flex items-center text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                                        More <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a
                                href="tel:01942873026"
                                className="inline-flex items-center justify-center gap-2.5 bg-[#2C3E6B] hover:bg-[#1e2b4d] text-white font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-xl transition-all shadow-lg shadow-[#2C3E6B]/25 hover:shadow-[#2C3E6B]/40 font-altform"
                            >
                                <Phone className="w-4 h-4" />
                                Call 01942 873 026
                            </a>
                            <a
                                href="#booking"
                                className="inline-flex items-center justify-center gap-2 border border-[#2C3E6B]/40 hover:border-[#2C3E6B] text-[#2C3E6B] hover:bg-[#2C3E6B]/5 font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-xl transition-all font-altform"
                            >
                                Book Online <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
