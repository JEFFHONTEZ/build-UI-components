import { Spinner } from "@workspace/ui/components/spinner"

export default function SpinnerPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Spinner</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Default and custom-size loading indicators
        </p>
        <div className="flex items-center gap-4">
          <Spinner />
          <Spinner className="size-5" />
          <Spinner className="size-8" />
        </div>
      </section>
    </div>
  )
}
