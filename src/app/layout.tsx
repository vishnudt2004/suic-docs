import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./_styles/main.css";

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
    <html className={jakartaSans.variable} lang="en">
      <body className="mx-auto my-10 p-2 antialiased md:max-w-[90dvw] lg:p-3">
        {children}
      </body>
    </html>
  );
}
