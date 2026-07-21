"use client"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { Button } from "@workspace/ui/components/button"

export default function CollapsiblePreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Collapsible</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Closed and initially open states
        </p>
        <Collapsible className="max-w-lg rounded-lg border p-4">
          <CollapsibleTrigger render={<Button variant="outline" />}>
            Show deployment notes
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-3 text-sm text-muted-foreground">
            The production deployment completed at 14:32 with no failed health
            checks.
          </CollapsibleContent>
        </Collapsible>
        <Collapsible defaultOpen className="max-w-lg rounded-lg border p-4">
          <CollapsibleTrigger render={<Button variant="outline" />}>
            Hide release checklist
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-3 text-sm text-muted-foreground">
            All accessibility, security, and browser checks are complete.
          </CollapsibleContent>
        </Collapsible>
      </section>
    </div>
  )
}
