import { DirectionProvider } from "@workspace/ui/components/direction"
import { Button } from "@workspace/ui/components/button"

export default function DirectionPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Direction</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Left-to-right and right-to-left content
        </p>
        <div className="flex flex-wrap gap-4">
          <DirectionProvider direction="ltr">
            <Button>Continue to billing</Button>
          </DirectionProvider>
          <DirectionProvider direction="rtl">
            <Button>Proceed to Billing</Button>
          </DirectionProvider>
        </div>
      </section>
    </div>
  )
}
