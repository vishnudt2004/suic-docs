import { BiGridAlt } from "react-icons/bi";

import { RefBtn } from "@/app/_components/ui/button";

export default function Layout({ children }: { children: React.ReactNode[] }) {
  return (
    <section className="w-full space-y-8">
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center gap-3 text-3xl font-bold">
          Components <BiGridAlt className="rotate-45 text-2xl" />
        </h1>
        <p className="max-w-prose text-gray-600 dark:text-gray-200">
          A collection of unique, accessible and reusable UI components. Browse
          the list below and click any component to view its documentation,
          examples, and installation guide.
        </p>

        <RefBtn href="/docs" target="_self">
          Core Documentation
        </RefBtn>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(144px,1fr))] justify-center gap-2.5 md:px-5">
        {children}
      </div>
    </section>
  );
}
