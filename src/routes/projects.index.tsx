import { Link } from '@tanstack/react-router'

import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/projects/')({
  component: Projects,
})

const projects = [
  {
    to: '/projects/nebula-console',
    title: 'Nebula Console',
    status: 'Launched',
    summary:
      'A live operations dashboard that centralizes incidents, ownership, and timeline views.',
    stack: ['React', 'TanStack Query', 'WebSocket'],
  },
  {
    to: '/projects/supply-sync',
    title: 'Supply Sync',
    status: 'In Production',
    summary:
      'An inventory command center for planning, variance tracking, and threshold automation.',
    stack: ['TypeScript', 'Server Functions', 'Charts'],
  },
  {
    to: '/projects/atlas-notes',
    title: 'Atlas Notes',
    status: 'Beta',
    summary:
      'A publishing-focused writing app with linked references and clean authoring workflows.',
    stack: ['Rich Text', 'Search', 'Content API'],
  },
] as const

function Projects() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="font-pixel-line text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Projects Directory
        </p>
        <h1 className="font-pixel-square text-3xl tracking-wide uppercase md:text-5xl">
          Example Projects
        </h1>
      </section>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="rounded-none border border-border shadow-none">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="font-pixel-square text-base tracking-wide uppercase">
                  {project.title}
                </CardTitle>
                <Badge
                  variant="outline"
                  className="font-pixel-line rounded-none text-[10px] tracking-wider uppercase"
                >
                  {project.status}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="font-pixel-line rounded-none text-[10px] tracking-wider uppercase"
                  >
                    {item}
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
                Read Case Study
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
