import Link from "next/link";
import { BiBookContent, BiGridAlt } from "react-icons/bi";
import { HiOutlineArrowRight } from "react-icons/hi";

import Button from "../ui/button";
import { prepareClassName as cn } from "@/app/_lib/utils/classname-utils";

type CtaElementProps = {
  className?: string;
  variant?: number;
};

export function CtaBtns() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button asChild>
        <Link href="/docs">
          Read Documentation <BiBookContent />
        </Link>
      </Button>
      <CtaBtnMain />
    </div>
  );
}

export function CtaBtnMain({ className, variant = 0 }: CtaElementProps) {
  const preVariants = [
    "[&,.dark_&]:bg-[color-mix(in_srgb,var(--accent_color-g)_60%,white_40%)] [&,.dark_&]:text-black [&,.dark_&]:hover:bg-(--accent_color-g) [&,.dark_&]:hover:text-white",
    "rounded-lg bg-gradient-to-r from-green-400 via-blue-400 to-teal-500 px-4 py-2 [&,.dark_&]:text-black [&,.dark_&]:hover:text-white font-medium",
  ];

  return (
    <Button asChild className={cn(preVariants[variant], className)}>
      <Link href="/docs/components">
        Browse Components <BiGridAlt className="rotate-45" />
      </Link>
    </Button>
  );
}

export function CtaGradientLink({ className, variant = 0 }: CtaElementProps) {
  const preVariants = [
    "from-green-500 via-blue-400 to-teal-500 decoration-blue-500 [&>*]:text-teal-500",
    "from-pink-500 via-purple-500 to-indigo-500 decoration-purple-500 [&>*]:text-indigo-500",
  ];

  const style = `
   text-nowrap
   inline-flex
   items-center
   gap-1
   bg-clip-text
   bg-gradient-to-r
   font-medium
   text-transparent
   tracking-wide
   underline-offset-4
   ${preVariants[variant]}
  `;

  return (
    <Link href="/docs/components" className={cn(style, className)}>
      Start browsing components <HiOutlineArrowRight />
    </Link>
  );
}
