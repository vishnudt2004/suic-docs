function ExampleLoader() {
  return <p>Loading…</p>;
}

function ExampleFallback({
  type = "not-found",
}: {
  type?: "not-found" | "not-available";
}) {
  return (
    <p>{type === "not-found" ? "Example not found" : "No example available"}</p>
  );
}

function ExampleContainer({
  title, // example title
  children, // raw code or preview
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="not-prose max-w-full bg-neutral-200/50 dark:bg-neutral-800/30">
      <h4 className="py-1 pl-2 font-medium">{title}</h4>
      <div className="secondary-scrollbar flex h-[560px] w-full items-center-safe justify-center-safe overflow-auto px-1">
        {children}
      </div>
    </div>
  );
}

export { ExampleLoader, ExampleFallback, ExampleContainer };
