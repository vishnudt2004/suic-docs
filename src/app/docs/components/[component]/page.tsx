import { notFound } from "next/navigation";

import DocLayout from "@/app/_components/layout/doc-layout";
import MdxWrapper from "@/app/_components/mdx/mdx-wrapper";
import { getMdxParts } from "@/app/_lib/utils/mdx-utils";
import constants from "@/app/_lib/constants";
import { componentsDocsRegistry } from "@/app/_docs/registries/components-docs.registry";

const {
  paths: {
    docs: { components: compsDocPath },
  },
} = constants;

export const dynamicParams = false;
export async function generateStaticParams() {
  return componentsDocsRegistry.map((doc) => ({
    component: doc.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: { component: string };
}) {
  const { component } = await params;

  const entry = componentsDocsRegistry.find((doc) => doc.slug === component);

  if (entry?.draft) return notFound();

  const { tocs, content } = await getMdxParts({
    mdxFilePath: compsDocPath,
    mdxFileName: component,
  });

  return (
    <DocLayout tocs={tocs}>
      <MdxWrapper>{content}</MdxWrapper>
    </DocLayout>
  );
}
