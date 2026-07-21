import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@workspace/ui/components/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@workspace/ui/components/message"
const variants = [
  "default",
  "secondary",
  "muted",
  "tinted",
  "outline",
  "ghost",
  "destructive",
] as const
export default function MessagePreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Message</h1>
      <section className="max-w-2xl space-y-3">
        <p className="text-sm text-muted-foreground">
          Composed conversation with every bubble variant and alignment
        </p>
        <MessageGroup>
          {variants.map((variant, index) => (
            <Message align={index % 2 ? "end" : "start"} key={variant}>
              <MessageAvatar>
                <Avatar>
                  <AvatarFallback>{index % 2 ? "MS" : "JR"}</AvatarFallback>
                </Avatar>
              </MessageAvatar>
              <MessageContent>
                <MessageHeader>
                  {index % 2 ? "Marina Singh" : "Jordan Reyes"}
                </MessageHeader>
                <BubbleGroup>
                  <Bubble align={index % 2 ? "end" : "start"} variant={variant}>
                    <BubbleContent>
                      {variant === "destructive"
                        ? "The deployment could not be completed."
                        : `This ${variant} message keeps the release team aligned.`}
                    </BubbleContent>
                    {index === 0 && (
                      <BubbleReactions align="start" side="bottom">
                        👍 3
                      </BubbleReactions>
                    )}
                  </Bubble>
                </BubbleGroup>
                <MessageFooter>10:{20 + index} AM</MessageFooter>
              </MessageContent>
            </Message>
          ))}
        </MessageGroup>
      </section>
    </div>
  )
}
