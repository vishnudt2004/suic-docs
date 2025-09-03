import fs from "fs/promises";
import path from "path";
import GithubSlugger from "github-slugger";

type Heading = {
  id: string;
  text: string;
  level: number;
};

// type Frontmatter = {
//   [key: string]: unknown;
// };

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

async function getMdxParts({
  mdxFilePath,
  mdxFileName,
}: {
  mdxFilePath: string;
  mdxFileName: string;
}): Promise<{
  content: string;
  tocs: Heading[];
  filePath: string;
}> {
  const filePath = path.join(process.cwd(), mdxFilePath, `${mdxFileName}.mdx`);

  try {
    const content = await fs.readFile(filePath, "utf8");

    const tocs = getMdxTocs(content);

    return {
      filePath,
      content,
      tocs,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error reading MDX file: ${filePath}`, error.message);
    } else {
      console.error(`Unknown error reading MDX file: ${filePath}`, error);
    }
    throw error;
  }
}

async function getAllMdx({ mdxFilesPath }: { mdxFilesPath: string }) {
  const dir = path.join(process.cwd(), mdxFilesPath);

  try {
    const files = await fs.readdir(dir);

    return Promise.all(
      files
        .filter((file) => file.endsWith(".mdx"))
        .map(async (file) => {
          const fileName = file.replace(/\.mdx$/, "");

          return {
            slug: fileName,
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

async function getRawCode(file: string) {
  try {
    // normalize @/ path alias
    const normalized = file.replace(/^@\//, "");
    const filePath = path.join(process.cwd(), normalized);

    const code = await fs.readFile(filePath, "utf-8");
    return code;
  } catch (err) {
    console.error(`Failed to load raw code for: ${file}`, err);
    throw err;
  }
}

export { getMdxParts, getAllMdx, getRawCode };
