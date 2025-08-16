import DocLayout from "@/app/_components/layout/doc-layout";
import MdxWrapper from "@/app/_components/mdx/mdx-wrapper";
import { CtaGradientLink } from "@/app/_components/site/cta-elements";
import { getMdxParts } from "@/app/_lib/utils/mdx-utils";
import constants from "@/app/_lib/constants";

export default async function Page() {
  const { tocs, content } = await getMdxParts({
    mdxFilePath: constants.paths.docs.pages,
    mdxFileName: "cli-docs",
  });

  return (
    <DocLayout tocs={tocs}>
      <MdxWrapper
        additionalComponents={{
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
