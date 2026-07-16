import { Tooltip } from "@workspace/ui/components/tooltip"

export default function TooltipPreview() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-lg font-semibold">Tooltip</h1>
      <Tooltip>Example Tooltip</Tooltip>
    </div>
  )
}
