import React from "react";

import DocLayout from "@/app/_components/layout/doc-layout";
import { getMdxParts } from "@/app/_lib/utils/mdx-utils";
import constants from "@/app/_lib/constants";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { headings } = await getMdxParts({
    mdxFilePath: constants.paths.docs.pages,
    mdxFileName: "docs-core",
  });

  return <DocLayout headings={headings}>{children}</DocLayout>;
}
