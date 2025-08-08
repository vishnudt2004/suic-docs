import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";

export default function MdxWrapper({
  children,
  frontmatter,
}: {
  children: string;
  frontmatter?: { title: string };
}) {
  return (
    <div className="prose dark:prose-invert h-full w-full">
      {frontmatter && (
        <h1 className="mb-10 text-3xl font-bold">{frontmatter.title}</h1>
      )}
      <MDXRemote
        source={children}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight, rehypeSlug],
          },
        }}
      />
    </div>
  );
}
