import { Input } from "@workspace/ui/components/input"

export default function InputPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Input</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Default, populated, disabled, invalid, and long-value states
        </p>
        <div className="flex max-w-md flex-col gap-3">
          <Input placeholder="name@northstar.studio" type="email" />
          <Input defaultValue="marina@northstar.studio" />
          <Input disabled defaultValue="Managed by single sign-on" />
          <Input aria-invalid defaultValue="invalid-address" />
          <Input defaultValue="Quarterly accessibility remediation planning and product readiness review" />
        </div>
      </section>
    </div>
  )
}
