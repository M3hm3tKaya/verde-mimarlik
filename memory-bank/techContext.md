# Tech Context - Verde Mimarlık

## Framework & Tools
- Next.js 16 (App Router, src directory)
- TypeScript strict mode
- Tailwind CSS 4 (@theme inline)
- GSAP + @gsap/react (animasyon)
- Framer Motion (geçiş animasyonları)
- Lenis (smooth scroll)
- clsx (conditional classes)

## Renk Sistemi (Tailwind @theme inline)
- verde-bg: #FAFDF7
- verde-dark: #2D6A4F
- verde-green: #40916C
- verde-light: #8FBC8F
- verde-accent: #52B788
- verde-footer: #1A3A2A
- verde-text: #2C2C2C
- verde-muted: #6B7B6E

## Font
- DM Sans (Google Fonts via next/font)
- Weight 300 (light) for headings
- Weight 400 (regular) for body

## Proje Yapısı
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── projeler/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── hizmetler/page.tsx
│   ├── hakkimizda/page.tsx
│   ├── surdurulebilirlik/page.tsx
│   └── iletisim/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── FadeIn.tsx
│   ├── SmoothScroll.tsx
│   ├── ProjectCard.tsx
│   └── SectionHeading.tsx
└── data/
    ├── projects.ts
    └── services.ts
```
