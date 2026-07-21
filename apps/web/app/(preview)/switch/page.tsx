import { Switch } from "@workspace/ui/components/switch"
export default function SwitchPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Switch</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Small and default sizes; checked, unchecked, disabled, and invalid
        </p>
        <div className="flex flex-col gap-4">
          {(["sm", "default"] as const).map((size) => (
            <div className="flex items-center gap-3" key={size}>
              <Switch size={size} />
              <Switch defaultChecked size={size} />
              <Switch disabled size={size} />
              <Switch defaultChecked disabled size={size} />
              <Switch aria-invalid size={size} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
