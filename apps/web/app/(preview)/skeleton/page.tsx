import { Skeleton } from "@workspace/ui/components/skeleton"

export default function SkeletonPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Skeleton</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Profile and content loading placeholders
        </p>
        <div className="flex max-w-md items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-3 w-56" />
          </div>
        </div>
        <Skeleton className="h-40 max-w-xl rounded-xl" />
      </section>
    </div>
  )
}
