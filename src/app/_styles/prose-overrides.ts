import { cleanNewlines } from "../_lib/utils/classname-utils";

type ClassName = string & {};

const overrides: ClassName = `
 prose-pre:rounded-none

 [&_code:not(pre_*)]:before:content-none
 [&_code:not(pre_*)]:after:content-none
 [&_code:not(pre_*)]:bg-gray-300
 [&_code:not(pre_*)]:box-decoration-clone
 dark:[&_code:not(pre_*)]:bg-neutral-700
 [&_code:not(pre_*)]:px-1.5
 [&_code:not(pre_*)]:py-0.5
 [&_code:not(pre_*)]:rounded-md
 [&_code:not(pre_*)]:text-sm
 [&_code:not(pre_*)]:font-medium
`;

export const proseOverrides = cleanNewlines(overrides);
