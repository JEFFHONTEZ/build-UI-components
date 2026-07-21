# build-ui_component_library

A personal shadcn/ui component library built as a monorepo, where every component and custom ones, gets there own isolated preview route (e.g. `/button`, `/card`, `/message`) so it can be viewed and tested on their own.

## Tech Stack

- **Next.js** (App Router) — the app that renders component previews
- **shadcn/ui** — component source (Base UI as the underlying primitive library)
- **Tailwind CSS** (v4, CSS variables / OKLCH color tokens)
- **Turborepo** — monorepo task runner
- **TypeScript**

## Project Structure

```
build-ui_component_library/
├── apps/
│   └── web/                          # Next.js app — consumes components, hosts preview routes
│       ├── app/
│       │   ├── layout.tsx            # root layout
│       │   ├── page.tsx              # homepage ("/")
│       │   └── (preview)/            # route group — no "/preview" in the URL
│       │       ├── layout.tsx        # shared sidebar nav for all preview routes
│       │       ├── button/
│       │       │   └── page.tsx      # → localhost:3000/button
│       │       ├── alert/
│       │       │   └── page.tsx      # → localhost:3000/alert
│       │       └── ...               # one folder per component
│       ├── components/                # app-level components (not shadcn primitives)
│       ├── lib/
│       │   └── components-registry.ts # list of {slug, name} used to build the sidebar nav
│       ├── scripts/
│       │   └── generate-previews.mjs # scaffolds a page.tsx + registry entry per component
│       └── components.json
├── packages/
│   ├── ui/                           # the actual component library
│   │   └── src/
│   │       ├── components/
│   │       │   ├── ui/               # shadcn-generated primitives (button, dialog, input...)
│   │       │   └── custom/           # your own hand-built compositions
│   │       ├── hooks/
│   │       ├── lib/
│   │       └── styles/
│   │           └── globals.css       # theme tokens (CSS variables, OKLCH)
│   ├── eslint-config/
│   └── typescript-config/
├── package.json
└── turbo.json
```

## How It Fits Together

- **`packages/ui`** is the library layer. Component source files here have no knowledge of routes or pages — they just export React components (e.g. `Button`, `Card`).
- **`packages/ui/package.json`** exposes those files as importable package paths (e.g. `@workspace/ui/components/button`), which is the bridge between the two workspaces.
- **`apps/web/app/(preview)/<slug>/page.tsx`** imports a component from that package path and renders real usage examples. Each `page.tsx` is a route, not a library file — its only job is to showcase the component.
- **Next.js App Router** maps folders to URLs automatically: `app/(preview)/button/page.tsx` → `/button`. The `(preview)` folder is a route group (parentheses = doesn't appear in the URL) so every preview route shares one sidebar layout.
- **`components-registry.ts`** is a plain metadata list (not part of Next.js routing) used only to render links in the sidebar nav.

## Getting Started

```bash
git clone <your-repo-url>
cd build-ui_component_library
npm install
```

### Run the dev server

From the repo root (runs the Turborepo pipeline):

```bash
npm run dev
```

Or run just the web app directly:

```bash
cd apps/web
npm run dev
```

Visit `http://localhost:3000`.

## Adding a New shadcn Component

Run the CLI from `apps/web` so it resolves the right `components.json`:

```bash
cd apps/web
npx shadcn@latest add <component-name>
```

This drops the component source into `packages/ui/src/components/`.

To install every available shadcn component at once:

```bash
npx shadcn@latest add --all
```

## Adding a Preview Route

Every component needs a route so it can be viewed in isolation:

```
apps/web/app/(preview)/<component-slug>/page.tsx
```

Then register it in `apps/web/lib/components-registry.ts` so it shows up in the sidebar nav.

### Auto-generate routes for new components

Instead of creating pages by hand, run:

```bash
cd apps/web
node scripts/generate-previews.mjs
```

This scans `packages/ui/src/components/`, creates a `page.tsx` + registry entry for every component that doesn't already have one, and leaves a `TODO` placeholder for compound/composed components (Message, Bubble, Marker, Attachment, MessageScroller, DataTable, Chart, Sidebar, Calendar, Carousel, Form) that need a hand-built example instead of a bare render.

## Adding a Fully Custom (Non-shadcn) Component

1. Hand-write the file in `packages/ui/src/components/custom/<name>.tsx`.
2. Create its preview route: `apps/web/app/(preview)/<name>/page.tsx`.
3. Register it in `components-registry.ts`.

## Preview Page Conventions

Each preview page under `(preview)/<slug>/page.tsx` should:

- Default-export a single component named `<ComponentName>Preview`.
- Wrap content in `<div className="p-10 space-y-8">`.
- Start with `<h1 className="mb-6 text-lg font-semibold">` naming the component.
- Render **every variant and state** the component supports (all `variant` options, all sizes, disabled/loading/error states, icon vs. no-icon, etc.) — not just a sample.
- Use realistic placeholder content, not "Lorem ipsum."
- For compound components, build one realistic composed example showing how sub-parts fit together, while still covering every variant of each sub-part.
- Label variant groups with `<p className="text-sm text-muted-foreground">` so states are easy to tell apart while scrolling.
- Never modify `packages/ui` from a preview page — preview pages only consume the library.

## Theming

Theme tokens live in `packages/ui/src/styles/globals.css` as CSS variables in OKLCH color space (`--background`, `--primary`, `--sidebar`, etc.), with a `.dark` block for dark mode. Edit these directly to change the look of every component at once.

## Notes

- Base UI is shadcn's current default primitive library (previously Radix) — components installed here are Base UI–based unless configured otherwise.
- New chat-interface primitives (Attachment, Bubble, Marker, Message, Message Scroller) install the same way as any other component via `npx shadcn add <name>`.
