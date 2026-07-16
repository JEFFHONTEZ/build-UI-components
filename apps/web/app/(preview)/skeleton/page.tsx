import { Skeleton } from "@workspace/ui/components/skeleton"

export default function SkeletonPreview() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-lg font-semibold">Skeleton</h1>
      <Skeleton>Example Skeleton</Skeleton>
    </div>
  )
}
