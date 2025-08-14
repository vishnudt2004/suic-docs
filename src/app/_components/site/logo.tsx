import { FaCircleNotch } from "react-icons/fa6";

import {
  type ClassName,
  cleanNewlines,
  prepareClassName as cn,
} from "@/app/_lib/utils/classname-utils";

export function LogoMini({ className }: { className?: ClassName }) {
  return (
    <div
      className={cn(
        "flex h-8 w-16 [&>*]:flex [&>*]:h-full [&>*]:w-1/2 [&>*]:items-center [&>*]:justify-center",
        className,
      )}
    >
      <div className="bg-(--fg_color-g)" />
      <div className="bg-(--accent_color-g)">
        <FaCircleNotch className="-rotate-45 text-(--fg_color-g) size-[50%]" />
      </div>
    </div>
  );
}

export default function Logo() {
  const child2Style = cleanNewlines(`
    flex
    items-baseline
    justify-center
    bg-(--accent_color-g)
    px-2
    py-1
    sm:px-3
    sm:py-2
    [&>*]:m-1
    [&>*]:text-2xl
    [&>*]:sm:text-4xl
`);

  return (
    <div className="flex text-5xl font-light max-[924px]:flex-col sm:text-7xl">
      <span className="bg-(--fg_color-g) px-2 py-1 text-(--bg_color-g) sm:px-3 sm:py-2">
        Simple&nbsp;UI
      </span>
      <span className={child2Style}>
        C
        <FaCircleNotch className="rotate-45" />
        mp
        <FaCircleNotch className="-rotate-45" />
        nents
      </span>
    </div>
  );
}
