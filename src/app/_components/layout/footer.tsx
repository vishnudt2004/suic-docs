export default function Footer() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-2 border-t border-gray-100 bg-(--bg_color-g) py-3 text-xs tracking-wider text-nowrap text-neutral-600 dark:border-neutral-800 dark:text-gray-300">
      <span>&copy; {new Date().getFullYear()} Simple UI Components</span>|
      <span>
        by{" "}
        <a
          href="https://github.com/vishnudt2004/"
          target="_blank"
          className="text-blue-600"
        >
          Vishnu D
        </a>
        .
      </span>
    </div>
  );
}
