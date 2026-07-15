// apps/web/app/(preview)/layout.tsx
import Link from "next/link"
import { componentsRegistry } from "@/lib/components-registry"

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-56 shrink-0 border-r p-4">
        <h2 className="mb-4 text-sm font-semibold text-muted-foreground">Components</h2>
        <nav className="flex flex-col gap-1">
          {componentsRegistry.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="rounded-md px-2 py-1 text-sm hover:bg-muted"
            >
              {c.name}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  )
}