import { ClassName, cleanNewlines } from "../_lib/utils/classname-utils";

const overrides: ClassName = `
 max-w-none
 overflow-x-hidden

 prose-pre:rounded-none

 [&_pre_code]:pt-1!
 [&_pre:has(code)]:my-0
 [&_pre:has(code)]:p-0!

 [&_:has(>pre_code,>.lang)]:overflow-hidden
 [&_:has(>pre_code,>.lang)]:rounded-none
 [&_:has(>pre_code,>.lang)]:bg-[#282c34]

 [&_:has(>pre_code)>.lang]:mx-2
 [&_:has(>pre_code)>.lang]:mb-2
 [&_:has(>pre_code)>.lang]:pt-0.5
 [&_:has(>pre_code)>.lang]:pb-1
 [&_:has(>pre_code)>.lang]:font-(family-name:--font_family-g)
 [&_:has(>pre_code)>.lang]:text-[12px]
 [&_:has(>pre_code)>.lang]:text-right
 [&_:has(>pre_code)>.lang]:tracking-wider
 [&_:has(>pre_code)>.lang]:text-gray-300
 [&_:has(>pre_code)>.lang]:border-b
 [&_:has(>pre_code)>.lang]:border-gray-700

 [&_:has(>pre_code.language-bash)>.lang]:before:content-['Bash']
 [&_:has(>pre_code.language-css)>.lang]:before:content-['CSS']
 [&_:has(>pre_code.language-html)>.lang]:before:content-['HTML']
 [&_:has(>pre_code.language-js)>.lang]:before:content-['JS']
 [&_:has(>pre_code.language-json)>.lang]:before:content-['JSON']
 [&_:has(>pre_code.language-jsx)>.lang]:before:content-['JSX']
 [&_:has(>pre_code.language-ts)>.lang]:before:content-['TS']
 [&_:has(>pre_code.language-tsx)>.lang]:before:content-['TSX']
 [&_:has(>pre_code.language-shell)>.lang]:before:content-['Shell']

 [&_code:not(pre_*)]:before:content-none
 [&_code:not(pre_*)]:after:content-none
 [&_code:not(pre_*)]:bg-gray-300
 dark:[&_code:not(pre_*)]:bg-neutral-700
 [&_code:not(pre_*)]:box-decoration-clone
 [&_code:not(pre_*)]:px-1.5
 [&_code:not(pre_*)]:py-0.5
 [&_code:not(pre_*)]:rounded-md
 [&_code:not(pre_*)]:text-sm
 [&_code:not(pre_*)]:font-medium
`;

export const proseOverrides = cleanNewlines(overrides);
