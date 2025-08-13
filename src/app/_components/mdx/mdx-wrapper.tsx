import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/atom-one-dark.css";

import { mdxComponents } from "./mdx-components";
import { proseOverrides } from "@/app/_styles/prose-overrides";
import { prepareClassName as cn } from "@/app/_lib/utils/classname-utils";

export default function MdxWrapper({
  children,
  className,
  additionalComponents = {},
}: {
  children: string;
  className?: string;
  additionalComponents?: Record<string, React.ComponentType>;
}) {
  return (
    <div
      className={cn(
        "prose prose-zinc dark:prose-invert",
        proseOverrides,
        className,
      )}
    >
      <MDXRemote
        source={children}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight, rehypeSlug],
          },
        }}
        components={{ ...mdxComponents, ...additionalComponents }}
      />
    </div>
  );
}
