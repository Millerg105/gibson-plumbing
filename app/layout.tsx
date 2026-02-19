'use client'

import React from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'
import { Oswald, Outfit } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
    subsets: ['latin'],
    variable: '--font-oswald'
})

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit'
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${oswald.variable} ${outfit.variable}`}>
            <ReactLenis root>
                <body className="antialiased text-[#0F2040] selection:bg-[#2C3E6B] selection:text-white">
                    {/* Background Layers - Strictly Negative Z-Index */}
                    <div className="fixed inset-0 bg-white z-[-2]" />
                    <div className="bg-noise fixed inset-0 z-[-1] pointer-events-none opacity-[0.015]" />

                    {/* Main Content - Explicitly interactive, nature flow */}
                    <div className="relative w-full pointer-events-auto">
                        {children}
                    </div>
                </body>
            </ReactLenis>
        </html>
    )
}
