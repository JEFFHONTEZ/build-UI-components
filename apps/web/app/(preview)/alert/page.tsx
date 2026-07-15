// apps/web/app/(preview)/alert/page.tsx
import { Alert, AlertTitle, AlertDescription } from "@workspace/ui/components/alert"

export default function AlertPreview() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-lg font-semibold">Alert</h1>
      <div className="flex max-w-md flex-col gap-4">
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>This is a default alert.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Something went wrong.</AlertDescription>
        </Alert>
      </div>
    </div>
  )
}