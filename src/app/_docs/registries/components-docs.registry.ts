import path from "path";
import { IconType } from "react-icons";
import { MdViewCarousel } from "react-icons/md";

import constants from "@/app/_lib/constants";

type CompDocRegEntry = {
  name: string;
  slug: string;
  description: string;
  draft?: boolean; // false by default
  doc: {
    icon: IconType;
    examples?: Record<
      string,
      {
        name: string;
        file: string; // absolute file path
        import: () => Promise<{ default: React.ComponentType<object> }>;
      }
    >;
  };
};

const examplesPath = constants.paths.docs.examples;

export const componentsDocsRegistry: CompDocRegEntry[] = [
  {
    name: "Carousel",
    slug: "carousel",
    description: "carousel component",
    doc: {
      icon: MdViewCarousel,
      examples: {
        "carousel-landscape": {
          name: "Carousel (Landscape variant)",
          file: path.join(examplesPath, "carousel/carousel-landscape.tsx"),
          import: () =>
            import("@/app/\_docs/examples/carousel/carousel-landscape"),
        },
        "carousel-portrait": {
          name: "Carousel (Portrait variant)",
          file: path.join(examplesPath, "carousel/carousel-portrait.tsx"),
          import: () =>
            import("@/app/\_docs/examples/carousel/carousel-portrait"),
        },
      },
    },
  },
];
