import MdxWrapper from "@/app/_components/mdx/mdx-wrapper";
import { getMdxParts } from "@/app/_lib/utils/mdx-utils";
import constants from "@/app/_lib/constants";

export default async function Page() {
  const { content, frontmatter } = await getMdxParts({
    mdxFilePath: constants.paths.docs.pages,
    mdxFileName: "docs-core",
  });

  return <MdxWrapper frontmatter={frontmatter}>{content}</MdxWrapper>;
}
