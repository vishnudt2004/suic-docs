import Link from "next/link";
import { createElement } from "react";
import { MdOutlineBlock } from "react-icons/md";

import Button from "@/app/_components/ui/button";
import { componentsDocsRegistry } from "@/app/_docs/registries/components-docs.registry";

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
  const readyComponents = componentsDocsRegistry.filter((c) => !c.draft);

  return readyComponents.map(({ name, slug, doc: { icon } }, i) => (
    <ComponentCard key={i} icon={icon} name={name} slug={slug} />
  ));
}
