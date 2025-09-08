"use client";

import { useState } from "react";
import { LuCircleCheckBig, LuCopy } from "react-icons/lu";

import { copyToClipboard } from "@/app/_lib/utils/browser-utils";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="cursor-pointer rounded-full bg-[#f8f9fa] p-2 text-gray-700 transition-transform *:size-3.5 active:scale-50"
    >
      {copied ? <LuCircleCheckBig /> : <LuCopy />}
    </button>
  );
}
