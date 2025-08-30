import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./_styles/main.css";
import Header from "./_components/layout/header";
import Footer from "./_components/layout/footer";
import ThemeProvider from "./_contexts/theme-provider";
import { NotFoundProvider } from "./_contexts/not-found-ctx";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple UI Components",
  description: "Personal collection of components",
  icons: {
    icon: "/favicon.png",
  },
};

function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider>
      <NotFoundProvider>{children}</NotFoundProvider>
    </ThemeProvider>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={jakartaSans.variable} lang="en">
      <body className="mx-auto mt-2 flex min-h-[calc(100dvh-12px)] flex-col px-6 antialiased md:max-w-[1220px]">
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
