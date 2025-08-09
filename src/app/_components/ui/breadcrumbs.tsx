"use client";

import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiChevronRight } from "react-icons/bi";

type BreadcrumbsProps = {
  separator?: ReactElement;
  config?: Record<string, ReactElement>;
  hiddenRoutes?: string[];
};

// Use in the highest root-level layout
export default function Breadcrumbs({
  separator = <BiChevronRight className="mt-0.5" />,
  config = {},
  hiddenRoutes = ["/"],
}: BreadcrumbsProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (hiddenRoutes?.includes(pathname)) return null;

  return (
    <nav className="flex max-w-full items-center overflow-x-auto text-sm text-nowrap text-gray-600 *:capitalize dark:text-gray-300">
      <Link href="/">{config[""] ?? "Home"}</Link>

      {segments.map((segment, i) => {
        const href = "/" + segments.slice(0, i + 1).join("/");
        const isLast = i === segments.length - 1;

        return (
          <span key={href} className="flex items-center">
            {separator}
            {isLast ? (
              <span className="flex cursor-default items-center gap-1 font-medium text-(--fg_color-g)">
                {config[segment] ?? decodeURIComponent(segment)}
              </span>
            ) : (
              <Link href={href} className="flex items-center gap-1">
                {config[segment] ?? decodeURIComponent(segment)}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
