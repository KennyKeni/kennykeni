import { Link } from '@tanstack/react-router'

import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/projects/atlas-notes')({
  component: AtlasNotesPage,
})

function AtlasNotesPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <p className="font-pixel-line text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Case Study / 2026
        </p>
        <h1 className="font-pixel-square text-3xl tracking-wide uppercase md:text-5xl">
          Atlas Notes
        </h1>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="font-pixel-line rounded-none text-[10px] uppercase">
            Editor UX
          </Badge>
          <Badge variant="outline" className="font-pixel-line rounded-none text-[10px] uppercase">
            Search
          </Badge>
          <Badge variant="outline" className="font-pixel-line rounded-none text-[10px] uppercase">
            Publishing
          </Badge>
        </div>
      </header>

      <Separator />

      <section className="grid gap-6 md:grid-cols-3">
        <div>
          <h2 className="font-pixel-triangle text-sm tracking-wider uppercase">Challenge</h2>
          <p className="mt-3 font-pixel-grid text-xs leading-6 text-muted-foreground">
            Writers needed a fast distraction-free interface without losing structure and linking power.
          </p>
        </div>
        <div>
          <h2 className="font-pixel-triangle text-sm tracking-wider uppercase">Approach</h2>
          <p className="mt-3 font-pixel-grid text-xs leading-6 text-muted-foreground">
            Designed an airy block editor with atomic metadata and direct publish pipelines.
          </p>
        </div>
        <div>
          <h2 className="font-pixel-triangle text-sm tracking-wider uppercase">Outcome</h2>
          <p className="mt-3 font-pixel-grid text-xs leading-6 text-muted-foreground">
            Average draft-to-publish time dropped from 3.2 days to 1.1 days during the pilot period.
          </p>
        </div>
      </section>

      <Link
        to="/projects"
        className="font-pixel-line inline-block border border-border px-3 py-2 text-[10px] tracking-wider uppercase hover:border-foreground"
      >
        Back To Projects
      </Link>
    </article>
  )
}
