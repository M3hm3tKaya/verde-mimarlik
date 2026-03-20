"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/projeler", label: "Projeler" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/surdurulebilirlik", label: "Sürdürülebilirlik" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-verde-bg/90 backdrop-blur-md border-b border-verde-light/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-light tracking-widest text-verde-dark">VERDE</span>
          <span className="text-xs tracking-[0.3em] text-verde-green mt-1">MİMARLIK</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm tracking-wide transition-colors duration-300 hover:text-verde-accent",
                pathname === link.href ? "text-verde-accent" : "text-verde-text"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 min-w-[44px] min-h-[44px] items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          <span
            className={clsx(
              "block w-6 h-0.5 bg-verde-dark transition-transform duration-300",
              mobileOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={clsx(
              "block w-6 h-0.5 bg-verde-dark transition-opacity duration-300",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={clsx(
              "block w-6 h-0.5 bg-verde-dark transition-transform duration-300",
              mobileOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "lg:hidden overflow-hidden transition-all duration-500 bg-verde-bg/95 backdrop-blur-md",
          mobileOpen ? "max-h-96 border-b border-verde-light/20" : "max-h-0"
        )}
      >
        <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={clsx(
                "text-sm tracking-wide transition-colors duration-300 py-2 min-h-[44px] flex items-center",
                pathname === link.href ? "text-verde-accent" : "text-verde-text"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
