import { ArrowRight, Download, LoaderCircle, Settings } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const variants = [
  "default",
  "outline",
  "secondary",
  "ghost",
  "destructive",
  "link",
] as const
const textSizes = ["xs", "sm", "default", "lg"] as const
const iconSizes = ["icon-xs", "icon-sm", "icon", "icon-lg"] as const

export default function ButtonPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Button</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Every variant at every text size
        </p>
        {variants.map((variant) => (
          <div className="flex flex-wrap items-center gap-3" key={variant}>
            <span className="w-24 text-xs text-muted-foreground capitalize">
              {variant}
            </span>
            {textSizes.map((size) => (
              <Button key={size} size={size} variant={variant}>
                Save changes
              </Button>
            ))}
          </div>
        ))}
      </section>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Every variant at every icon-only size
        </p>
        {variants.map((variant) => (
          <div className="flex flex-wrap items-center gap-3" key={variant}>
            <span className="w-24 text-xs text-muted-foreground capitalize">
              {variant}
            </span>
            {iconSizes.map((size) => (
              <Button
                aria-label={`Open settings, ${variant}, ${size}`}
                key={size}
                size={size}
                variant={variant}
              >
                <Settings />
              </Button>
            ))}
          </div>
        ))}
      </section>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Icons, disabled, invalid, loading, and long labels
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button>
            <Download data-icon="inline-start" />
            Export report
          </Button>
          <Button variant="outline">
            Continue
            <ArrowRight data-icon="inline-end" />
          </Button>
          {variants.map((variant) => (
            <Button disabled key={variant} variant={variant}>
              Unavailable
            </Button>
          ))}
          <Button aria-invalid variant="outline">
            Payment method needs attention
          </Button>
          <Button disabled>
            <LoaderCircle className="animate-spin" data-icon="inline-start" />
            Publishing update
          </Button>
          <Button className="max-w-72 truncate" variant="secondary">
            Download the complete quarterly accessibility audit and remediation
            plan
          </Button>
        </div>
      </section>
    </div>
  )
}
