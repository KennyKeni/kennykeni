import { Link } from '@tanstack/react-router'

import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/projects/aglaea')({
  component: AglaeaPage,
})

function AglaeaPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <p className="font-pixel-line text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Project / Nov 2024 - Present
        </p>
        <h1 className="font-pixel-square text-3xl tracking-wide uppercase md:text-5xl">Aglaea</h1>
        <div className="flex flex-wrap gap-2">
          {['TypeScript', 'SvelteKit', 'Elysia', 'PostgreSQL', 'Kafka', 'Cloudflare Workers'].map(
            (tag) => (
              <Badge key={tag} variant="outline" className="font-pixel-line rounded-none text-[10px] uppercase">
                {tag}
              </Badge>
            ),
          )}
        </div>
      </header>

      <Separator />

      <ul className="space-y-2">
        <li className="font-pixel-grid text-xs leading-6 text-muted-foreground">
          - Built a production content platform supporting a gaming community with 500+ concurrent users.
        </li>
        <li className="font-pixel-grid text-xs leading-6 text-muted-foreground">
          - Implemented transactional outbox publishing domain events to Kafka for RAG embedding invalidation.
        </li>
        <li className="font-pixel-grid text-xs leading-6 text-muted-foreground">
          - Built Cloudflare Worker upload pipeline to R2 with JWT auth and strict file validation.
        </li>
        <li className="font-pixel-grid text-xs leading-6 text-muted-foreground">
          - Designed trigram search and background workers with FOR UPDATE SKIP LOCKED for safe polling.
        </li>
      </ul>

      <Link
        to="/projects"
        className="font-pixel-line inline-block border border-border px-3 py-2 text-[10px] tracking-wider uppercase hover:border-foreground"
      >
        Back To Projects
      </Link>
    </article>
  )
}
