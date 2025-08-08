"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="fixed top-5 right-5 z-(--theme-btn-z) cursor-pointer rounded-full bg-(--accent_color-g) p-3 text-sm text-white transition-opacity active:opacity-50"
      onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}
