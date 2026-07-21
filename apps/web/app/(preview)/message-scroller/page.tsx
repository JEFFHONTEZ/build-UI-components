"use client"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@workspace/ui/components/message-scroller"
export default function MessageScrollerPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Message Scroller</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Scrollable conversation with start and end jump controls
        </p>
        <MessageScrollerProvider>
          <MessageScroller className="h-80 max-w-xl rounded-xl border">
            <MessageScrollerViewport>
              <MessageScrollerContent className="p-4">
                {Array.from({ length: 18 }, (_, index) => (
                  <MessageScrollerItem key={index} scrollAnchor={index === 17}>
                    <p className="rounded-lg bg-muted p-3 text-sm">
                      Release update {index + 1}: the accessibility review is
                      progressing as planned.
                    </p>
                  </MessageScrollerItem>
                ))}
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton direction="start" />
            <MessageScrollerButton direction="end" />
          </MessageScroller>
        </MessageScrollerProvider>
      </section>
    </div>
  )
}
