import { Slot, type AsChildPropsType } from "./slot";
import cn from "@/app/_lib/utils/cn";

type ButtonProps = AsChildPropsType<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  style?: React.CSSProperties;
  className?: string;
};

export default function Button({ asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const dfltStyle = `
     flex
     items-center
     gap-3
     bg-gray-200
     px-3
     py-1
     text-nowrap
     transition
     hover:bg-gray-700
     hover:text-white
    `;

  return <Comp {...props} className={cn(dfltStyle, className)} />;
}
