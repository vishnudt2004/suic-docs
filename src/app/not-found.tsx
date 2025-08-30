"use client";

import { useEffect } from "react";
import { useNotFound } from "./_contexts/not-found-ctx";

export default function NotFound() {
  const { setNotFound } = useNotFound();

  useEffect(() => {
    setNotFound(true);
    return () => setNotFound(false);
  }, [setNotFound]);

  return (
    <div className="flex h-[calc(100dvh-160px)] items-center justify-center gap-3 font-medium">
      <span>404</span> | <span>Page Not Found</span>
    </div>
  );
}
