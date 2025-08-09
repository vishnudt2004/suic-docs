"use client";

import { useTheme } from "next-themes";
import { ClassNameValue, twMerge } from "tailwind-merge";
import { FaMoon, FaSun } from "react-icons/fa6";

import { useMounted } from "@/app/_hooks/use-mounted";

export default function ThemeButton({
  className,
}: {
  className?: ClassNameValue;
}) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <button
      className={twMerge(
        "cursor-pointer rounded-full bg-(--accent_color-g) p-3 text-sm text-white transition-opacity active:opacity-50",
        className,
      )}
      onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}
