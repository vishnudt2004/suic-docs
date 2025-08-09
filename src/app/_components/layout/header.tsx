"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuHouse } from "react-icons/lu";

import { LogoMini } from "../ui/logo";
import Breadcrumbs from "../ui/breadcrumbs";
import ThemeButton from "../ui/theme-btn";

export default function Header() {
  const pathname = usePathname();
  const hiddenRoutes = ["/", "/docs"];

  return (
    <nav className="mb-5 flex max-w-screen items-center justify-between gap-2 overflow-x-auto border-b border-gray-100 bg-(--bg_color-g) pb-2 dark:border-neutral-800">
      {hiddenRoutes.includes(pathname) && (
        <Link href="/">
          <LogoMini />
        </Link>
      )}

      <Breadcrumbs
        config={{
          "": <LuHouse />,
        }}
        hiddenRoutes={hiddenRoutes}
      />

      <ThemeButton />
    </nav>
  );
}
