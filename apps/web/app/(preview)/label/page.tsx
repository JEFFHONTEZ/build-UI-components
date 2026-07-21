import { Label } from "@workspace/ui/components/label"
import { Input } from "@workspace/ui/components/input"

export default function LabelPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Label</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Associated, required, and disabled form labels
        </p>
        <div className="flex max-w-md flex-col gap-3">
          <Label htmlFor="workspace-name">Workspace name</Label>
          <Input id="workspace-name" defaultValue="Northstar Studio" />
          <Label htmlFor="billing-email">
            Billing email <span aria-hidden="true">*</span>
          </Label>
          <Input id="billing-email" aria-invalid />
          <Label data-disabled htmlFor="managed-field">
            Managed account
          </Label>
          <Input disabled id="managed-field" defaultValue="Provisioned by IT" />
        </div>
      </section>
    </div>
  )
}
