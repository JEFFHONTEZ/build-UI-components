"use client"
import { Bold } from "lucide-react"
import { Toggle } from "@workspace/ui/components/toggle"
const variants = ["default", "outline"] as const
const sizes = ["sm", "default", "lg"] as const
export default function TogglePreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Toggle</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Every variant and size, pressed, disabled, invalid, and icon-only
          states
        </p>
        {variants.map((variant) => (
          <div className="flex flex-wrap gap-3" key={variant}>
            {sizes.map((size) => (
              <Toggle key={size} size={size} variant={variant}>
                Pin to dashboard
              </Toggle>
            ))}
            <Toggle defaultPressed variant={variant}>
              Pinned
            </Toggle>
            <Toggle disabled variant={variant}>
              Unavailable
            </Toggle>
            <Toggle aria-invalid variant={variant}>
              Needs review
            </Toggle>
            <Toggle aria-label="Bold" variant={variant}>
              <Bold />
            </Toggle>
          </div>
        ))}
      </section>
    </div>
  )
}
