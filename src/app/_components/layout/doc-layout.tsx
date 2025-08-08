"use client";

import { ReactNode, useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "motion/react";
import { LuLayoutList, LuX } from "react-icons/lu";

import TocNav from "../ui/toc-nav";

export default function DocLayout({
  children,
  headings,
}: {
  children: ReactNode;
  headings: { id: string; text: string; level: number }[];
}) {
  const [showToc, setShowToc] = useState(false);

  const handleSectionClick = () => setShowToc(false);

  const docContainerStyle = "[&_:is(h2,h3,h4)]:scroll-m-20";

  return (
    <div className="flex min-h-screen flex-col gap-4 lg:flex-row">
      {/* Desktop TOC */}
      <aside className="top-10 hidden h-[80dvh] w-64 overflow-y-auto border-r border-gray-300 py-4 lg:sticky lg:block [&_:last-child]:ml-1">
        <h2 className="mb-4 text-lg font-bold">Table of Contents</h2>
        <TocNav headings={headings} />
      </aside>

      {/* Mobile TOC toggle button */}
      <button
        className="fixed right-6 bottom-6 z-50 rounded-full bg-black p-4 text-white lg:hidden"
        onClick={() => setShowToc((p) => !p)}
        aria-label="Open Table of Contents"
      >
        {!showToc ? <LuLayoutList /> : <LuX />}
      </button>

      {/* Mobile TOC drawer */}
      <AnimatePresence>
        {showToc && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.8, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-white p-6 lg:hidden [&_:last-child]:ml-1"
          >
            <h2 className="mb-4 text-lg font-bold">Table of Contents</h2>
            <TocNav headings={headings} onClick={handleSectionClick} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className={clsx("flex-1 px-4 pt-2 pb-40", docContainerStyle)}>
        {children}
      </main>
    </div>
  );
}
