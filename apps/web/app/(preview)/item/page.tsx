import { Item } from "@workspace/ui/components/item"

export default function ItemPreview() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-lg font-semibold">Item</h1>
      <Item>Example Item</Item>
    </div>
  )
}
