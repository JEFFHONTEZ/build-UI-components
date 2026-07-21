import {
  ItemGroup,
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemHeader,
  ItemFooter,
  ItemSeparator,
} from "@workspace/ui/components/item"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"
import { Shield, FileText, ChevronRight } from "lucide-react"

export default function ItemPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Item</h1>

      {/* 1. Item Variants (default, outline, muted) */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Variants (default, outline, muted)
        </p>
        <ItemGroup className="max-w-xl">
          <Item variant="default">
            <ItemMedia variant="icon">
              <Shield className="text-primary" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Default Item</ItemTitle>
              <ItemDescription>
                Standard transparent border item container.
              </ItemDescription>
            </ItemContent>
          </Item>

          <Item variant="outline">
            <ItemMedia variant="icon">
              <FileText className="text-blue-500" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Outline Item</ItemTitle>
              <ItemDescription>Card-like bordered item style.</ItemDescription>
            </ItemContent>
          </Item>

          <Item variant="muted">
            <ItemMedia variant="icon">
              <Shield className="text-emerald-500" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Muted Item</ItemTitle>
              <ItemDescription>
                Subtle muted background background container.
              </ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </section>

      {/* 2. Sizes (default, sm, xs) */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Sizes (default, sm, xs)
        </p>
        <ItemGroup className="max-w-xl">
          <Item size="default" variant="outline">
            <ItemContent>
              <ItemTitle>Size Default</ItemTitle>
              <ItemDescription>
                Standard padding and text sizing.
              </ItemDescription>
            </ItemContent>
          </Item>

          <Item size="sm" variant="outline">
            <ItemContent>
              <ItemTitle>Size Small (sm)</ItemTitle>
              <ItemDescription>Compact padding layout.</ItemDescription>
            </ItemContent>
          </Item>

          <Item size="xs" variant="outline">
            <ItemContent>
              <ItemTitle>Size Extra Small (xs)</ItemTitle>
              <ItemDescription>
                Tightest padding layout for dropdowns and popovers.
              </ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </section>

      {/* 3. Media Variants (icon, image) & Actions */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Media Variants & ItemActions
        </p>
        <ItemGroup className="max-w-xl">
          <Item variant="outline">
            <ItemMedia variant="image">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
                alt="Avatar"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Sarah Chen</ItemTitle>
              <ItemDescription>
                Senior Product Designer • Online
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Badge variant="secondary">Admin</Badge>
              <Button size="xs" variant="outline">
                Manage
              </Button>
            </ItemActions>
          </Item>
        </ItemGroup>
      </section>

      {/* 4. Full Header & Footer Composition */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Full Composition with Header, Content & Footer
        </p>
        <ItemGroup className="max-w-xl">
          <Item variant="outline">
            <ItemHeader>
              <span className="text-xs font-semibold text-muted-foreground uppercase">
                Security Event
              </span>
              <Badge variant="destructive">High Severity</Badge>
            </ItemHeader>
            <ItemContent className="my-2">
              <ItemTitle>Unusual IP Login Detected</ItemTitle>
              <ItemDescription>
                An unrecognized device logged into your organization account
                from Frankfurt, Germany.
              </ItemDescription>
            </ItemContent>
            <ItemFooter>
              <span className="text-xs text-muted-foreground">
                July 20, 2026 at 11:42 AM
              </span>
              <Button size="xs" variant="ghost">
                View Log <ChevronRight className="ml-1 size-3" />
              </Button>
            </ItemFooter>
          </Item>
        </ItemGroup>
      </section>
    </div>
  )
}
