import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

import { Slot, type AsChildPropsType } from "./slot";
import { prepareClassName as cn } from "@/app/_lib/utils/classname-utils";
import { CgArrowTopRight } from "react-icons/cg";

type ButtonProps = AsChildPropsType<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  style?: React.CSSProperties;
  className?: string;
};

export default function Button({ asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const dfltStyle = `
    inline-flex
    w-fit
    items-center
    gap-3
    bg-gray-200
    px-3
    py-1
    text-nowrap
    transition
    hover:bg-neutral-700
    hover:text-white
    dark:bg-neutral-700
    dark:hover:bg-gray-100
    dark:hover:text-black
`;

  return <Comp {...props} className={cn(dfltStyle, className)} />;
}

export function RefBtn({
  children = "Reference",
  href,
  className,
}: { href: string } & ButtonProps) {
  return (
    <Button
      asChild
      className={cn("gap-1 rounded-full px-2 py-0.5 text-xs", className)}
    >
      <Link href={href} target="_black">
        {children} <CgArrowTopRight />
      </Link>
    </Button>
  );
}
