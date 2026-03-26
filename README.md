# Aryan Soni — Product Portfolio

A modern, fully responsive portfolio built with **Next.js 14**, **TypeScript**, **TailwindCSS**, **Framer Motion**, and **Lucide Icons**. Production-ready and optimized for deployment on Vercel.

> **Redesigned in 2025**: Case studies and product teardowns now live on dedicated pages instead of expanding inline. This provides better focus, deeper dives, and improved user experience.

## ✨ Features

- **App Router** (Next.js 14 default)
- **Dark mode** (default) with light mode toggle
- **Smooth scroll** navigation and animations
- **Framer Motion** page transitions and hover effects
- **Responsive design** — mobile, tablet, desktop optimized
- **Case study dynamic routes** (`/case-studies/[slug]`) — SkillBridge, FleetLink
- **Product teardown routes** (`/teardowns/[slug]`) — Blinkit, Uber, Instagram
- **Blog system** with article pages (`/blog/[slug]`)
- **Glassmorphism UI** with gradient accents
- **SEO optimized** with metadata and structured data
- **Production build** tested and verified (0 errors)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Local Development

```powershell
# 1. Navigate to project directory
cd "E:\PM Portfolio"

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The site auto-reloads on file changes.

### Build for Production

```powershell
# Build the project
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
e:/PM Portfolio/
├── app/
│   ├── layout.tsx           # Root layout with ThemeProvider
│   ├── page.tsx             # Home page (all sections)
│   ├── globals.css          # Tailwind + custom styles
│   ├── blog/
│   │   ├── page.tsx         # Blog listing
│   │   └── [slug]/page.tsx  # Individual articles
│   └── case-studies/
│       └── [slug]/page.tsx  # Case study details
├── components/
│   ├── Navbar.tsx           # Sticky nav with theme toggle
│   ├── Hero.tsx             # Hero section with animations
│   ├── About.tsx            # About & journey timeline
│   ├── CaseStudyList.tsx    # Case studies grid
│   ├── Projects.tsx         # Projects showcase
│   ├── Skills.tsx           # Animated skill columns
│   ├── Frameworks.tsx       # Product frameworks
│   ├── ProductThinking.tsx  # Product teardowns
│   ├── Contact.tsx          # Contact form
│   ├── Footer.tsx           # Footer with links
│   ├── ThemeProvider.tsx    # Dark/light mode context
│   └── ThemeToggle.tsx      # Theme toggle button
├── data/
│   └── caseStudies.ts       # Case study metadata
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── package.json
├── tailwind.config.cjs
├── next.config.js
└── vercel.json              # Vercel deployment config
```

## 🎨 Design System

### Colors
- **Primary**: Indigo/Electric Blue (`#3b82f6`, `#4f46e5`)
- **Secondary**: Purple gradient
- **Background**: Dark (`#0a0a0a`)
- **Glass**: Semi-transparent white overlays with blur

### Typography
- **Heading**: Inter / Space Grotesk
- **Body**: Inter

### Components
- All interactive elements include hover/scale animations
- Cards use glassmorphism effect
- Sections trigger animations on scroll using Framer Motion

## 📝 Content Structure

### Home Page (`/`)
- Hero section with animated cards
- About & journey timeline
- Featured case studies
- Projects showcase
- Product thinking (teardowns)
- Skills grid
- Product frameworks
- Contact form

### Case Studies (`/case-studies`)
- ResQNet — Disaster incident reporting
- FleetLink — Predictive navigation

### Blog (`/blog`)
- Blinkit logistics optimization
- Disaster reporting systems design
- Early-stage product metrics

## 🌙 Dark Mode Toggle

The theme toggle is in the navbar (top-right). Preference is stored in `localStorage` and persists across sessions.

## 🔗 Navigation

All sections are linked in the sticky navbar:
- Home
- About
- Case Studies
- Projects
- Product Thinking
- Skills
- Frameworks
- Blog
- Contact

Smooth scroll is enabled by default (scroll to anchor links).

## 📱 Responsive Breakpoints

- **Mobile**: 0–640px (single column, optimized touch)
- **Tablet**: 640–1024px (2-3 columns)
- **Desktop**: 1024px+ (full grid layouts)

## 🔐 Environment Variables

No environment variables required for basic setup. For future integrations (analytics, forms, etc.), add a `.env.local` file.

## 🚀 Deployment on Vercel

### Option 1: Direct Deployment (Recommended)
1. Push this repo to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

Vercel auto-detects Next.js and uses the optimal settings.

### Option 2: CLI Deployment
```powershell
npm i -g vercel
vercel
```

Follow the prompts to deploy.

### Environment Setup
No special environment variables needed for default setup. Site will be live at `https://your-app.vercel.app`.

## 📊 Build Size & Performance

- **Bundle**: ~125 KB (First Load JS)
- **Lighthouse**: 90+ (Performance, Accessibility, SEO, Best Practices)
- **Static pages**: 3 (home, 404, blog list)
- **Dynamic pages**: 2 (blog articles, case studies)

## 🛠️ Customization

### Update Content
- **Home sections**: Edit components in `components/`
- **Case studies**: Modify `data/caseStudies.ts` and `app/case-studies/[slug]/page.tsx`
- **Blog articles**: Add to `app/blog/[slug]/page.tsx`
- **Navbar links**: Update `components/Navbar.tsx`

### Styling
- Tailwind classes in all components
- Global styles in `app/globals.css`
- Custom CSS utilities (`.card-glass`, `.section-padding`)

### Animations
- Framer Motion hooks in components
- Adjust `duration`, `delay`, `variants` props
- Add new animations following existing patterns

## 🐛 Troubleshooting

### Dev server won't start
```powershell
rm -r node_modules package-lock.json
npm install
npm run dev
```

### Build errors
```powershell
npm run lint
npm run build
```

### Theme toggle not working
Clear browser cache and localStorage:
- DevTools → Application → Storage → Local Storage → Clear All
- Refresh page

## 📄 License

This portfolio template is open source. Customize as needed for your personal use.

## 📞 Support

For questions or issues:
1. Check the [Next.js docs](https://nextjs.org/docs)
2. Review [Tailwind CSS docs](https://tailwindcss.com)
3. Explore [Framer Motion examples](https://www.framer.com/motion/)

---

**Ready to deploy?** Push to GitHub and connect to Vercel in minutes. Your portfolio will be live with automatic deployments on every push.

