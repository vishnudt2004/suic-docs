import { HTMLAttributes } from "react";
import { type MDXComponents } from "next-mdx-remote-client";
import { IconType } from "react-icons";

import Callout from "@/app/_components/ui/callout";
import { type RefBtnProps, RefBtn } from "@/app/_components/ui/button";
import CodeBlock from "@/app/_components/ui/code-block";
import {
  TabsBody,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { ExampleContainer, ExampleFallback, ExampleLoader } from "./shared";
import { getRawCode } from "@/app/_lib/utils/mdx-utils";
import {
  prepareClassName as cn,
  type ClassName,
} from "@/app/_lib/utils/classname-utils";
import { componentsDocsRegistry } from "@/app/_docs/registries/components-docs.registry";

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
};

function CompIcon({
  icon: Icon,
  className,
}: {
  icon?: IconType;
  className?: ClassName;
}) {
  if (!Icon) return "";
  return (
    <Icon
      className={cn(
        "mr-2 [:has(>&)]:inline-flex [:has(>&)]:items-center",
        className,
      )}
    />
  );
}

type CompRawCodeProps = {
  slug: string;
  example?: string;
};

async function CompRawCode({ slug, example }: CompRawCodeProps) {
  const entry = componentsDocsRegistry.find((c) => c.slug === slug);
  if (!entry) return; // always covered by generateStaticParams

  const examples = entry.doc.examples || {};
  const key = example ?? slug;
  const foundExample = examples[key];

  if (!foundExample)
    return <ExampleFallback type={example ? "not-found" : "not-available"} />;

  const filePath = examples[key].file;

  const rawCode = await getRawCode(filePath);

  return (
    <ExampleContainer title={foundExample.name}>
      <CodeBlock loader={<ExampleLoader />}>{rawCode}</CodeBlock>
    </ExampleContainer>
  );
}

export { CompIcon, CompRawCode };
export type { CompRawCodeProps };
