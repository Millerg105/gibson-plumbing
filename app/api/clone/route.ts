import { NextRequest, NextResponse } from 'next/server'

// Note: This API route is designed to be called BY the Antigravity agent
// The agent has access to the Firecrawl MCP tools which this route cannot directly access
// When the user clicks "Generate", the frontend should display instructions for the agent

export async function POST(request: NextRequest) {
    try {
        const { websiteUrl, facebookUrl } = await request.json()

        if (!websiteUrl) {
            return NextResponse.json(
                { success: false, error: 'Website URL is required' },
                { status: 400 }
            )
        }

        // Return instructions for the Antigravity agent to execute
        return NextResponse.json({
            success: true,
            requiresAgent: true,
            message: 'Firecrawl integration requires Antigravity agent',
            instructions: {
                websiteUrl,
                facebookUrl,
                steps: [
                    {
                        step: 1,
                        action: 'scrape_website',
                        tool: 'mcp_zapier_firecrawl_scrape_page',
                        params: {
                            url: websiteUrl,
                            formats: ['markdown', 'html'],
                            onlyMainContent: 'false',
                            instructions: 'Extract complete business information including: business name, brand colors from CSS and logo, all services offered, customer testimonials and reviews, contact information (phone, email, address), social media links, all photos and videos. Return comprehensive data for website cloning.',
                            output_hint: 'Business name, brand colors, services list, testimonials, contact info, media URLs, and all text content'
                        }
                    },
                    {
                        step: 2,
                        action: 'scrape_facebook',
                        tool: 'mcp_zapier_firecrawl_crawl_website',
                        condition: 'if facebookUrl provided',
                        params: {
                            url: facebookUrl || '',
                            limit: '20',
                            formats: ['markdown'],
                            instructions: 'Extract all project photos, videos, and recent posts showing completed work',
                            output_hint: 'All media files (photos/videos) from recent posts'
                        }
                    },
                    {
                        step: 3,
                        action: 'parse_data',
                        description: 'Parse scraped markdown/HTML to extract structured data',
                        fields: [
                            'businessName - from title, h1, or logo alt text',
                            'brandColor - analyze CSS variables, logo colors, or use #ff2936 as fallback',
                            'services - array of service names and descriptions',
                            'testimonials - array of customer reviews with name and quote',
                            'contactInfo - phone, email, address',
                            'photos - array of image URLs for project showcase',
                            'videos - array of video URLs if available',
                            'socialLinks - Facebook, Instagram, etc.'
                        ]
                    },
                    {
                        step: 4,
                        action: 'generate_website',
                        description: 'Create output directory and generate website files',
                        tasks: [
                            'Create /output/[business-name]/ directory',
                            'Copy master template structure',
                            'Replace Hero.tsx with business name and tagline',
                            'Replace ProjectShowcase.tsx with client photos',
                            'Replace Services.tsx with client services',
                            'Replace Testimonials.tsx with client reviews',
                            'Replace Footer.tsx with contact info',
                            'Update globals.css with brand color',
                            'Download media files to /public/assets/',
                            'Build preview: npm run dev in new directory'
                        ]
                    }
                ]
            }
        })

    } catch (error) {
        console.error('Clone API error:', error)
        return NextResponse.json(
            { success: false, error: 'API request failed' },
            { status: 500 }
        )
    }
}
