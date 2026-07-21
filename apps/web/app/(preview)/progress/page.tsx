import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"
export default function ProgressPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Progress</h1>
      <section className="max-w-lg space-y-4">
        <p className="text-sm text-muted-foreground">
          Empty, in-progress, complete, and labelled states
        </p>
        {[
          [0, "Preparing export"],
          [36, "Uploading design files"],
          [100, "Release complete"],
        ].map(([value, label]) => (
          <Progress key={value as number} value={value as number}>
            <ProgressLabel>{label as string}</ProgressLabel>
            <ProgressValue />
          </Progress>
        ))}
      </section>
    </div>
  )
}
