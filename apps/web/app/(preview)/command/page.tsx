import { Command } from "@workspace/ui/components/command"

export default function CommandPreview() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-lg font-semibold">Command</h1>
      <Command>Example Command</Command>
    </div>
  )
}
