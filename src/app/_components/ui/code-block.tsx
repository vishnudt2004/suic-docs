"use client";

import { useEffect, useRef } from "react";
import hljs from "highlight.js";

import { useMounted } from "@/app/_hooks/use-mounted";

export default function CodeBlock({
  children,
  language = "tsx",
  loader = <>Loading...</>,
}: {
  children: string;
  language?: string;
  loader?: React.ReactNode;
}) {
  const codeRef = useRef<HTMLElement>(null);
  const mounted = useMounted();

  useEffect(() => {
    if (mounted && codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [mounted, children, language]);

  if (!mounted) {
    return loader;
  }

  return (
    <div className="flex flex-col">
      <span className="lang not-prose" />
      <pre>
        <code ref={codeRef} className={`language-${language}`}>
          {children}
        </code>
      </pre>
    </div>
  );
}
