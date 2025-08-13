"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuHouse } from "react-icons/lu";

import { LogoMini } from "../site/logo";
import Breadcrumbs from "../ui/breadcrumbs";
import ThemeButton from "../ui/theme-btn";
import { cleanNewlines } from "@/app/_lib/utils/classname-utils";

export default function Header() {
  const pathname = usePathname();
  const hiddenRoutes = ["/", "/docs"];

  const style = cleanNewlines(`
    mb-5
    flex
    max-w-screen
    items-center
    justify-between
    gap-2
    overflow-x-auto
    border-b
    border-gray-100
    bg-(--bg_color-g)
    p-0.5
    pb-2
    dark:border-neutral-800
`);

  return (
    <nav className={style}>
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
