import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"

export default function CardPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Card</h1>

      {/* Default Card */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          Default Card
        </h2>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
            <CardAction>
              <Button size="sm" variant="outline">
                Mark read
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your subscription will renew automatically on July 30, 2026.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Details</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Small Size Variant */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          Small Size (size="sm")
        </h2>
        <Card size="sm" className="max-w-md">
          <CardHeader>
            <CardTitle>Compact Card</CardTitle>
            <CardDescription>
              Small card layout with reduced spacing.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Useful for sidebars, grids, or tight dashboard layouts.
            </p>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="ghost" className="w-full">
              Dismiss
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Simple Card without Footer */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          Header & Content Only
        </h2>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Analytics Overview</CardTitle>
            <CardDescription>Daily active user metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,450</div>
            <p className="text-xs text-muted-foreground">+18% from last week</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
