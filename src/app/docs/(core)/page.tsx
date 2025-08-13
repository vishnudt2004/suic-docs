import DocLayout from "@/app/_components/layout/doc-layout";
import MdxWrapper from "@/app/_components/mdx/mdx-wrapper";
import {
  CtaBtnMain,
  CtaGradientLink,
} from "@/app/_components/site/cta-elements";
import { getMdxParts } from "@/app/_lib/utils/mdx-utils";
import constants from "@/app/_lib/constants";

export default async function Page() {
  const { tocs, content } = await getMdxParts({
    mdxFilePath: constants.paths.docs.pages,
    mdxFileName: "docs-core",
  });

  return (
    <DocLayout tocs={tocs}>
      <MdxWrapper
        additionalComponents={{
          CtaBtn: () => (
            <div className="not-prose my-10 text-center text-sm">
              <CtaBtnMain variant={1} />
            </div>
          ),
          CtaLink: () => (
            <div className="mt-20 text-center">
              <CtaGradientLink />
            </div>
          ),
        }}
      >
        {content}
      </MdxWrapper>
    </DocLayout>
  );
}
