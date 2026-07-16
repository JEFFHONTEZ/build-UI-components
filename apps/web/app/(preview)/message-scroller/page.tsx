import { MessageScroller } from "@workspace/ui/components/message-scroller"

export default function MessageScrollerPreview() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-lg font-semibold">Message Scroller</h1>
      {/* TODO: replace with a real composed example for MessageScroller */}
      <MessageScroller />
    </div>
  )
}
