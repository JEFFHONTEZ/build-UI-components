import {
  ButtonGroup,
  ButtonGroupText,
  ButtonGroupSeparator,
} from "@workspace/ui/components/button-group"
import { Button } from "@workspace/ui/components/button"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Share2,
  MoreHorizontal,
  Bold,
  Italic,
  Underline,
} from "lucide-react"

export default function ButtonGroupPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Button Group</h1>

      {/* 1. Horizontal Group */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Horizontal Button Group
        </p>
        <ButtonGroup orientation="horizontal">
          <Button variant="outline" size="sm">
            <ChevronLeft />
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
            <ChevronRight />
          </Button>
        </ButtonGroup>
      </section>

      {/* 2. Text Formatting Toolbar (Icon Group) */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Text Formatting Group (With Icon Buttons)
        </p>
        <ButtonGroup orientation="horizontal">
          <Button variant="outline" size="icon-sm" title="Bold">
            <Bold />
          </Button>
          <Button variant="outline" size="icon-sm" title="Italic">
            <Italic />
          </Button>
          <Button variant="outline" size="icon-sm" title="Underline">
            <Underline />
          </Button>
        </ButtonGroup>
      </section>

      {/* 3. With ButtonGroupText Addon */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          With ButtonGroupText Prefix / Suffix
        </p>
        <div className="flex flex-col gap-4">
          <ButtonGroup orientation="horizontal">
            <ButtonGroupText>https://</ButtonGroupText>
            <Button variant="outline">Copy URL</Button>
          </ButtonGroup>

          <ButtonGroup orientation="horizontal">
            <Button variant="outline">
              <Copy />
              Copy Code
            </Button>
            <ButtonGroupSeparator />
            <Button variant="outline" size="icon">
              <Share2 />
            </Button>
            <Button variant="outline" size="icon">
              <MoreHorizontal />
            </Button>
          </ButtonGroup>
        </div>
      </section>

      {/* 4. Vertical Button Group */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Vertical Orientation (orientation="vertical")
        </p>
        <ButtonGroup orientation="vertical">
          <Button variant="outline" size="sm">
            Top Action
          </Button>
          <Button variant="outline" size="sm">
            Middle Action
          </Button>
          <Button variant="outline" size="sm">
            Bottom Action
          </Button>
        </ButtonGroup>
      </section>
    </div>
  )
}
