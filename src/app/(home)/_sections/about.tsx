import Link from "next/link";

import { BiArrowToRight } from "react-icons/bi";

export default function About() {
  return (
    <section className="bg-background text-foreground flex min-h-dvh w-full flex-col items-center justify-center gap-6 px-6 py-10">
      <ul className="text-muted-foreground max-w-xl list-inside list-disc space-y-4 text-base leading-relaxed">
        <li>
          This is not a standard UI library — it's a personal collection of
          unique, creative, and reusable components.
        </li>
        <li>
          Most components are built to be copy-paste ready, easily tweakable,
          and not tightly coupled to any framework or styling system.
        </li>
        <li>
          Each component lives in its own folder with source code, styles, and a
          short README.
        </li>
        <li>
          Styles are powered by a mix of local CSS and global design tokens (see{" "}
          <code>lib/styles/tokens.css</code>).
        </li>
        <li>
          Global styles and layout-specific UI (like this page) are scoped
          inside the <code>docs/</code> directory.
        </li>
        <li>
          This project is mainly for learning, inspiration, and reusability
          across my own projects — but feel free to explore and use anything you
          like!
        </li>
      </ul>
      <Link
        href="/components"
        className="flex items-center gap-1 rounded-md bg-gray-300 px-2 py-1"
      >
        View Components <BiArrowToRight className="h-5 w-5" />
      </Link>
    </section>
  );
}
