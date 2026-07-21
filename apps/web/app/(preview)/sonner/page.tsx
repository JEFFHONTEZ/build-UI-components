"use client"
import { Toaster } from "@workspace/ui/components/sonner"
export default function SonnerPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Sonner</h1>
      <p className="text-sm text-muted-foreground">
        Toast notifications appear in this preview when triggered by application
        actions.
      </p>
      <Toaster richColors />
    </div>
  )
}
