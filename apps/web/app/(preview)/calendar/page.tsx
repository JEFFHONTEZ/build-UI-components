import { Calendar } from "@workspace/ui/components/calendar"
const variants = [
  "default",
  "outline",
  "secondary",
  "ghost",
  "destructive",
  "link",
] as const
export default function CalendarPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Calendar</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Every navigation button variant and selection mode
        </p>
        <div className="flex flex-wrap gap-6">
          {variants.map((buttonVariant) => (
            <Calendar
              buttonVariant={buttonVariant}
              defaultMonth={new Date(2026, 6)}
              key={buttonVariant}
              mode="single"
              selected={new Date(2026, 6, 21)}
            />
          ))}
          <Calendar
            defaultMonth={new Date(2026, 6)}
            mode="multiple"
            selected={[new Date(2026, 6, 7), new Date(2026, 6, 21)]}
          />
          <Calendar
            defaultMonth={new Date(2026, 6)}
            disabled={{ before: new Date(2026, 6, 10) }}
            mode="range"
            selected={{
              from: new Date(2026, 6, 14),
              to: new Date(2026, 6, 19),
            }}
            showOutsideDays={false}
          />
        </div>
      </section>
    </div>
  )
}
