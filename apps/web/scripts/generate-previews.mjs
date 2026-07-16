// apps/web/scripts/generate-previews.mjs
import fs from "node:fs"
import path from "node:path"

const UI_COMPONENTS_DIR = path.resolve("../../packages/ui/src/components")
const PREVIEW_DIR = path.resolve("app/(preview)")
const REGISTRY_FILE = path.resolve("lib/components-registry.ts")

// Components that need special/manual demo content instead of a bare render
const SKIP_AUTO_DEMO = new Set([
  "message", "bubble", "marker", "message-scroller", "attachment",
  "data-table", "chart", "sidebar", "calendar", "carousel", "form",
])

function toPascalCase(slug) {
  return slug
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("")
}

function toTitleCase(slug) {
  return slug
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ")
}

const files = fs
  .readdirSync(UI_COMPONENTS_DIR)
  .filter((f) => f.endsWith(".tsx") && f !== ".gitkeep")
  .map((f) => f.replace(".tsx", ""))
  .sort()

const registryEntries = []

for (const slug of files) {
  const componentName = toPascalCase(slug)
  const routeDir = path.join(PREVIEW_DIR, slug)
  fs.mkdirSync(routeDir, { recursive: true })

  const pagePath = path.join(routeDir, "page.tsx")
  if (fs.existsSync(pagePath)) continue // don't clobber pages you've customized

  const body = SKIP_AUTO_DEMO.has(slug)
    ? `      {/* TODO: replace with a real composed example for ${componentName} */}
      <${componentName} />`
    : `      <${componentName}>Example ${componentName}</${componentName}>`

  const content = `import { ${componentName} } from "@workspace/ui/components/${slug}"

export default function ${componentName}Preview() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-lg font-semibold">${toTitleCase(slug)}</>
${body}
    </div>
  )
}
`
  fs.writeFileSync(pagePath, content)
  registryEntries.push({ slug, name: toTitleCase(slug) })
}

const registryContent = `export const componentsRegistry = [
${registryEntries.map((e) => `  { slug: "${e.slug}", name: "${e.name}" },`).join("\n")}
] as const
`
fs.writeFileSync(REGISTRY_FILE, registryContent)

console.log(`Generated ${registryEntries.length} preview routes and updated the registry.`)