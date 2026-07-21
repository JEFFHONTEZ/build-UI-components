import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"
import { Terminal, AlertCircle, CheckCircle2, Info } from "lucide-react"

export default function AlertPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Alert</h1>

      {/* 1. All Variants (default & destructive) */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Variants (default & destructive)
        </p>
        <div className="flex max-w-xl flex-col gap-4">
          <Alert variant="default">
            <Terminal />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the npx CLI command.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>Payment Failed</AlertTitle>
            <AlertDescription>
              Your credit card was declined. Please update your payment details
              to prevent subscription suspension.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* 2. With AlertAction Button */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          With Action Button (AlertAction)
        </p>
        <div className="flex max-w-xl flex-col gap-4">
          <Alert variant="default">
            <Info />
            <AlertTitle>New System Update Available</AlertTitle>
            <AlertDescription>
              Version 2.4.0 introduces performance improvements and security
              patches.
            </AlertDescription>
            <AlertAction>
              <Button size="xs" variant="outline">
                Update Now
              </Button>
            </AlertAction>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>API Rate Limit Exceeded</AlertTitle>
            <AlertDescription>
              You have used 100% of your hourly request quota. Upgrade your plan
              for higher throughput.
            </AlertDescription>
            <AlertAction>
              <Button size="xs" variant="destructive">
                Upgrade
              </Button>
            </AlertAction>
          </Alert>
        </div>
      </section>

      {/* 3. Title Only vs Description Only */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Title Only & Description Only
        </p>
        <div className="flex max-w-xl flex-col gap-4">
          <Alert variant="default">
            <CheckCircle2 className="text-emerald-500" />
            <AlertTitle>Deployment completed successfully in 42s.</AlertTitle>
          </Alert>

          <Alert variant="default">
            <AlertDescription>
              Note: System maintenance is scheduled for Sunday at 02:00 UTC.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </div>
  )
}
