# Gibson Plumbing & Website Cloner Ultimate

This is a modern, responsive website built for trade businesses (Plumbers, HVAC, Electricians). It features a high-performance Next.js frontend, shadcn/ui components, and is optimized for SEO and conversion.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/gibson-plumbing.git
    cd gibson-plumbing
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    pnpm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Features

- **Performance**: Optimized images, code-splitting, and lazy loading.
- **Mobile First**: Fully responsive layout with touch-friendly navigation.
- **SEO Ready**: Semantic HTML, meta tags, and Open Graph support.
- **Modern UI**: Built with Tailwind CSS and Framer Motion for smooth animations.
- **Contact Form**: Integrated lead capture (requires backend integration or email service).

## 📦 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1.  Push your code to a GitHub repository.
2.  Import the project in Vercel.
3.  Vercel will detect Next.js and deploy automatically.

### Manual Build

To build the application for production:

```bash
npm run build
npm start
```

## 🔧 Templatization (Website Cloner Ultimate)

This project is designed to be easily white-labeled. The core logic resides in `app/page.tsx`, `components/Hero.tsx`, and `components/ui`.

**Key Configuration Files:**
- `tailwind.config.ts`: Color palette and theme settings.
- `app/layout.tsx`: Global font and metadata configuration.
- `components/Navbar.tsx` & `Footer.tsx`: Navigation structure.

## 📝 License

This project is proprietary. Please check `LICENSE` for details.
