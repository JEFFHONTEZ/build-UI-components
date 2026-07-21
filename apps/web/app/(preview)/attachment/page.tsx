import {
  Attachment,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
} from "@workspace/ui/components/attachment"
import {
  FileText,
  Image as ImageIcon,
  X,
  Download,
  AlertCircle,
} from "lucide-react"

export default function AttachmentPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Attachment</h1>

      {/* 1. All Attachment States */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          States (done, uploading, processing, error, idle)
        </h2>
        <div className="flex flex-wrap gap-4">
          <Attachment state="done">
            <AttachmentMedia variant="icon">
              <FileText />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>Q3_Financial_Report.pdf</AttachmentTitle>
              <AttachmentDescription>2.4 MB • Completed</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction title="Download">
                <Download />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>

          <Attachment state="uploading">
            <AttachmentMedia variant="icon">
              <FileText />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>Design_System_Spec.docx</AttachmentTitle>
              <AttachmentDescription>Uploading (65%)...</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction title="Cancel">
                <X />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>

          <Attachment state="processing">
            <AttachmentMedia variant="icon">
              <FileText />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>Dataset_Export.csv</AttachmentTitle>
              <AttachmentDescription>
                Processing security scan...
              </AttachmentDescription>
            </AttachmentContent>
          </Attachment>

          <Attachment state="error">
            <AttachmentMedia variant="icon">
              <AlertCircle />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>Archive_Payload.zip</AttachmentTitle>
              <AttachmentDescription>
                Upload failed (exceeds limit)
              </AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction title="Remove">
                <X />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>

          <Attachment state="idle">
            <AttachmentMedia variant="icon">
              <FileText />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>Draft_Contract.pdf</AttachmentTitle>
              <AttachmentDescription>Pending upload</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </div>
      </section>

      {/* 2. Sizes (default, sm, xs) */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          Sizes (default, sm, xs)
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Attachment size="default">
            <AttachmentMedia variant="icon">
              <FileText />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>Size_Default.pdf</AttachmentTitle>
              <AttachmentDescription>1.2 MB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>

          <Attachment size="sm">
            <AttachmentMedia variant="icon">
              <FileText />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>Size_Small.pdf</AttachmentTitle>
              <AttachmentDescription>850 KB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>

          <Attachment size="xs">
            <AttachmentMedia variant="icon">
              <FileText />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>Size_ExtraSmall.pdf</AttachmentTitle>
              <AttachmentDescription>200 KB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </div>
      </section>

      {/* 3. Image Media Variant */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          Image Thumbnail Variant
        </h2>
        <div className="flex flex-wrap gap-4">
          <Attachment state="done">
            <AttachmentMedia variant="image">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200"
                alt="Abstract background"
              />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>Hero_Banner_v2.png</AttachmentTitle>
              <AttachmentDescription>1920x1080 • PNG</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction title="Remove">
                <X />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </div>
      </section>

      {/* 4. Vertical Orientation */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          Vertical Orientation
        </h2>
        <div className="flex flex-wrap gap-4">
          <Attachment orientation="vertical">
            <AttachmentMedia variant="icon">
              <ImageIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>Screenshot.png</AttachmentTitle>
              <AttachmentDescription>4.1 MB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </div>
      </section>

      {/* 5. Compound AttachmentGroup */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          AttachmentGroup Container
        </h2>
        <AttachmentGroup>
          <Attachment size="sm">
            <AttachmentMedia variant="icon">
              <FileText />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>Invoice_1092.pdf</AttachmentTitle>
              <AttachmentDescription>45 KB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>

          <Attachment size="sm">
            <AttachmentMedia variant="icon">
              <FileText />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>Receipt_July.pdf</AttachmentTitle>
              <AttachmentDescription>12 KB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </AttachmentGroup>
      </section>
    </div>
  )
}
