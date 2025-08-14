"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

import { useMounted } from "@/app/_hooks/use-mounted";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <NextThemeProvider attribute="class" enableSystem={false}>
      {children}
    </NextThemeProvider>
  );
}
