import React from "react";

import cn from "@/app/_lib/utils/cn";

export type AsChildPropsType<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | { asChild: true; children: React.ReactNode };

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Slot: React.FC<SlotProps> = ({ children, ...props }) => {
  if (React.isValidElement(children)) {
    const childWithProps = children as React.ReactElement<{
      style?: React.CSSProperties;
      className?: string;
    }>;

    return React.cloneElement(childWithProps, {
      ...props,
      ...childWithProps.props,
      style: {
        ...props.style,
        ...childWithProps.props.style,
      },
      className: cn(props.className, childWithProps.props.className),
    });
  }

  if (React.Children.count(children) > 1) {
    React.Children.only(null);
  }

  return null;
};
