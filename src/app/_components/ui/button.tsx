import { Slot, type AsChildPropsType } from "./slot";
import { prepareClassName } from "@/app/_lib/utils/classname-utils";

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

  return <Comp {...props} className={prepareClassName(dfltStyle, className)} />;
}
