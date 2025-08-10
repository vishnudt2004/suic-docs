import { ReactNode } from "react";
import { prepareClassName as cn } from "@/app/_lib/utils/classname-utils";

type CalloutType = "note" | "tip" | "warning" | "danger";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const styles: Record<CalloutType, string> = {
  note: "border-blue-400 bg-blue-50 text-blue-800 dark:border-blue-500 dark:bg-blue-900/20 dark:text-blue-200",
  tip: "border-green-400 bg-green-50 text-green-800 dark:border-green-500 dark:bg-green-900/20 dark:text-green-200",
  warning:
    "border-yellow-400 bg-yellow-50 text-yellow-800 dark:border-yellow-500 dark:bg-yellow-900/20 dark:text-yellow-200",
  danger:
    "border-red-400 bg-red-50 text-red-800 dark:border-red-500 dark:bg-red-900/20 dark:text-red-200",
};

export default function Callout({
  type = "note",
  title,
  children,
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-4 max-w-[65ch] border-l-4 p-4", // 65ch - prose default
        styles[type],
      )}
    >
      {title && <strong className="mb-1 block">{title}</strong>}
      <div className="[&>p:last-child]:mb-0">{children}</div>
    </div>
  );
}
