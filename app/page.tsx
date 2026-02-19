import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MissedCallBanner from '@/components/MissedCallBanner';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import OnlineBooking from '@/components/OnlineBooking';
import BoilerQuiz from '@/components/BoilerQuiz';
import LocationsSection from '@/components/LocationsSection';
import ChatWidget from '@/components/ChatWidget';
import { Footer } from '@/components/ui/footer-demo';

export default function Home() {
    return (
        <main className="bg-white text-[#0F2040] min-h-screen selection:bg-[#2C3E6B] selection:text-white">
            <Navbar />

            {/* Page 1: Hero (Gibson) */}
            <section id="hero">
                <Hero
                    businessName="Gibson Plumbing"
                    tagline="Gibson Plumbing & Heating delivers precision engineering that transforms homes across Wigan and beyond."
                    services={["Emergency Repairs", "Boiler Installs", "Luxury Bathrooms", "Heating Controls", "Commercial", "Power Flushing"]}
                    media={{
                        backgroundImage: "/gibson-hero-bg.png"
                    }}
                />
            </section>

            {/* Missed Call Text-Back Banner */}
            <MissedCallBanner />

            {/* Page 2: About Us */}
            <section id="about">
                <About />
            </section>

            {/* Page 3: Boiler Health Check */}
            <section id="boiler-health-check">
                <BoilerQuiz />
            </section>

            {/* Page 3.5: Booking (Middle) */}
            <section id="booking">
                <OnlineBooking />
            </section>

            {/* Page 3: Reviews */}
            <section id="testimonials">
                <Testimonials />
            </section>

            {/* Page 3.2: Locations */}
            <section id="locations">
                <LocationsSection />
            </section>

            {/* Page 4: "The Photo" / Contact / Footer */}
            <section id="contact">
                <Footer />
            </section>

            {/* Floating Chat Widget */}
            <ChatWidget />
        </main>
    );
}
