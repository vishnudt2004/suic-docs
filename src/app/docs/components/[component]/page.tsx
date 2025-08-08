import { notFound } from "next/navigation";

import MdxWrapper from "@/app/_components/mdx/mdx-wrapper";
import { getAllMdx, getMdxParts } from "@/app/_lib/utils/mdx-utils";
import constants from "@/app/_lib/constants";

const {
  paths: {
    docs: { components: docPath },
  },
} = constants;

export async function generateStaticParams() {
  const mdxList = await getAllMdx({ mdxFilesPath: docPath });

  return mdxList.map((doc) => ({
    component: doc.slug,
  }));
}

export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: { component: string };
}) {
  const { component } = await params;

  const { content, frontmatter } = await getMdxParts({
    mdxFilePath: docPath,
    mdxFileName: component,
  });

  if (frontmatter.draft) notFound();

  return <MdxWrapper frontmatter={frontmatter}>{content}</MdxWrapper>;
}
