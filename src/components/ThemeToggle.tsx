import { Moon, Sun } from "lucide-react";

export type Theme = "light" | "dark";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      className="icon-button theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
