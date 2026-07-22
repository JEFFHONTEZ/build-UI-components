import Lightfall from "@workspace/ui/components/backgrounds/lightfall"

export default function LightfallPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Lightfall</h1>

      <section className="space-y-2">
        <p className="text-sm text-muted-foreground">Default</p>
        <div className="relative h-64 overflow-hidden rounded-lg border bg-[#0A29FF]">
          <Lightfall />
        </div>
      </section>

      <section className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Aurora palette with faster, denser streaks
        </p>
        <div className="relative h-64 overflow-hidden rounded-lg border bg-[#071A3D]">
          <Lightfall
            backgroundColor="#071A3D"
            colors={["#38BDF8", "#818CF8", "#E879F9", "#FDE68A"]}
            density={1.2}
            glow={1.4}
            speed={1.15}
            streakCount={8}
            streakLength={1.8}
            streakWidth={1.4}
            twinkle={0.8}
            zoom={2.4}
          />
        </div>
      </section>

      <section className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Mouse interaction disabled with a muted glow
        </p>
        <div className="relative h-64 overflow-hidden rounded-lg border bg-[#17112B]">
          <Lightfall
            backgroundColor="#17112B"
            backgroundGlow={0.15}
            colors={["#C4B5FD", "#F9A8D4", "#FDE68A"]}
            density={0.4}
            glow={0.7}
            mouseInteraction={false}
            opacity={0.75}
            speed={0.3}
            streakCount={3}
            twinkle={0.2}
            zoom={4}
          />
        </div>
      </section>

      <section className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Responsive mouse glow and high-density particles
        </p>
        <div className="relative h-64 overflow-hidden rounded-lg border bg-[#061C16]">
          <Lightfall
            backgroundColor="#061C16"
            backgroundGlow={0.8}
            colors={["#34D399", "#2DD4BF", "#A7F3D0"]}
            density={1.6}
            dpr={2}
            glow={1.25}
            mouseDampening={0.04}
            mouseRadius={0.45}
            mouseStrength={1.25}
            speed={0.7}
            streakCount={12}
            streakLength={0.65}
            streakWidth={0.8}
            twinkle={1}
            zoom={2.1}
          />
        </div>
      </section>

      <section className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Soft overlay with blend mode and reduced opacity
        </p>
        <div className="relative h-64 overflow-hidden rounded-lg border bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
          <Lightfall
            backgroundColor="#111827"
            backgroundGlow={0.35}
            colors={["#FFFFFF", "#93C5FD", "#C4B5FD"]}
            density={0.8}
            glow={0.9}
            mixBlendMode="screen"
            opacity={0.55}
            speed={0.45}
            streakCount={5}
            streakLength={2.2}
            streakWidth={0.65}
            twinkle={0.45}
            zoom={3.6}
          />
        </div>
      </section>

      <section className="space-y-2">
        <p className="text-sm text-muted-foreground">Paused state</p>
        <div className="relative h-64 overflow-hidden rounded-lg border bg-[#0A29FF]">
          <Lightfall
            paused
            colors={["#60A5FA", "#A78BFA", "#F9A8D4"]}
            streakCount={6}
          />
        </div>
      </section>
    </div>
  )
}

// <div style={{ width: '100%', height: '600px', position: 'relative' }}>
//   <Lightfall
//     colors={['#84cc16', '#ca8a04', '#b91c1c']}
//     backgroundColor="#66df1b"
//     speed={6.5}
//     streakCount={2}
//     streakWidth={1}
//     streakLength={1}
//     glow={1}
//     density={0.6}
//     twinkle={1}
//     zoom={3}
//     backgroundGlow={0.5}
//     opacity={1}
//     mouseInteraction
//     mouseStrength={0.5}
//     mouseRadius={1}
//     color1="#84cc16"
//     color2="#ca8a04"
//     color3="#b91c1c"
// />
// </div>

//       )
//     }
