import { Bell } from "lucide-react"
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@workspace/ui/components/marker"
export default function MarkerPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Marker</h1>
      <section className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Default, separator, and border variants
        </p>
        <Marker>
          <MarkerIcon>
            <Bell />
          </MarkerIcon>
          <MarkerContent>Deployment completed at 14:32</MarkerContent>
        </Marker>
        <Marker variant="separator">
          <MarkerContent>Today</MarkerContent>
        </Marker>
        <Marker variant="border">
          <MarkerContent>Five people joined the workspace</MarkerContent>
        </Marker>
      </section>
    </div>
  )
}
