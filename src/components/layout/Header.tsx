"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Music2 } from "lucide-react";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/prestations/mariages", label: "Mariages" },
  { href: "/prestations/anniversaires", label: "Anniversaires" },
  { href: "/prestations/soirees", label: "Soirées" },
  { href: "/prestations/evenements-pro", label: "Événements Pro" },
  { href: "/galerie", label: "Galerie" },
  { href: "/avis", label: "Avis" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ferme le menu mobile lors du changement de page
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 transition-all duration-300 group-hover:bg-violet-500">
              <Music2 className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">
              Fred<span className="text-violet-400">Music</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-violet-400 bg-violet-500/10"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop + Toggle */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Button href="/contact" size="sm">
              Demander un devis
            </Button>
          </div>

          {/* Mobile: Toggle + Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <nav className="border-t border-white/10 bg-black/95 backdrop-blur-md px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                pathname === link.href
                  ? "text-violet-400 bg-violet-500/10"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Button href="/contact" size="sm" className="w-full">
              Demander un devis
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
