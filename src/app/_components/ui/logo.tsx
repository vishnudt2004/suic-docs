import { FaCircleNotch } from "react-icons/fa6";

export default function Logo() {
  const child2Style = `
    flex
    items-baseline
    justify-center
    bg-(--accent_color-g)
    px-2
    py-1
    sm:px-3
    sm:py-2
    [&>*]:m-1
    [&>*]:text-2xl
    [&>*]:sm:text-4xl
`;

  return (
    <div className="flex text-5xl font-light max-[924px]:flex-col sm:text-7xl">
      <span className="bg-(--text_color-g) px-2 py-1 text-(--bg_color-g) sm:px-3 sm:py-2">
        Simple&nbsp;UI
      </span>
      <span className={child2Style}>
        C
        <FaCircleNotch className="rotate-45" />
        mp
        <FaCircleNotch className="-rotate-45" />
        nents
      </span>
    </div>
  );
}
