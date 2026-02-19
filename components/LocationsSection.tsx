import { LocationMap } from '@/components/ui/expand-map';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function LocationsSection() {
    return (
        <section className="bg-white py-20 border-t border-black/5">
            <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
                <div className="mb-10 text-center">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#2C3E6B] font-altform">Our Locations</p>
                    <h2 className="font-oswald text-4xl font-bold uppercase leading-none text-[#0F2040] md:text-5xl">
                        Find Gibson Near You
                    </h2>
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-center gap-10">
                    <LocationMap
                        location="Gibson Plumbing & Heating — Wallgate"
                        coordinates="37 Wallgate, Wigan WN1 1BE"
                        googleMapsUrl="https://www.google.com/maps/place/37+Wallgate,+Wigan+WN1+1BE/@53.543524,-2.634662,17z"
                        dark
                    />

                    {/* Centre button — no routing, purely decorative */}
                    <div className="flex-shrink-0 z-10">
                        <button
                            type="button"
                            className="inline-flex items-center gap-2.5 bg-[#2C3E6B] hover:bg-[#1e2b4d] text-white font-bold text-xs uppercase tracking-[0.2em] px-5 py-3 rounded-full shadow-lg shadow-[#2C3E6B]/30 transition-all hover:shadow-[#2C3E6B]/50 font-altform whitespace-nowrap cursor-default"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Click me
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    <LocationMap
                        location="Gibson Plumbing & Heating — Standish"
                        coordinates="17 Preston Rd, Standish WN6 0HR"
                        googleMapsUrl="https://www.google.com/maps/place/17+Preston+Rd,+Standish,+Wigan+WN6+0HR"
                        dark
                    />
                </div>
            </div>
        </section>
    );
}
