import Navbar from '@/components/Navbar';
import ServicesPageContent from '@/components/ServicesPageContent';
import InteractiveFooter from '@/components/InteractiveFooter';

export default function ServicesPage() {
    return (
        <main className="bg-[#0A0A0A] text-white min-h-screen selection:bg-[#2C3E6B] selection:text-white">
            <Navbar />
            <ServicesPageContent />
            <section id="contact">
                <InteractiveFooter
                    businessName="Gibson Plumbing"
                    contact={{
                        phone: '01942 873 026',
                        email: 'info@gphwigan.co.uk',
                        address: '17 Preston Road, Standish, Wigan WN6 0HR',
                    }}
                />
            </section>
        </main>
    );
}
