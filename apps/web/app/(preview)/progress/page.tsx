import { Progress } from "@workspace/ui/components/progress"

export default function ProgressPreview() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-lg font-semibold">Progress</h1>
      <Progress>Example Progress</Progress>
    </div>
  )
}
