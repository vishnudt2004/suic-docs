"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

import { LogoMini } from "@/app/_components/site/logo";
import { useMounted } from "@/app/_hooks/use-mounted";

function ThemeLoading() {
  return (
    <div className="grid min-h-[inherit] place-items-center overflow-hidden [&>*]:h-5 [&>*]:w-10 [&>*]:animate-pulse">
      <LogoMini />
    </div>
  );
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const mounted = useMounted();

  if (!mounted) return <ThemeLoading />;

  return (
    <NextThemeProvider attribute="class" enableSystem={false}>
      {children}
    </NextThemeProvider>
  );
}
