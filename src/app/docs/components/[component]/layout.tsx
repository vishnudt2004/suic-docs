import { ReactNode } from "react";

import DocLayout from "@/app/_components/layout/doc-layout";
import { getMdxParts } from "@/app/_lib/utils/mdx-utils";
import constants from "@/app/_lib/constants";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ component: string }>;
}) {
  const { component } = await params;

  const { headings } = await getMdxParts({
    mdxFilePath: constants.paths.docs.components,
    mdxFileName: component,
  });

  return <DocLayout headings={headings}>{children}</DocLayout>;
}
