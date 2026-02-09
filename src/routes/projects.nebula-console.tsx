import { Link } from '@tanstack/react-router'

import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/projects/nebula-console')({
  component: NebulaConsolePage,
})

function NebulaConsolePage() {
  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <p className="font-pixel-line text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Case Study / 2025
        </p>
        <h1 className="font-pixel-square text-3xl tracking-wide uppercase md:text-5xl">
          Nebula Console
        </h1>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="font-pixel-line rounded-none text-[10px] uppercase">
            React
          </Badge>
          <Badge variant="outline" className="font-pixel-line rounded-none text-[10px] uppercase">
            Live Ops
          </Badge>
          <Badge variant="outline" className="font-pixel-line rounded-none text-[10px] uppercase">
            Incident Flow
          </Badge>
        </div>
      </header>

      <Separator />

      <section className="grid gap-6 md:grid-cols-3">
        <div>
          <h2 className="font-pixel-triangle text-sm tracking-wider uppercase">Challenge</h2>
          <p className="mt-3 font-pixel-grid text-xs leading-6 text-muted-foreground">
            Teams were switching between six tools during incident response, causing delayed handoffs.
          </p>
        </div>
        <div>
          <h2 className="font-pixel-triangle text-sm tracking-wider uppercase">Approach</h2>
          <p className="mt-3 font-pixel-grid text-xs leading-6 text-muted-foreground">
            Unified ownership, timeline, and health signals in one persistent console with event streams.
          </p>
        </div>
        <div>
          <h2 className="font-pixel-triangle text-sm tracking-wider uppercase">Outcome</h2>
          <p className="mt-3 font-pixel-grid text-xs leading-6 text-muted-foreground">
            Median response time dropped 31% and post-incident review prep fell from 45 to 12 minutes.
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
