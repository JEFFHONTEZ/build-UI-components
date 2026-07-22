import Ferrofluid from "@workspace/ui/components/backgrounds/ferrofluid"

export default function FerrofluidPreview() {
  return (
    <div className="p-10 space-y-8">
      <h1 className="mb-6 text-lg font-semibold">Ferrofluid</h1>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Default</p>
        <div className="relative h-64 w-full overflow-hidden rounded-lg border bg-black">
          <Ferrofluid />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Custom colors, faster flow</p>
        <div className="relative h-64 w-full overflow-hidden rounded-lg border bg-black">
          <Ferrofluid
            colors={["#4F46E5", "#06B6D4", "#E0F2FE"]}
            speed={1.2}
            flowDirection="up"
          />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Paused</p>
        <div className="relative h-64 w-full overflow-hidden rounded-lg border bg-black">
          <Ferrofluid paused />
        </div>
      </div>
    </div>
  )
}
