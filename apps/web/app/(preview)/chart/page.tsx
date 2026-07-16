import { Chart } from "@workspace/ui/components/chart"

export default function ChartPreview() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-lg font-semibold">Chart</h1>
      {/* TODO: replace with a real composed example for Chart */}
      <Chart />
    </div>
  )
}
