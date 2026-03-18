# System Patterns - Verde Mimarlık

## Mimari Kararlar
- App Router (Next.js 16) ile sayfa bazlı routing
- Server Components varsayılan, client components sadece interaktif parçalar
- Hardcoded data (projects.ts, services.ts) ile statik içerik
- generateStaticParams ile dinamik route'lar (proje detay)

## Bileşen Kalıpları
- FadeIn: IntersectionObserver tabanlı fade-in animasyon wrapper
- SectionHeading: Tutarlı başlık bileşeni (label + title + description)
- ProjectCard: Tekrar kullanılabilir proje kartı
- SmoothScroll: Lenis ile sayfa geneli smooth scroll

## Tasarım Kalıpları
- Navbar: Fixed, blur backdrop, yeşil accent
- Footer: Koyu yeşil (#1A3A2A) background
- Tüm başlıklar font-light (300)
- Animasyonlar: Sadece fade-in 0.8s
- Bol boşluk: py-24 lg:py-32 section padding
