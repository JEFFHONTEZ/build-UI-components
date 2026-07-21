import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

export default function AspectRatioPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Aspect Ratio</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">Common media ratios</p>
        <div className="grid max-w-3xl grid-cols-3 gap-4">
          <AspectRatio className="rounded-lg bg-muted p-4" ratio={1}>
            Square album artwork
          </AspectRatio>
          <AspectRatio className="rounded-lg bg-muted p-4" ratio={16 / 9}>
            Widescreen product demo
          </AspectRatio>
          <AspectRatio className="rounded-lg bg-muted p-4" ratio={4 / 5}>
            Portrait editorial image
          </AspectRatio>
        </div>
      </section>
    </div>
  )
}
