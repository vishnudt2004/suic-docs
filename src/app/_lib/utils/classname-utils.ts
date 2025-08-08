import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type StyleObject = string | StyleObjectMap;
type StyleObjectMap = {
  [key: string]: StyleObject;
};

export function cleanNewlines<T extends StyleObject>(styleObj: T): T {
  if (typeof styleObj === "string") {
    return styleObj.split(/\s+/).join(" ").trim() as T;
  }

  if (typeof styleObj === "object" && styleObj !== null) {
    const cleaned: Record<string, StyleObject> = {};
    for (const key in styleObj) {
      cleaned[key] = cleanNewlines(styleObj[key]);
    }
    return cleaned as T;
  }

  return styleObj;
}

export function prepareClassName(...inputs: ClassValue[]) {
  return twMerge(
    clsx(...inputs)
      .split(/\s+/)
      .join(" ")
      .trim(),
  );
}
