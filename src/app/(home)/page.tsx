import { BsArrowDownCircle } from "react-icons/bs";
import { FiPackage } from "react-icons/fi";
import { TbBrush } from "react-icons/tb";
import { GiSplitCross } from "react-icons/gi";

import Logo from "../_components/site/logo";
import { CtaBtns } from "../_components/site/cta-elements";
import MdxWrapper from "../_components/mdx/mdx-wrapper";
import { getMdxParts } from "../_lib/utils/mdx-utils";
import constants from "../_lib/constants";
import { cleanNewlines } from "../_lib/utils/classname-utils";

function Hero() {
  const style = cleanNewlines({
    container: `
      relative
      flex
      h-[90dvh]
      w-full
      flex-col
      items-center
      justify-center
      gap-5
      text-center
      md:h-[80dvh]
`,
    descr: `
      max-w-[900px]
      px-3
      text-lg
      md:text-2xl
      md:leading-10
      [&>*]:inline-flex
      [&>*]:items-center
      [&>*]:gap-2
      [&>*>*]:inline
      [&>*>*]:mr-2
  `,
  });

  return (
    <section className={style.container}>
      <Logo />

      <span className={style.descr}>
        “A handpicked collection of unique, reusable{" "}
        <span>
          components
          <FiPackage />
        </span>
        with{" "}
        <span>
          creative
          <TbBrush />
        </span>
        and{" "}
        <span>
          unconventional
          <GiSplitCross />
        </span>
        UI designs.”
      </span>

      <BsArrowDownCircle className="absolute bottom-5 size-7" />
    </section>
  );
}

async function About() {
  const { content: homeIntro } = await getMdxParts({
    mdxFilePath: constants.paths.docs.pages,
    mdxFileName: "home-intro",
  });

  return (
    <section className="flex min-h-dvh w-full flex-col items-center justify-center gap-15 py-10 sm:mt-20">
      <MdxWrapper className="max-w-[65ch]">{homeIntro}</MdxWrapper>
      <CtaBtns />
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
