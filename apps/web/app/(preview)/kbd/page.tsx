import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
export default function KbdPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Kbd</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Single keys and shortcut groups
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Kbd>⌘</Kbd>
          <Kbd>Enter</Kbd>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <span>+</span>
            <Kbd>K</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>Shift</Kbd>
            <span>+</span>
            <Kbd>P</Kbd>
          </KbdGroup>
        </div>
      </section>
    </div>
  )
}
