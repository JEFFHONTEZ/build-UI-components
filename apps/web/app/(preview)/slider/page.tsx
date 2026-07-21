import { Slider } from "@workspace/ui/components/slider"
export default function SliderPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Slider</h1>
      <section className="max-w-lg space-y-5">
        <p className="text-sm text-muted-foreground">
          Single value, range, disabled, vertical, and constrained ranges
        </p>
        <Slider defaultValue={[40]} />
        <Slider defaultValue={[25, 75]} />
        <Slider defaultValue={[70]} disabled />
        <div className="h-40">
          <Slider defaultValue={[35]} orientation="vertical" />
        </div>
        <Slider defaultValue={[5]} max={10} min={0} step={1} />
      </section>
    </div>
  )
}
