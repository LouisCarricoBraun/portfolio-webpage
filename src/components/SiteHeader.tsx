import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";
import { ThemeToggle, type Theme } from "./ThemeToggle";

type SiteHeaderProps = {
  theme: Theme;
  onThemeToggle: () => void;
};

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export function SiteHeader({ theme, onThemeToggle }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#projects" onClick={closeMenu} aria-label={`${profile.name}, home`}>
          <span className="brand-mark" aria-hidden="true">LC</span>
          <span className="brand-copy">
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>

        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s connect
          </a>
        </nav>

        <div className="header-actions">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
