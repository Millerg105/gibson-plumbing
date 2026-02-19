/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║          WEBSITE CLONER — CLIENT CONFIG FILE                    ║
 * ║  FILL THIS IN FIRST. Everything on the site pulls from here.   ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * WORKFLOW (30 mins):
 * 1. Fill in every field below with the client's details
 * 2. Drop their photos into public/project-images/ (6–12 photos)
 * 3. Add their logo to public/ and update images.logo below
 * 4. Run: npm run dev → check localhost:3000
 * 5. Push to GitHub → Vercel auto-deploys
 */

export const config = {
    // ─── BUSINESS IDENTITY ──────────────────────────────────────────────────────
    businessName: "CLIENT NAME HERE",           // e.g. "Apex Plumbing"
    tagline: "TAGLINE HERE",                    // e.g. "Wigan's #1 Emergency Plumber"
    shortName: "CLIENT",                        // Short version for logo/hero
    niche: "plumbing",                          // plumbing | hvac | cleaning | pest-control | roofing
    metaDescription: "META DESCRIPTION HERE — describe the business in 1–2 sentences for Google.", // For SEO

    // ─── CONTACT ────────────────────────────────────────────────────────────────
    phone: "PHONE NUMBER HERE",                 // e.g. "01942 835 064"
    phoneDial: "PHONENUMBERNOSPACESHERE",       // e.g. "01942835064" (for tel: links)
    email: "EMAIL HERE",                        // e.g. "info@client.co.uk"
    website: "THEIR WEBSITE URL HERE",          // e.g. "https://apex-plumbing.co.uk"

    // ─── LOCATION ───────────────────────────────────────────────────────────────
    address: "CITY/TOWN HERE",                  // e.g. "Manchester"
    serviceArea: "SERVICE AREA HERE",           // e.g. "Manchester, Salford & Surrounding Areas"
    googleMapsEmbed: "GOOGLE MAPS EMBED URL HERE", // Get from Google Maps → Share → Embed

    // ─── BRAND COLOURS ──────────────────────────────────────────────────────────
    // TIP: Go to imagecolorpicker.com → paste their logo → copy hex codes
    colors: {
        primary: "#PRIMARY_COLOUR_HERE",           // e.g. "#1A2B5E" (main dark colour)
        primaryLight: "#PRIMARY_LIGHT_HERE",       // e.g. "#2C3E6B" (slightly lighter)
        accent: "#ACCENT_COLOUR_HERE",             // e.g. "#3B82F6" (highlight colour)
        accentHover: "#ACCENT_HOVER_HERE",         // e.g. "#2563EB" (darker on hover)
        textLight: "#FFFFFF",                      // Usually white — leave as is
        background: "#FFFFFF",                     // Usually white — leave as is
        backgroundDark: "#0F0F0F",                 // Dark sections bg
    },

    // ─── SERVICES (max 6 for the bento grid) ────────────────────────────────────
    // Tip: Scrape their website for exact service names
    services: [
        {
            title: "SERVICE 1 HERE",                 // e.g. "Boiler Installation"
            description: "SHORT DESCRIPTION HERE.",  // 1 sentence, benefit-led
            icon: "🔧",                              // Single emoji
        },
        {
            title: "SERVICE 2 HERE",
            description: "SHORT DESCRIPTION HERE.",
            icon: "🚨",
        },
        {
            title: "SERVICE 3 HERE",
            description: "SHORT DESCRIPTION HERE.",
            icon: "🏠",
        },
        {
            title: "SERVICE 4 HERE",
            description: "SHORT DESCRIPTION HERE.",
            icon: "⚡",
        },
        {
            title: "SERVICE 5 HERE",
            description: "SHORT DESCRIPTION HERE.",
            icon: "✅",
        },
        {
            title: "SERVICE 6 HERE",
            description: "SHORT DESCRIPTION HERE.",
            icon: "📱",
        },
    ],

    // ─── FREE VALUE OFFER (replaces "Boiler Health Check" quiz) ─────────────────
    // This is the lead magnet — adapt it to the niche
    freeOffer: {
        title: "FREE VALUE OFFER TITLE HERE",      // e.g. "Free Boiler Health Check"
        subtitle: "FREE OFFER SUBTITLE HERE",      // e.g. "Is Your Boiler Winter-Ready?"
        description: "FREE OFFER DESCRIPTION HERE — what does the client get for free?",
        ctaButton: "CTA BUTTON TEXT HERE",         // e.g. "Book My Free Check"
    },

    // ─── SOCIAL / REVIEWS ───────────────────────────────────────────────────────
    googleReviewCount: "REVIEW COUNT HERE",      // e.g. "60+"
    googleRating: 5.0,                           // e.g. 4.9
    facebookUrl: "FACEBOOK URL HERE",            // e.g. "https://facebook.com/client"
    instagramUrl: "INSTAGRAM URL HERE",          // Leave "" if none

    // ─── IMAGES ─────────────────────────────────────────────────────────────────
    // Drop all photos into public/project-images/ then list them here
    images: {
        logo: "/LOGO_FILE_HERE.png",               // e.g. "/client-logo.png"
        logoText: "/LOGO_TEXT_FILE_HERE.png",      // Text-only logo (if available)
        heroBg: "/HERO_BG_FILE_HERE.png",          // Main hero background photo (van/shopfront)
        projects: [
            "/project-images/PHOTO_1.jpg",           // ← Replace with client's actual photos
            "/project-images/PHOTO_2.jpg",
            "/project-images/PHOTO_3.jpg",
            "/project-images/PHOTO_4.jpg",
            "/project-images/PHOTO_5.jpg",
            "/project-images/PHOTO_6.jpg",
        ],
    },

    // ─── TESTIMONIALS ───────────────────────────────────────────────────────────
    // Scrape 3 real Google reviews — copy the reviewer name, location, and text
    testimonials: [
        {
            name: "REVIEWER NAME 1",                 // e.g. "Sarah M."
            location: "LOCATION 1",                  // e.g. "Wigan"
            rating: 5,
            text: "REVIEW TEXT 1 — copy from Google Reviews.",
        },
        {
            name: "REVIEWER NAME 2",
            location: "LOCATION 2",
            rating: 5,
            text: "REVIEW TEXT 2 — copy from Google Reviews.",
        },
        {
            name: "REVIEWER NAME 3",
            location: "LOCATION 3",
            rating: 5,
            text: "REVIEW TEXT 3 — copy from Google Reviews.",
        },
    ],

    // ─── ACCREDITATIONS ─────────────────────────────────────────────────────────
    // Certifications / trust badges shown in the about section
    accreditations: [
        "ACCREDITATION 1",                         // e.g. "Gas Safe Registered"
        "ACCREDITATION 2",                         // e.g. "City & Guilds Qualified"
        "ACCREDITATION 3",                         // e.g. "10-Year Warranty"
    ],

    // ─── LOCATIONS SERVED ───────────────────────────────────────────────────────
    locations: [
        "LOCATION 1",                              // e.g. "Wigan"
        "LOCATION 2",                              // e.g. "Leigh"
        "LOCATION 3",                              // e.g. "Atherton"
        "LOCATION 4",
    ],
};

export type Config = typeof config;
