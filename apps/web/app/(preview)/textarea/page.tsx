import { Textarea } from "@workspace/ui/components/textarea"

export default function TextareaPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Textarea</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Empty, populated, disabled, invalid, and long-text states
        </p>
        <div className="flex max-w-xl flex-col gap-3">
          <Textarea placeholder="Describe the impact of this release…" />
          <Textarea defaultValue="The new navigation reduces the time needed to locate active projects." />
          <Textarea
            disabled
            defaultValue="This incident report has been archived."
          />
          <Textarea
            aria-invalid
            defaultValue="Please provide a clearer reproduction step."
          />
          <Textarea defaultValue="The accessibility review identified several follow-up actions across keyboard navigation, focus management, and responsive content reflow." />
        </div>
      </section>
    </div>
  )
}
