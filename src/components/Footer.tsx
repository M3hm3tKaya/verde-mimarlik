import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-verde-footer text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-light tracking-widest text-white">VERDE</span>
              <span className="text-xs tracking-[0.3em] text-verde-accent mt-1">MİMARLIK</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Sürdürülebilir mimarlık ve tasarım çözümleri ile geleceğin yapılarını bugünden inşa ediyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-widest text-verde-accent mb-4 font-light">SAYFALAR</h4>
            <ul className="space-y-2">
              {[
                { href: "/projeler", label: "Projeler" },
                { href: "/hizmetler", label: "Hizmetler" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/surdurulebilirlik", label: "Sürdürülebilirlik" },
                { href: "/iletisim", label: "İletişim" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-verde-accent transition-colors duration-300 py-1 inline-block min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm tracking-widest text-verde-accent mb-4 font-light">HİZMETLER</h4>
            <ul className="space-y-2">
              {["Mimari Tasarım", "İç Mekan Tasarımı", "Peyzaj Tasarımı", "Sürdürülebilirlik Danışmanlığı"].map(
                (s) => (
                  <li key={s} className="text-sm text-white/60">
                    {s}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-widest text-verde-accent mb-4 font-light">İLETİŞİM</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Levent, İstanbul</li>
              <li>+90 212 555 0808</li>
              <li>info@verdemimarlik.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Verde Mimarlık. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-white/40">
            Tasarım & Geliştirme:{" "}
            <a
              href="https://mhtbilisim.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-verde-accent hover:text-white transition-colors"
            >
              MHT Bilişim
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
