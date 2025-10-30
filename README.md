# Oakes — Powering the AI Revolution

A world-class hedge fund website featuring legendary UI/UX design with the burgundy brand system. Built with cutting-edge technologies and inspired by best-in-class sites like Stripe, Linear, Vercel, and Sequoia Capital.

## 🎨 Design System

### Burgundy Brand Palette
- **Primary Burgundy**: `#6E0F2F` - Deep, sophisticated burgundy for primary elements
- **Royal Blue**: `#5B7CFF` - Accent color for interactive elements
- **Gold**: `#E7C27D` - Highlights and premium touches
- **Ink**: `#0B0B13` - Deep background
- **Slate**: `#A8B0C2` - Body text and secondary content

### Typography
- **Display Font**: Inter Display for headlines (clamp 40px-72px)
- **Body Font**: Inter for all text content
- **Tracking**: Tight (-0.02em) for headlines, normal for body

### Motion Language
- **Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` - Smooth, natural motion
- **Duration**: 600ms default
- **Stagger**: 80ms between child animations
- **Spring Physics**: Stiffness 140, Damping 18

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling with custom burgundy theme
- **Framer Motion 11** - Production-grade animations
- **React CountUp** - Smooth number animations for KPIs
- **Shadcn UI** - High-quality component primitives
- **Heroicons** - Beautiful SVG icons

## ✨ Key Features

### Hero Section
- **Mouse-tracked spotlight** - Ambient burgundy gradient follows cursor
- **Count-up KPIs** - Animated metrics with blur-flip effect
- **Floating orbs** - Pulsing background elements with physics
- **Scroll indicator** - Animated scroll prompt

### Navigation
- **Glass morphism** - Backdrop blur with subtle opacity
- **Animated underlines** - Smooth gradient underlines on hover
- **Scroll-reactive** - Opacity increases on scroll

### Thesis Grid
- **2x2 Layout** - Four investment focus areas
- **Gold rim light** - Hover effect with gradient overlay
- **Parallax icons** - Icons scale and rotate on hover
- **Card tilt** - Subtle 3D tilt effect

### Portfolio Showcase
- **Featured ribbon** - Large card for primary investment (CryptoIQ)
- **Grid badges** - Compact cards for additional companies
- **Hover states** - Scale and glow effects

### Contact Card
- **Executive profile** - Aubrey Oakes with avatar
- **Copy email** - One-click email copy with feedback
- **Response SLA** - 48-hour response commitment

### Footer
- **Investor relations** - Legal links and disclosures
- **Professional layout** - Multi-column grid design
- **Compliance notice** - Securities disclaimer

## 🎯 Performance

- **LCP Target**: < 1.8s
- **CLS Target**: < 0.02
- **TTI Target**: < 2.0s
- **Lighthouse Score**: 95+ across all metrics

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎨 Design Patterns

### Glass Effect
```tsx
className="glass" // backdrop-blur-md bg-white/[0.03] border border-white/[0.08]
```

### Gradient Text
```tsx
className="gradient-text" // bg-cta-ribbon with text-transparent
```

### Elevation Shadows
```tsx
className="elevation-1" // Subtle inner glow
className="elevation-2" // Pronounced shadow
```

### Focus Rings (A11y)
```tsx
className="focus-ring" // Accessible focus indicators
```

## 🌐 Accessibility

- **AA Contrast** - Body text meets WCAG AA standards
- **AAA Contrast** - CTAs meet WCAG AAA standards
- **Reduced Motion** - Respects `prefers-reduced-motion`
- **Focus Indicators** - Visible focus rings on all interactive elements
- **Semantic HTML** - Proper heading hierarchy and landmarks

## 📁 Project Structure

```
oakes/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles with burgundy theme
├── components/
│   ├── Navigation.tsx      # Glass nav with animated underlines
│   ├── HeroSection.tsx     # Mouse-tracked spotlight hero
│   ├── ThesisGrid.tsx      # 2x2 investment focus grid
│   ├── ApproachPanel.tsx   # Glass panel with timeline
│   ├── PortfolioShowcase.tsx # Featured + grid portfolio
│   ├── ContactCard.tsx     # Executive contact card
│   └── Footer.tsx          # Professional footer
├── lib/
│   ├── motion.ts           # Framer Motion configurations
│   ├── format.ts           # Number/currency formatters
│   └── utils.ts            # Utility functions
├── content/
│   └── portfolio.json      # Portfolio data
└── tailwind.config.ts      # Burgundy theme configuration
```

## 🎬 Animation Blueprints

### Fade In Up
```tsx
variants={fadeInUp}
// opacity: 0→1, y: 20→0, 600ms
```

### Stagger Container
```tsx
variants={staggerContainer}
// 80ms delay between children
```

### Magnetic Button
```tsx
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.99 }}
```

### Card Tilt
```tsx
whileHover={{ rotateX: 1.5, rotateY: 1.5, scale: 1.01 }}
```

## 📧 Contact

**Aubrey Oakes**  
Managing Partner  
[aubrey@oakes.io](mailto:aubrey@oakes.io)

*We typically respond within 48 hours*

## 📄 License

© 2025 Oakes. All rights reserved.

This site does not constitute an offer to sell or a solicitation of an offer to buy any securities.
