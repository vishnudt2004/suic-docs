import { notFound } from "next/navigation";

import DocLayout from "@/app/_components/layout/doc-layout";
import MdxWrapper from "@/app/_components/mdx/mdx-wrapper";
import {
  CompIcon,
  CompRawCode,
  type CompRawCodeProps,
} from "@/app/_components/mdx/mdx-components";
import {
  CompPreview,
  type CompPreviewProps,
} from "@/app/_components/mdx/mdx-components.client";
import { getMdxParts } from "@/app/_lib/utils/mdx-utils";
import constants from "@/app/_lib/constants";
import { componentsDocsRegistry } from "@/app/_docs/registries/components-docs.registry";
import { type ClassName } from "@/app/_lib/utils/classname-utils";

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
      <MdxWrapper
        additionalComponents={{
          CompIcon: ({ className }: { className: ClassName }) => (
            <CompIcon icon={entry?.doc?.icon} className={className} />
          ),
          CompPreview: (props: Pick<CompPreviewProps, "example">) => (
            <CompPreview slug={entry?.slug || ""} {...props} />
          ),
          CompRawCode: (props: Pick<CompRawCodeProps, "example">) => (
            <CompRawCode slug={entry?.slug || ""} {...props} />
          ),
        }}
      >
        {content}
      </MdxWrapper>
    </DocLayout>
  );
}
