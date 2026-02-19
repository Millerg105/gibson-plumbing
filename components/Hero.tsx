'use client'

import React from 'react'
import Image from 'next/image'
import HeroShutterImage from '@/components/ui/hero-shutter-image'
import { config } from '@/cloner.config'

interface HeroProps {
    businessName: string
    tagline: string
    services: string[]
    media?: {
        videoUrl?: string
        imageUrl?: string
        backgroundImage?: string
    }
}

export default function Hero({ tagline }: HeroProps) {
    // Project carousel — driven by config.images.projects
    // Add/remove photos in cloner.config.ts → updates here automatically
    const projectLabels = [
        { title: 'PROJECT 1', subtitle: 'PLACE TITLE HERE' },
        { title: 'PROJECT 2', subtitle: 'PLACE TITLE HERE' },
        { title: 'PROJECT 3', subtitle: 'PLACE TITLE HERE' },
        { title: 'PROJECT 4', subtitle: 'PLACE TITLE HERE' },
        { title: 'PROJECT 5', subtitle: 'PLACE TITLE HERE' },
        { title: 'PROJECT 6', subtitle: 'PLACE TITLE HERE' },
        { title: 'PROJECT 7', subtitle: 'PLACE TITLE HERE' },
        { title: 'PROJECT 8', subtitle: 'PLACE TITLE HERE' },
    ]

    const projects = config.images.projects.map((image, i) => ({
        title: projectLabels[i]?.title ?? `PROJECT ${i + 1}`,
        subtitle: projectLabels[i]?.subtitle ?? 'PLACE TITLE HERE',
        description: 'Project description — pulled from Facebook or client site.',
        image,
    }))

    const allProjects = [...projects, ...projects]

    return (
        <section
            className="relative h-screen w-full overflow-hidden bg-black text-white"
        >
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Single van photo with Ken Burns animation */}
                <div
                    className="hero-slide hero-slide-static"
                    style={{ backgroundImage: 'url("/HERO/505411076_1564832594859847_8539765231592124547_n.jpg")' }}
                />

                {/* Minimal bottom fade so content below hero reads cleanly */}
                <div className="hero-overlay hero-overlay-bridge" style={{ zIndex: 11 }} />
            </div>

            {/* Center Content - absolute dead-center */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="flex flex-col items-center gap-0">
                    {/* Main Gibson Logo - Animated Shutter Image */}
                    <div className="relative w-[85vw] max-w-[1200px]" style={{ aspectRatio: '3.5 / 1' }}>
                        <HeroShutterImage
                            src="/hero text/gemini-logo-2.png"
                            alt="Gibson Plumbing & Heating"
                            priority
                        />
                    </div>

                    {/* Tagline + Subtag — single wider glass bubble */}
                    <div className="mt-8 px-4 flex justify-center">
                        <div className="w-fit max-w-[82vw] rounded-full bg-black/22 backdrop-blur-[7px] border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                            <div className="flex flex-col items-center gap-2 px-[1.875rem] py-4 md:px-8 md:py-4">
                                <p
                                    className="max-w-[620px] text-[clamp(1.1rem,1.4vw,1.12rem)] leading-[1.45] text-white font-medium text-center"
                                    style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.75)' }}
                                >
                                    {tagline || "Gibson's Plumbing Heating delivers precision engineering that transforms homes across Wigan and beyond."}
                                </p>
                                <p
                                    className="font-['Brush_Script_MT',_'Segoe_Script',_cursive] text-[clamp(1.15rem,1.9vw,1.4rem)] text-white italic tracking-[0.02em] text-center"
                                    style={{ textShadow: '0 2px 7px rgba(0, 0, 0, 0.72), 0 0 1px rgba(0, 0, 0, 0.75)' }}
                                >
                                    Wigan's Most Trusted Trade
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Freshman.tv-style ticker at bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden">
                <div className="bg-black/20 backdrop-blur-[2px]">
                    {/* Top dashed line */}
                    <div className="w-full border-t border-dashed border-white/50"></div>

                    {/* Sliding row */}
                    <div className="py-5 overflow-hidden">
                        <div className="flex gap-0 animate-slide w-max">
                            {allProjects.map((project, index) => (
                                <div key={index} className="flex items-center flex-shrink-0 cursor-pointer group">
                                    {/* Text */}
                                    <div className="flex flex-col gap-1 pr-6 max-w-[240px]">
                                        <span className="text-[0.9rem] font-bold text-white tracking-[0.03em] uppercase leading-tight">{project.title}</span>
                                        <span className="text-[0.72rem] text-white/75 tracking-[0.12em] uppercase">{project.subtitle}</span>
                                        <span className="text-[0.76rem] text-white/70 leading-snug">{project.description}</span>
                                    </div>
                                    {/* Image */}
                                    <div className="w-[18vw] min-w-[200px] max-w-[280px] h-[10vw] min-h-[112px] max-h-[156px] overflow-hidden rounded-sm mx-4">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom dashed line */}
                    <div className="w-full border-t border-dashed border-white/50"></div>
                </div>

                {/* Year / copyright */}
                <div className="text-center py-3">
                    <span className="text-[1rem] text-white italic tracking-wide font-['Brush_Script_MT',_'Segoe_Script',_cursive]">2026©</span>
                </div>
            </div>

        </section>
    )
}
