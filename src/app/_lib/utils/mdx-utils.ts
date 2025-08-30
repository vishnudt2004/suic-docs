import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

type Heading = {
  id: string;
  text: string;
  level: number;
};

type Frontmatter = {
  name: string;
  title: string;
  description?: string;
  draft: boolean;
  [key: string]: unknown; // allow extra optional keys
};

function getMdxTocs(markdown: string): Heading[] {
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
  tocs: Heading[];
  filePath: string;
}> {
  const filePath = path.join(process.cwd(), mdxFilePath, `${mdxFileName}.mdx`);

  try {
    const raw = await fs.readFile(filePath, "utf8");
    const { content, data } = matter(raw);

    const frontmatter = data as Frontmatter;

    const tocs = getMdxTocs(content);

    return {
      filePath,
      content,
      frontmatter,
      tocs,
    };
  } catch (error: unknown) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return notFound();
    }
    if (error instanceof Error) {
      console.error(`Error reading MDX file: ${filePath}`, error.message);
    } else {
      console.error(`Unknown error reading MDX file: ${filePath}`, error);
    }
    throw error;
  }
}

export async function getAllMdx({ mdxFilesPath }: { mdxFilesPath: string }) {
  const dir = path.join(process.cwd(), mdxFilesPath);

  try {
    const files = await fs.readdir(dir);

    return Promise.all(
      files
        .filter((file) => file.endsWith(".mdx"))
        .map(async (file) => {
          const fileName = file.replace(/\.mdx$/, "");
          const { frontmatter } = await getMdxParts({
            mdxFilePath: mdxFilesPath,
            mdxFileName: fileName,
          });

          return {
            slug: fileName,
            frontmatter,
          };
        }),
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error reading MDX directory: ${dir}`, error.message);
    } else {
      console.error(`Unknown error reading MDX directory: ${dir}`, error);
    }
    throw error;
  }
}
