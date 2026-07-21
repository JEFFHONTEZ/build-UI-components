"use client"
import { AlignCenter, AlignLeft, AlignRight } from "lucide-react"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
const variants = ["default", "outline"] as const
const sizes = ["sm", "default", "lg"] as const
export default function ToggleGroupPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Toggle Group</h1>
      <section className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Every variant, size, orientation, and spacing mode
        </p>
        {variants.map((variant) =>
          sizes.map((size) => (
            <ToggleGroup
              defaultValue="left"
              key={`${variant}-${size}`}
              size={size}
              variant={variant}
            >
              <ToggleGroupItem value="left">
                <AlignLeft />
              </ToggleGroupItem>
              <ToggleGroupItem value="center">
                <AlignCenter />
              </ToggleGroupItem>
              <ToggleGroupItem value="right">
                <AlignRight />
              </ToggleGroupItem>
            </ToggleGroup>
          ))
        )}
        <ToggleGroup
          defaultValue="left"
          orientation="vertical"
          spacing={0}
          variant="outline"
        >
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem disabled value="right">
            Right
          </ToggleGroupItem>
        </ToggleGroup>
      </section>
    </div>
  )
}
