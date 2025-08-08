import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

type Heading = {
  id: string;
  text: string;
  level: number;
};

type Frontmatter = {
  title: string;
  description?: string;
  toc?: boolean;
  [key: string]: unknown; // allow extra optional keys
};

function getMdxHeadings(markdown: string, enabled = true): Heading[] {
  if (!enabled) return [];

  const slugger = new GithubSlugger();

  return markdown
    .split("\n")
    .filter((line) => line.startsWith("##"))
    .map((line) => {
      const level = line.startsWith("###") ? 3 : 2;
      const text = line.replace(/^##+/, "").trim();
      const id = slugger.slug(text); // Matches rehype-slug exactly

      return { level, text, id };
    });
}

export async function getMdxParts({
  mdxFilePath,
  mdxFileName,
}: {
  mdxFilePath: string;
  mdxFileName: string;
}): Promise<{
  content: string;
  frontmatter: Frontmatter;
  headings: Heading[];
  filePath: string;
}> {
  const filePath = path.join(process.cwd(), mdxFilePath, `${mdxFileName}.mdx`);

  const raw = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(raw);

  const frontmatter = data as Frontmatter;

  const headings = getMdxHeadings(content, frontmatter?.toc !== false);

  return {
    filePath,
    content,
    frontmatter,
    headings,
  };
}

export async function getAllMdx({ mdxFilesPath }: { mdxFilesPath: string }) {
  const dir = path.join(process.cwd(), mdxFilesPath);
  const files = await fs.readdir(dir);

  return Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const fileName = file.replace(/\.mdx$/, "");
        const { frontmatter, headings } = await getMdxParts({
          mdxFilePath: mdxFilesPath,
          mdxFileName: fileName,
        });

        return {
          slug: fileName,
          frontmatter,
          headings,
        };
      }),
  );
}
