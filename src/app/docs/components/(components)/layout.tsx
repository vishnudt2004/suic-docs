import { RefBtn } from "@/app/_components/ui/button";

export default function Layout({ children }: { children: React.ReactNode[] }) {
  return (
    <section className="w-full space-y-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">🧩 Components</h1>
        <p className="max-w-prose">
          A collection of unique, accessible and reusable UI components.
        </p>

        <RefBtn href="#" />
      </div>

      <div className="flex flex-wrap gap-5 px-2">{children}</div>
    </section>
  );
}
