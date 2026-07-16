import { Badge } from "@workspace/ui/components/badge"
import { cn } from "../../../../../packages/ui/src/lib/utils";

export default function BadgePreview() {
  return (
    <div className="p-10">
      <h1 className={cn('mb-6', 'text-lg', 'font-semibold')}>Badge</h1>
      <div className={cn('flex', 'flex-wrap', 'gap-4')}>
      <Badge>Example Badge</Badge>
      <Badge variant="secondary">Secondary Badge</Badge>
      <Badge variant="destructive">Destructive Badge</Badge>
      <Badge variant="outline">Outline Badge</Badge>
      <Badge variant="ghost">Ghost Badge</Badge>
      <Badge variant="link">Link Badge</Badge>
      </div>
    </div>
  )
}
