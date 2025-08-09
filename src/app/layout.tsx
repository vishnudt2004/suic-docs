import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./_styles/main.css";
import Header from "./_components/layout/header";
import ThemeProvider from "./_components/ui/theme-provider";

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
      <body className="mx-auto mt-2 mb-10 px-6 antialiased md:max-w-[90dvw]">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
