/**
 * WEBSITE CLONER - Business Configuration
 * ========================================
 * This is the ONLY file you need to edit to clone this template for a new client.
 * Fill in the client's details and the site will update everywhere automatically.
 *
 * WORKFLOW:
 * 1. Fill in all fields below
 * 2. Drop images into public/assets/ (logo, hero bg, project photos)
 * 3. Run: npm run dev to preview
 * 4. Push to GitHub → Vercel auto-deploys
 */

export const config = {
    // ─── BUSINESS IDENTITY ──────────────────────────────────────────────────────
    businessName: "Gibson Plumbing",
    tagline: "Wigan's Premier Plumbing & Heating Specialists",
    shortName: "Gibson", // Used in hero/logo areas
    niche: "plumbing", // plumbing | hvac | cleaning | pest-control | roofing

    // ─── CONTACT ────────────────────────────────────────────────────────────────
    phone: "01942 835 064",
    phoneDial: "01942835064", // No spaces for tel: links
    email: "info@gibsonplumbingandheating.co.uk",
    website: "https://gibsonplumbingandheating.co.uk",

    // ─── LOCATION ───────────────────────────────────────────────────────────────
    address: "Wigan, Greater Manchester",
    serviceArea: "Wigan, Leigh, Atherton & Surrounding Areas",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75831.18!2d-2.66!3d53.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b0047df64e79d%3A0x40be5f76d53d8d4!2sWigan!5e0!3m2!1sen!2suk!4v1",

    // ─── BRAND COLOURS ──────────────────────────────────────────────────────────
    // Tip: use https://imagecolorpicker.com to pull colours from the client's logo
    colors: {
        primary: "#1A2B5E",        // Deep navy
        primaryLight: "#2C3E6B",   // Lighter navy
        accent: "#3B82F6",         // Blue
        accentHover: "#2563EB",    // Darker blue
        textLight: "#FFFFFF",
        background: "#FFFFFF",
        backgroundDark: "#0F2040",
    },

    // ─── SERVICES (max 6 for bento grid) ────────────────────────────────────────
    services: [
        {
            title: "Boiler Installation",
            description: "Expert fitting of energy-efficient boilers with 10-year warranty options.",
            icon: "🔥",
        },
        {
            title: "Emergency Plumbing",
            description: "24/7 rapid response for burst pipes, leaks, and plumbing emergencies.",
            icon: "🚨",
        },
        {
            title: "Bathroom Installation",
            description: "Complete bathroom transformations from design to final fit.",
            icon: "🛁",
        },
        {
            title: "Central Heating",
            description: "Full system installs, powerflushes, and radiator upgrades.",
            icon: "🌡️",
        },
        {
            title: "Gas Safety Checks",
            description: "Annual landlord certificates and domestic safety inspections.",
            icon: "✅",
        },
        {
            title: "Smart Controls",
            description: "Nest, Hive & smart thermostat installation for modern homes.",
            icon: "📱",
        },
    ],

    // ─── SOCIAL / REVIEWS ───────────────────────────────────────────────────────
    googleReviewCount: "60+",
    googleRating: 4.9,
    facebookUrl: "https://www.facebook.com/gibsonplumbingwigan",
    instagramUrl: "",

    // ─── IMAGES ─────────────────────────────────────────────────────────────────
    // All paths relative to /public
    images: {
        logo: "/gibson-logo.png",
        logoText: "/gibson-text-logo.png",
        heroBg: "/gibson-hero-bg.png",
        // Project photos - add as many as you like
        projects: [
            "/project-images/474648742_17934343817976774_4396125200450807822_n.jpg",
            "/project-images/486889829_1500030858006688_2711677658954263752_n.jpg",
            "/project-images/487241235_1500030824673358_826396324732640599_n.jpg",
            "/project-images/487298241_1500030844673356_3364429620033682151_n.jpg",
            "/project-images/489929278_1512043933472047_4732552171357439409_n.jpg",
            "/project-images/504109146_1558894055453701_4154799668694456749_n.jpg",
        ],
    },

    // ─── TESTIMONIALS ───────────────────────────────────────────────────────────
    testimonials: [
        {
            name: "Sarah M.",
            location: "Wigan",
            rating: 5,
            text: "Absolutely fantastic service. Called at 8am with a burst pipe and they were here within the hour. Professional, tidy, and reasonably priced.",
        },
        {
            name: "James K.",
            location: "Leigh",
            rating: 5,
            text: "Had a full bathroom installed. The team were brilliant from start to finish. Couldn't be happier with the result.",
        },
        {
            name: "Linda T.",
            location: "Atherton",
            rating: 5,
            text: "New boiler installed flawlessly. They explained everything clearly and left the place spotless. Highly recommend.",
        },
    ],

    // ─── ACCREDITATIONS ─────────────────────────────────────────────────────────
    accreditations: ["Gas Safe Registered", "City & Guilds Qualified", "10-Year Warranty"],
};

export type Config = typeof config;
