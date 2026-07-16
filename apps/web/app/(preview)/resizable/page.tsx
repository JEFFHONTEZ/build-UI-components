import { Resizable } from "@workspace/ui/components/resizable"

export default function ResizablePreview() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-lg font-semibold">Resizable</h1>
      <Resizable>Example Resizable</Resizable>
    </div>
  )
}
