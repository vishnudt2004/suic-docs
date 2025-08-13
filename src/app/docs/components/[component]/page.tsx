import { notFound } from "next/navigation";

import DocLayout from "@/app/_components/layout/doc-layout";
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

  const { tocs, content, frontmatter } = await getMdxParts({
    mdxFilePath: docPath,
    mdxFileName: component,
  });

  if (frontmatter.draft) notFound();

  return (
    <DocLayout tocs={tocs}>
      <MdxWrapper>{content}</MdxWrapper>
    </DocLayout>
  );
}
