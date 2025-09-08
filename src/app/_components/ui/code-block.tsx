"use client";

import { useEffect, useRef } from "react";
import hljs from "highlight.js";

import { useMounted } from "@/app/_hooks/use-mounted";
import CopyButton from "./copy-btn";

export default function CodeBlock({
  children,
  language = "tsx",
  loader = <>Loading...</>,
  copyable = true,
}: {
  children: string;
  language?: string;
  loader?: React.ReactNode;
  copyable?: boolean;
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
    <div className="relative flex flex-col">
      <span className="lang not-prose" />
      <pre>
        <code ref={codeRef} className={`language-${language}`}>
          {children}
        </code>
      </pre>

      {copyable && (
        <div className="absolute top-8 right-2">
          <CopyButton text={children} />
        </div>
      )}
    </div>
  );
}
