import { AlertDialog } from "@workspace/ui/components/alert-dialog"

export default function AlertDialogPreview() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-lg font-semibold">Alert Dialog</h1>
      <AlertDialog>Example AlertDialog</AlertDialog>
    </div>
  )
}
