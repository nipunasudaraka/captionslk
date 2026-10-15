"use client";

export function Editor() {
  return (
    <section
      aria-label="Caption editor workspace"
      className="flex flex-1 flex-col gap-4 p-6"
    >
      <h1 className="text-xl font-semibold tracking-tight">Caption editor</h1>
      <div
        role="region"
        aria-label="Editor workspace"
        className="flex-1 rounded-lg border border-black/[.08] bg-white p-4 dark:border-white/[.145] dark:bg-black"
      />
    </section>
  );
}
