import path from "path";
import { IconType } from "react-icons";

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

export const componentsDocsRegistry: CompDocRegEntry[] = [];
