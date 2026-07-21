"use client"
import { useState } from "react"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
export default function RadioGroupPreview() {
  const [value, setValue] = useState("standard")
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Radio Group</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Default, selected, disabled, and invalid choices
        </p>
        <RadioGroup onValueChange={setValue} value={value} className="max-w-md">
          {[
            ["standard", "Standard delivery"],
            ["express", "Express delivery"],
            ["overnight", "Overnight delivery"],
          ].map(([id, label]) => (
            <label className="flex items-center gap-2" key={id}>
              <RadioGroupItem value={id} />
              {label}
            </label>
          ))}
          <label className="flex items-center gap-2">
            <RadioGroupItem disabled value="unavailable" />
            Unavailable in your region
          </label>
          <label className="flex items-center gap-2">
            <RadioGroupItem aria-invalid value="invalid" />
            Choose a verified delivery option
          </label>
        </RadioGroup>
      </section>
    </div>
  )
}
