import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode[] }) {
  return (
    <section className="w-full space-y-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">🧩 Components</h1>
        <p className="text-muted-foreground max-w-prose">
          A collection of unique, accessible and reusable UI components.
        </p>

        <Link
          href="#"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-gray-300 px-3 py-1 text-xs transition"
        >
          Reference Docs
        </Link>
      </div>

      <div className="flex flex-wrap gap-5">
        {children}
      </div>
    </section>
  );
}
