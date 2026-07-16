import { ContextMenu } from "@workspace/ui/components/context-menu"

export default function ContextMenuPreview() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-lg font-semibold">Context Menu</h1>
      <ContextMenu>Example ContextMenu</ContextMenu>
    </div>
  )
}
