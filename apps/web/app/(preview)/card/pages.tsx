import { Card } from "@workspace/ui/components/card"

export default function CardPreview() {
    return (
        <div className="p-10">
              <h1 className="mb-6 text-lg font-semibold">Card</h1>
              <div className="flex flex-wrap gap-4">
                <Card>Default</Card>
                </div>
              </div>

    )
}