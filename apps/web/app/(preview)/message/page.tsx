import { Message } from "@workspace/ui/components/message"

export default function MessagePreview() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-lg font-semibold">Message</h1>
      {/* TODO: replace with a real composed example for Message */}
      <Message />
    </div>
  )
}
