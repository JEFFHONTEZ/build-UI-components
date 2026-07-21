"use client"

import { useState } from "react"
import { Checkbox } from "@workspace/ui/components/checkbox"

export default function CheckboxPreview() {
  const [checked, setChecked] = useState(false)
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Checkbox</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Unchecked, checked, indeterminate, disabled, and invalid
        </p>
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2">
            <Checkbox checked={checked} onCheckedChange={setChecked} />
            Email me weekly product updates
          </label>
          <label className="flex items-center gap-2">
            <Checkbox checked />
            Workspace notifications enabled
          </label>
          <label className="flex items-center gap-2">
            <Checkbox indeterminate />
            Some team members selected
          </label>
          <label className="flex items-center gap-2">
            <Checkbox disabled />
            Billing notifications unavailable
          </label>
          <label className="flex items-center gap-2">
            <Checkbox aria-invalid />
            Accept the data retention policy
          </label>
        </div>
      </section>
    </div>
  )
}
