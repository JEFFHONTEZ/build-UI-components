// apps/web/app/(preview)/button/page.tsx
import { Button } from "@workspace/ui/components/button"

export default function ButtonPreview() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-lg font-semibold">Button</h1>
      <div className="flex flex-wrap gap-4">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  )
}