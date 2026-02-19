'use client';
import { Phone, X, Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks: { name: string; href: string; isPage?: boolean }[] = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Our Services', href: '/services', isPage: true },
        { name: 'Featured Projects', href: '/featured-projects', isPage: true },
        { name: 'Reviews', href: '#testimonials' },
        { name: 'Boiler Health Check', href: '#boiler-health-check' },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If on a sub-page, navigate to home with the anchor
            window.location.href = '/' + href;
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Full-width fade bar — darkens sky just enough for legibility, fades to nothing */}
            <div
                className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
                style={{ height: '90px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)' }}
            />

            <nav className="fixed top-0 left-0 right-0 z-[9998] pointer-events-none text-white">

                {/* Top-left: Coloured Gibson logo */}
                <div className="absolute top-4 left-5 pointer-events-auto z-[9999]">
                    <Link href="/">
                        <Image
                            src="/gibson-logo.png"
                            alt="Gibson"
                            width={64}
                            height={64}
                            className="object-contain cursor-pointer"
                            priority
                        />
                    </Link>
                </div>

                {/* Center: Phone Number (desktop only) */}
                <div className="absolute left-1/2 top-5 -translate-x-1/2 z-[9999] hidden md:block pointer-events-auto">
                    <a
                        href="tel:01942873026"
                        className="flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm text-white hover:bg-black/35 hover:border-white/40 transition-all duration-300 text-sm font-medium tracking-[0.12em] uppercase font-altform cursor-pointer"
                    >
                        <Phone className="w-3.5 h-3.5 opacity-70" />
                        <span>01942 873 026</span>
                    </a>
                </div>
            </nav>

            {/* Menu button — own fixed layer so it's always pinned true top-right */}
            <div className="fixed top-4 right-5 z-[9999] pointer-events-auto">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Open menu"
                    className="flex items-center justify-center w-12 h-12 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm text-white hover:bg-black/35 hover:border-white/40 transition-all duration-300"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Full-screen Menu Overlay */}
            <div
                className={`fixed inset-0 z-[100] bg-black/45 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500 ease-out ${isMenuOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/58 to-black/74" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.09),transparent_42%)]" />

                {/* Close Button — same position as hamburger so it swaps cleanly */}
                <div className="absolute top-4 right-5 z-[110]">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Menu Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3">
                    {navLinks.map((link, i) => (
                        link.isPage ? (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-3xl font-bold uppercase tracking-[0.14em] text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white hover:tracking-[0.18em] md:px-7 md:py-3 md:text-5xl font-altform"
                                style={{ transitionDelay: `${i * 50}ms` }}
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-3xl font-bold uppercase tracking-[0.14em] text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white hover:tracking-[0.18em] md:px-7 md:py-3 md:text-5xl font-altform"
                                style={{ transitionDelay: `${i * 50}ms` }}
                            >
                                {link.name}
                            </a>
                        )
                    ))}

                    {/* Phone Number */}
                    <div className="mt-8 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                        <a href="tel:01942873026" className="flex items-center gap-3 text-white/75 hover:text-white transition-colors text-sm font-altform tracking-[0.16em] uppercase">
                            <Phone className="w-4 h-4" />
                            <span>01942 873 026</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
