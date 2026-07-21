import { Separator } from "@workspace/ui/components/separator"

export default function SeparatorPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Separator</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Horizontal and vertical orientation
        </p>
        <div className="max-w-md space-y-3">
          <p>Project overview</p>
          <Separator />
          <p>Recent deployment activity</p>
        </div>
        <div className="flex h-8 items-center gap-3">
          <span>Design</span>
          <Separator orientation="vertical" />
          <span>Engineering</span>
          <Separator orientation="vertical" />
          <span>Operations</span>
        </div>
      </section>
    </div>
  )
}
