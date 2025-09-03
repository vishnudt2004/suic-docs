"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuLayoutList, LuX } from "react-icons/lu";

import TocNav from "../ui/toc-nav";
import Button from "../ui/button";
import { cleanNewlines } from "@/app/_lib/utils/classname-utils";

export default function DocLayout({
  children,
  tocs,
}: {
  children: ReactNode;
  tocs: { id: string; text: string; level: number }[];
}) {
  const [showToc, setShowToc] = useState(false);

  const handleSectionClick = () => setShowToc(false);

  const style = cleanNewlines({
    container: `
      flex
      min-h-screen
      flex-col
      gap-4
      min-[950px]:flex-row
    `,
    tocSidebar: {
      heading: "mb-4 text-lg font-bold truncate",
      desktop: `
        shrink-0
        top-10
        hidden
        h-[80dvh]
        w-[200px]
        lg:w-[230px]
        overflow-y-auto
        border-r
        border-gray-300
        py-4
        pr-2
        min-[950px]:sticky
        min-[950px]:block
        dark:border-neutral-700
      `,
      mobile: {
        container: `
          fixed
          inset-y-0
          right-0
          z-1
          m-auto
          h-dvh
          overflow-y-auto
          border-l
          border-gray-300
          bg-(--bg_color-g)
          p-6
          pr-15
          min-[950px]:hidden
          dark:border-neutral-600
          [&_:last-child]:ml-1
        `,
        btn: "fixed right-6 bottom-6 z-2 rounded-full p-4 min-[950px]:hidden",
      },
    },
    contentContainer: "flex-1 min-w-0 pt-2 pb-40 md:px-4",
  });

  return (
    <div className={style.container}>
      {/* Desktop TOC */}
      <aside className={style.tocSidebar.desktop}>
        <h2 className={style.tocSidebar.heading}>Table of Contents</h2>
        <TocNav headings={tocs} />
      </aside>

      {/* Tab/Mobile TOC toggle button */}
      <Button
        className={style.tocSidebar.mobile.btn}
        onClick={() => setShowToc((p) => !p)}
        aria-label="Open Table of Contents"
      >
        {!showToc ? <LuLayoutList /> : <LuX />}
      </Button>

      {/* Tab/Mobile TOC drawer */}
      <AnimatePresence>
        {showToc && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.8, 0.25, 1] }}
            className={style.tocSidebar.mobile.container}
          >
            <h2 className={style.tocSidebar.heading}>Table of Contents</h2>
            <TocNav headings={tocs} onClick={handleSectionClick} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className={style.contentContainer}>{children}</main>
    </div>
  );
}
