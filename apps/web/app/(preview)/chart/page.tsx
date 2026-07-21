"use client"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@workspace/ui/components/chart"
const data = [
  { month: "Jan", releases: 12, incidents: 3 },
  { month: "Feb", releases: 18, incidents: 2 },
  { month: "Mar", releases: 15, incidents: 1 },
]
const config = {
  releases: { label: "Releases", color: "var(--chart-1)" },
  incidents: { label: "Incidents", color: "var(--chart-2)" },
}
export default function ChartPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Chart</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Composed bar chart with tooltip indicators and legend states
        </p>
        <ChartContainer className="max-w-2xl" config={config}>
          <BarChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="releases" fill="var(--color-releases)" radius={4} />
            <Bar dataKey="incidents" fill="var(--color-incidents)" radius={4} />
          </BarChart>
        </ChartContainer>
      </section>
    </div>
  )
}
