import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from "@workspace/ui/components/native-select"
export default function NativeSelectPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Native Select</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Default, grouped, disabled, invalid, and long-label options
        </p>
        <div className="flex max-w-md flex-col gap-3">
          <NativeSelect defaultValue="">
            <NativeSelectOption disabled value="">
              Choose a timezone
            </NativeSelectOption>
            <NativeSelectOption value="nairobi">
              Nairobi (EAT)
            </NativeSelectOption>
            <NativeSelectOption value="london">London (GMT)</NativeSelectOption>
          </NativeSelect>
          <NativeSelect defaultValue="design">
            <NativeSelectOptGroup label="Teams">
              <NativeSelectOption value="design">Design</NativeSelectOption>
              <NativeSelectOption value="engineering">
                Engineering
              </NativeSelectOption>
            </NativeSelectOptGroup>
          </NativeSelect>
          <NativeSelect disabled defaultValue="managed">
            <NativeSelectOption value="managed">
              Managed by IT
            </NativeSelectOption>
          </NativeSelect>
          <NativeSelect aria-invalid defaultValue="">
            <NativeSelectOption value="">
              Select a valid billing country
            </NativeSelectOption>
          </NativeSelect>
        </div>
      </section>
    </div>
  )
}
