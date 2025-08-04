import { FaCircleNotch } from "react-icons/fa6";

export default function Logo() {
  return (
    <div className="flex flex-wrap items-center justify-center text-5xl font-light sm:text-7xl">
      <span className="inline-block bg-(--text_color-g) p-1 px-2 text-(--bg_color-g) sm:p-2 sm:px-3">
        Simple&nbsp;UI
      </span>
      <span className="bg-(--accent_color-g) p-1 px-2 sm:p-2 sm:px-3">
        C
        <FaCircleNotch className="m-1 inline rotate-45 text-2xl sm:text-4xl" />
        mp
        <FaCircleNotch className="m-1 inline -rotate-45 text-2xl sm:text-4xl" />
        nents
      </span>
    </div>
  );
}
