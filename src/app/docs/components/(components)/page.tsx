import Link from "next/link";
import { createElement } from "react";
import { LuGalleryVerticalEnd } from "react-icons/lu";

type ComponentItem = {
  icon: React.ElementType;
  name: string;
  link: string;
};

const ComponentCard = ({
  icon,
  name,
  link,
}: {
  icon: React.ElementType;
  name: string;
  link: string;
}) => (
  <Link
    href={`/docs/components/${link}`}
    className="flex size-40 flex-col items-center bg-gray-200"
  >
    <span className="grid size-[90%] place-items-center">
      {createElement(icon, { className: "size-[60%]" })}
    </span>
    <span className="mb-2 font-medium">{name}</span>
  </Link>
);

const componentsList: ComponentItem[] = [
  {
    icon: LuGalleryVerticalEnd,
    name: "Carousel",
    link: "carousel",
  },
];

export default function Components() {
  return componentsList.map(({ icon, name, link }, ind) => (
    <ComponentCard key={ind} icon={icon} name={name} link={link} />
  ));
}
