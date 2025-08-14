"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

type Heading = {
  id: string;
  text: string;
  level: number;
};

export default function TocNav({
  headings,
  onClick,
}: {
  headings: Heading[];
  onClick?: () => void;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "0px 0px -80% 0px",
        threshold: [0.1, 0.5, 1.0],
      },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav className="space-y-2">
      {headings.map(({ id, text, level }) => (
        <a
          key={id}
          href={`#${id}`}
          className={clsx(
            "block transition hover:font-semibold",
            level === 2 ? "ml-0" : "ml-1.5",
            activeId === id
              ? "font-semibold text-black dark:text-white"
              : "text-gray-700 dark:text-gray-300",
          )}
          onClick={onClick}
        >
          {text}
        </a>
      ))}
    </nav>
  );
}
