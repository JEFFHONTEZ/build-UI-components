import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
export default function ResizablePreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Resizable</h1>
      <ResizablePanelGroup
        className="h-64 max-w-3xl rounded-xl border"
        orientation="horizontal"
      >
        <ResizablePanel defaultSize="40%" minSize="25%">
          <div className="p-4 text-sm">Project files</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <div className="p-4 text-sm">
            Select a file to preview its contents.
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
