import { createElement } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

import Logo from "@/app/_components/ui/logo";

const TechStackIcon = ({
  children,
  icon,
  color,
}: {
  children: React.ReactNode;
  icon: React.ElementType;
  color: string;
}) => (
  <span className="inline-flex items-center justify-center gap-2">
    {children}
    <span className="inline rounded-full bg-(--text_color-g) p-1">
      {createElement(icon, { style: { color } })}
    </span>
  </span>
);

export default function Hero() {
  return (
    <section className="relative mx-2 flex h-[80dvh] w-full flex-col items-center justify-center gap-5 text-center">
      <Logo />
      <span className="max-w-[900px] px-3 text-2xl leading-10">
        A collection of simple and reusable UI components built with{" "}
        <TechStackIcon color="#61DAFB" icon={RiReactjsLine}>
          React
        </TechStackIcon>{" "}
        +{" "}
        <TechStackIcon color="#06B6D4" icon={RiTailwindCssFill}>
          Tailwind
        </TechStackIcon>{" "}
        +{" "}
        <TechStackIcon color="#ffffff" icon={TbBrandFramerMotion}>
          Framer Motion
        </TechStackIcon>
        .
      </span>

      <BsArrowDownCircle className="absolute bottom-5 h-7 w-7" />
    </section>
  );
}
