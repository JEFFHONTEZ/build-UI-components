import {
  BubbleGroup,
  Bubble,
  BubbleContent,
  BubbleReactions,
} from "@workspace/ui/components/bubble"

export default function BubblePreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Bubble</h1>

      {/* 1. All 7 Variant Options */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          Variants (All 7 Options)
        </h2>
        <div className="flex flex-col gap-3">
          <Bubble variant="default">
            <BubbleContent>
              Default: Can you review the latest pull request for the UI
              library?
            </BubbleContent>
          </Bubble>
          <Bubble variant="secondary">
            <BubbleContent>
              Secondary: Sure thing, taking a look now.
            </BubbleContent>
          </Bubble>
          <Bubble variant="muted">
            <BubbleContent>
              Muted: Automated system check passed successfully.
            </BubbleContent>
          </Bubble>
          <Bubble variant="tinted">
            <BubbleContent>
              Tinted: Special announcement banner message.
            </BubbleContent>
          </Bubble>
          <Bubble variant="outline">
            <BubbleContent>
              Outline: Additional notes and specifications attached below.
            </BubbleContent>
          </Bubble>
          <Bubble variant="ghost">
            <BubbleContent>
              Ghost: Subtle message variant without borders or background.
            </BubbleContent>
          </Bubble>
          <Bubble variant="destructive">
            <BubbleContent>
              Destructive: Error occurred during build execution.
            </BubbleContent>
          </Bubble>
        </div>
      </section>

      {/* 2. Message Alignment (start vs end) */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          Alignment (Incoming vs Outgoing)
        </h2>
        <BubbleGroup className="max-w-xl rounded-xl border bg-card p-4">
          <Bubble align="start" variant="muted">
            <BubbleContent>
              Hey Alex, did you finish the design tokens setup?
            </BubbleContent>
          </Bubble>
          <Bubble align="end" variant="default">
            <BubbleContent>
              Yes! All Tailwind v4 variables have been synced.
            </BubbleContent>
          </Bubble>
        </BubbleGroup>
      </section>

      {/* 3. Reactions (Top/Bottom, Start/End) */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          Bubble Reactions
        </h2>
        <div className="flex flex-col gap-6">
          <Bubble variant="secondary" align="start">
            <BubbleContent>Great job on the release! 🚀</BubbleContent>
            <BubbleReactions side="bottom" align="end">
              👍 3
            </BubbleReactions>
          </Bubble>

          <Bubble variant="default" align="end">
            <BubbleContent>
              Thanks team, couldn't have done it without everyone!
            </BubbleContent>
            <BubbleReactions side="top" align="start">
              ❤️ 5
            </BubbleReactions>
          </Bubble>
        </div>
      </section>
    </div>
  )
}
