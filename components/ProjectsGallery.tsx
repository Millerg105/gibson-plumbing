'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'BLACK TRIM SHOWER',
        subtitle: 'PRECISION FIT OUT',
        description: 'Crisp marble effect tiling with recessed shelf and matte black brassware.',
        image: '/projects/project-1.jpg'
    },
    {
        title: 'MODERN ENSUITE',
        subtitle: 'COMPLETE REFIT',
        description: 'Walk-in glass shower, vanity unit and towel rail installed as one clean package.',
        image: '/projects/project-2.jpg'
    },
    {
        title: 'FULL SUITE BUILD',
        subtitle: 'BATH + WALK IN',
        description: 'Large format stone tiles with freestanding bath and bespoke shower zone.',
        image: '/projects/project-3.jpg'
    },
    {
        title: 'COMPACT SHOWER ROOM',
        subtitle: 'SPACE SMART LAYOUT',
        description: 'Floating basin, glazed divider and black fixtures maximised for daily use.',
        image: '/projects/project-4.jpg'
    },
    {
        title: 'CONTEMPORARY WET ZONE',
        subtitle: 'SLIMLINE FINISH',
        description: 'Muted tile palette with framed shower screen and coordinated radiator detailing.',
        image: '/projects/project-5.jpg'
    },
    {
        title: 'DESIGN LED CLOAKROOM',
        subtitle: 'PREMIUM DETAILING',
        description: 'Feature mirror lighting with modern sanitaryware in a compact footprint.',
        image: '/projects/project-6.jpg'
    },
    {
        title: 'FAMILY BATHROOM UPGRADE',
        subtitle: 'EVERYDAY PRACTICAL',
        description: 'Strong tile finish and open floor area built for reliable long-term performance.',
        image: '/projects/project-7.jpg'
    },
    {
        title: 'FEATURE BATH INSTALL',
        subtitle: 'STATEMENT FINISH',
        description: 'Freestanding bath and panelled walls paired with black-framed shower screening.',
        image: '/projects/project-8.jpg'
    },
    {
        title: 'TRADITIONAL ROOM REFRESH',
        subtitle: 'MODERNISED SYSTEMS',
        description: 'Heritage-style room upgraded with fresh surfaces and practical shower provision.',
        image: '/projects/project-9.jpg'
    },
    {
        title: 'UTILITY BATHROOM FIT',
        subtitle: 'BUILT FOR DAILY USE',
        description: 'Simple durable installation with clean lines and straightforward maintenance.',
        image: '/projects/project-10.jpg'
    },
    {
        title: 'SOFT STONE ENSUITE',
        subtitle: 'NEAT FINISHING',
        description: 'Integrated vanity and bath edge work finished with matching neutral tiles.',
        image: '/projects/project-11.jpg'
    },
    {
        title: 'CLOAKROOM REVAMP',
        subtitle: 'COMPACT PREMIUM LOOK',
        description: 'Stone wall texture, vessel sink and brass detailing tailored for small spaces.',
        image: '/projects/project-12.jpg'
    },
];

export default function ProjectsGallery() {
    return (
        <section className="py-24 bg-[#0A0A0A]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-16">
                    <p className="text-xs tracking-[0.25em] text-[#2C3E6B] mb-4 uppercase font-altform">Our Work</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-none font-oswald uppercase">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2C3E6B]">Projects</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[300px] overflow-hidden rounded-xl border border-white/10"
                            tabIndex={0}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300">
                                <p className="text-[#2C3E6B] text-[10px] font-bold tracking-widest uppercase mb-1">
                                    {project.subtitle}
                                </p>
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-white/60 text-xs leading-relaxed opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 delay-100">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
