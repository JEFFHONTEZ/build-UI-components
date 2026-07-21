import { FolderOpen } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"
export default function EmptyPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Empty</h1>
      <section className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Default and icon media variants
        </p>
        {(["default", "icon"] as const).map((variant) => (
          <Empty key={variant} className="max-w-lg">
            <EmptyHeader>
              <EmptyMedia variant={variant}>
                <FolderOpen />
              </EmptyMedia>
              <EmptyTitle>No project files yet</EmptyTitle>
              <EmptyDescription>
                Upload a brief or create a document to start collaborating.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>Create document</Button>
            </EmptyContent>
          </Empty>
        ))}
      </section>
    </div>
  )
}
