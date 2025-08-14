import type { AnchorHTMLAttributes } from "react";
import Link, { type LinkProps } from "next/link";
import { CgArrowTopRight } from "react-icons/cg";

import { Slot, type AsChildPropsType } from "./slot";
import {
  type ClassName,
  prepareClassName as cn,
} from "@/app/_lib/utils/classname-utils";

export type ButtonProps = AsChildPropsType<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  style?: React.CSSProperties;
  className?: string;
};

export default function Button({ asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const dfltStyle: ClassName = `
    inline-flex
    w-fit
    items-center
    gap-3
    bg-gray-200
    px-3
    py-1
    text-nowrap
    transition
    cursor-pointer
    hover:bg-neutral-700
    hover:text-white
    dark:bg-neutral-700
    dark:hover:bg-gray-100
    dark:hover:text-black
`;

  return <Comp {...props} className={cn(dfltStyle, className)} />;
}

export type RefBtnProps = LinkProps &
  ButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { icon?: React.ReactNode };

export function RefBtn({
  children = "Reference",
  href,
  icon = <CgArrowTopRight />,
  className,
  target = "_black",
  ...rest
}: RefBtnProps) {
  return (
    <Button
      asChild
      className={cn("gap-1 rounded-full px-2 py-0.5 text-xs", className)}
    >
      <Link href={href} target={target} {...rest}>
        {children} {icon}
      </Link>
    </Button>
  );
}
