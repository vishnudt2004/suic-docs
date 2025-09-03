"use client";

import dynamic from "next/dynamic";

import { ExampleContainer, ExampleFallback, ExampleLoader } from "./shared";
import { componentsDocsRegistry } from "@/app/_docs/registries/components-docs.registry";

type CompPreviewProps = {
  slug: string;
  example?: string;
};

function CompPreview({ slug, example }: CompPreviewProps) {
  const entry = componentsDocsRegistry.find((c) => c.slug === slug);
  if (!entry) return; // always covered by generateStaticParams

  const examples = entry.doc.examples || {};
  const key = example ?? slug;
  const foundExample = examples[key];

  if (!foundExample)
    return <ExampleFallback type={example ? "not-found" : "not-available"} />;

  const Example = dynamic(foundExample.import, {
    ssr: false,
    loading: () => <ExampleLoader />,
  });

  return (
    <ExampleContainer title={foundExample.name}>
      <Example />
    </ExampleContainer>
  );
}

export { CompPreview };
export type { CompPreviewProps };
