'use client'

import React from 'react'
import Image from 'next/image'
import HeroShutterImage from '@/components/ui/hero-shutter-image'

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
    // Single hero background — van photo with Ken Burns animation

    const projects = [
        {
            title: 'BLACK TRIM SHOWER',
            subtitle: 'PRECISION FIT OUT',
            description: 'Crisp marble effect tiling with recessed shelf and matte black brassware.',
            image: '/project-images/486889829_1500030858006688_2711677658954263752_n.jpg'
        },
        {
            title: 'MODERN ENSUITE',
            subtitle: 'COMPLETE REFIT',
            description: 'Walk-in glass shower, vanity unit and towel rail installed as one clean package.',
            image: '/project-images/487241235_1500030824673358_826396324732640599_n.jpg'
        },
        {
            title: 'FULL SUITE BUILD',
            subtitle: 'BATH + WALK IN',
            description: 'Large format stone tiles with freestanding bath and bespoke shower zone.',
            image: '/project-images/487298241_1500030844673356_3364429620033682151_n.jpg'
        },
        {
            title: 'COMPACT SHOWER ROOM',
            subtitle: 'SPACE SMART LAYOUT',
            description: 'Floating basin, glazed divider and black fixtures maximised for daily use.',
            image: '/project-images/489929278_1512043933472047_4732552171357439409_n.jpg'
        },
        {
            title: 'CONTEMPORARY WET ZONE',
            subtitle: 'SLIMLINE FINISH',
            description: 'Muted tile palette with framed shower screen and coordinated radiator detailing.',
            image: '/project-images/474648742_17934343817976774_4396125200450807822_n.jpg'
        },
        {
            title: 'DESIGN LED CLOAKROOM',
            subtitle: 'PREMIUM DETAILING',
            description: 'Feature mirror lighting with modern sanitaryware in a compact footprint.',
            image: '/project-images/504109146_1558894055453701_4154799668694456749_n.jpg'
        },
        {
            title: 'FAMILY BATHROOM UPGRADE',
            subtitle: 'EVERYDAY PRACTICAL',
            description: 'Strong tile finish and open floor area built for reliable long-term performance.',
            image: '/project-images/506417751_1563963218280118_482297892201879522_n.jpg'
        },
        {
            title: 'FEATURE BATH INSTALL',
            subtitle: 'STATEMENT FINISH',
            description: 'Freestanding bath and panelled walls paired with black-framed shower screening.',
            image: '/project-images/581799699_1704372400905865_6985385323332815511_n.jpg'
        },
        {
            title: 'TRADITIONAL ROOM REFRESH',
            subtitle: 'MODERNISED SYSTEMS',
            description: 'Heritage-style room upgraded with fresh surfaces and practical shower provision.',
            image: '/project-images/574282056_1689013079108464_6843722183469312655_n.jpg'
        },
        {
            title: 'UTILITY BATHROOM FIT',
            subtitle: 'BUILT FOR DAILY USE',
            description: 'Simple durable installation with clean lines and straightforward maintenance.',
            image: '/project-images/577003389_1696451665031272_8045769850850060885_n.jpg'
        },
        {
            title: 'SOFT STONE ENSUITE',
            subtitle: 'NEAT FINISHING',
            description: 'Integrated vanity and bath edge work finished with matching neutral tiles.',
            image: '/project-images/612005417_1747213583288413_7286806574863668508_n.jpg'
        },
        {
            title: 'CLOAKROOM REVAMP',
            subtitle: 'COMPACT PREMIUM LOOK',
            description: 'Stone wall texture, vessel sink and brass detailing tailored for small spaces.',
            image: '/project-images/612597497_1747213623288409_2050588822871596554_n.jpg'
        },
    ]

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
