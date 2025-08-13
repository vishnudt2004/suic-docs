import { ComponentType, HTMLAttributes } from "react";
import type { MDXComponents } from "next-mdx-remote-client";
import { IconType } from "react-icons";
import { ClassValue } from "clsx";

import Callout from "@/app/_components/ui/callout";
import { type RefBtnProps, RefBtn } from "@/app/_components/ui/button";
import {
  TabsBody,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { componentExamplesMap, iconsMap } from "@/app/_lib/components-maps";
import { prepareClassName as cn } from "@/app/_lib/utils/classname-utils";

type ComponentMapType = { componentName: string; className?: ClassValue[] };

function Icon({ componentName, className }: ComponentMapType) {
  const Icon: IconType = iconsMap[componentName];
  return (
    <Icon
      className={cn(
        "mr-2 [:has(>&)]:inline-flex [:has(>&)]:items-center",
        className,
      )}
    />
  );
}

function ExamplePreview({ componentName }: ComponentMapType) {
  const ExampleComponent: ComponentType = componentExamplesMap[componentName];
  if (!ExampleComponent) return <div>There are no examples available.</div>;
  return <ExampleComponent />;
}

export const mdxComponents: MDXComponents = {
  // Override defaults
  table: (props: HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto">
      <table {...props} />
    </div>
  ),
  pre: (props: HTMLAttributes<HTMLPreElement>) => (
    <div className="flex flex-col">
      <span className="lang not-prose" />
      <pre {...props} />
    </div>
  ),
  // Custom components
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsBody,
  TabsContent,
  RefBtn: (props: RefBtnProps) => (
    <RefBtn
      {...props}
      className={cn("not-prose text-(--fg_color-g)", props?.className)}
    />
  ),
  Callout,
  // Helper components for mappings
  Icon,
  ExamplePreview,
};
