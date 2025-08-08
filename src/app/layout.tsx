import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./_styles/main.css";
import ThemeButton from "./_components/ui/theme-btn";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple UI Components",
  description: "Personal collection of components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={jakartaSans.variable} lang="en" suppressHydrationWarning>
      <body className="mx-auto my-10 px-6 py-2 antialiased md:max-w-[90dvw] lg:py-3">
        <ThemeProvider attribute="class" enableSystem={false}>
          {children}
          <ThemeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
