import Link from "next/link";
import { createElement } from "react";
import { MdOutlineBlock } from "react-icons/md";

import Button from "@/app/_components/ui/button";
import { getAllMdx } from "@/app/_lib/utils/mdx-utils";
import { iconsMap } from "@/app/_lib/components-maps";
import constants from "@/app/_lib/constants";

type ComponentCardProps = {
  icon?: React.ElementType;
  name: string;
  slug: string;
};

const ComponentCard = ({ icon, name, slug }: ComponentCardProps) => (
  <Button asChild className="aspect-square w-full flex-col overflow-hidden">
    <Link href={`/docs/components/${slug}`}>
      <span className="grid size-[90%] place-items-center">
        {icon ? (
          createElement(icon, { className: "size-[60%]" })
        ) : (
          <MdOutlineBlock className="size-[60%] opacity-60" />
        )}
      </span>
      <span className="mb-2 font-medium">{name}</span>
    </Link>
  </Button>
);

export default async function Components() {
  const mdxComponents = await getAllMdx({
    mdxFilesPath: constants.paths.docs.components,
  });

  const readyComponents = mdxComponents.filter(
    ({ frontmatter }) => !frontmatter.draft,
  );

  return readyComponents.map(({ frontmatter: { name }, slug }, i) => (
    <ComponentCard key={i} icon={iconsMap[slug]} name={name} slug={slug} />
  ));
}
