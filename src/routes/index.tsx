import { Link } from '@tanstack/react-router'

import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/')({
  component: Home,
})

const featuredProjects = [
  {
    to: '/projects/nebula-console',
    title: 'Nebula Console',
    summary: 'Operational dashboard for distributed teams and live incident tracking.',
    tags: ['React', 'WebSocket', 'Observability'],
  },
  {
    to: '/projects/supply-sync',
    title: 'Supply Sync',
    summary: 'Inventory planning system focused on low-latency forecasting and approvals.',
    tags: ['TypeScript', 'Edge APIs', 'Analytics'],
  },
  {
    to: '/projects/atlas-notes',
    title: 'Atlas Notes',
    summary: 'Minimal writing workspace with blocks, backlinks, and publication pipelines.',
    tags: ['Editor', 'Search', 'Design System'],
  },
] as const

function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-6">
        <p className="font-pixel-line text-xs tracking-[0.22em] text-muted-foreground uppercase">
          Product-Focused Frontend Engineer
        </p>
        <h1 className="font-pixel-square text-4xl tracking-tight text-foreground uppercase md:text-6xl">
          Minimal Interfaces.
          <br />
          Sharp Systems.
        </h1>
        <p className="max-w-2xl font-pixel-grid text-sm leading-7 text-muted-foreground">
          I design and build clean product surfaces with strong information hierarchy,
          fast interaction loops, and maintainable frontend architecture.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="font-pixel-circle border border-foreground bg-foreground px-4 py-3 text-xs tracking-[0.16em] text-background uppercase"
          >
            View Projects
          </Link>
          <a
            href="mailto:hello@example.com"
            className="font-pixel-circle border border-border px-4 py-3 text-xs tracking-[0.16em] text-foreground uppercase"
          >
            Contact
          </a>
        </div>
      </section>

      <Separator />

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-pixel-triangle text-xl tracking-wider uppercase">
            Featured Example Projects
          </h2>
          <Link
            to="/projects"
            className="font-pixel-line text-xs tracking-[0.2em] text-muted-foreground uppercase hover:text-foreground"
          >
            See all
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="rounded-none border border-border shadow-none">
              <CardHeader className="space-y-4">
                <CardTitle className="font-pixel-square text-lg tracking-wide uppercase">
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="font-pixel-line rounded-none px-2 py-1 text-[10px] tracking-wider uppercase"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="font-pixel-grid text-xs leading-6 text-muted-foreground">
                  {project.summary}
                </p>
                <Link
                  to={project.to}
                  className="font-pixel-line inline-block border border-border px-3 py-2 text-[10px] tracking-wider uppercase hover:border-foreground"
                >
                  Open Case Study
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
