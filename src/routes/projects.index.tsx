import { Link } from '@tanstack/react-router'

import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/projects/')({
  component: Projects,
})

const projects = [
  {
    to: '/projects/agentic-rag',
    title: 'Agentic RAG',
    status: 'In Progress',
    summary:
      'Agentic RAG backend with semantic/hybrid retrieval, reranking, and low-cost VPS deployment.',
    stack: ['Python', 'Go', 'FastAPI', 'LlamaIndex', 'Qdrant'],
  },
  {
    to: '/projects/aglaea',
    title: 'Aglaea',
    status: 'Production',
    summary:
      'Gaming content platform with rich text authoring, outbox-to-Kafka events, and edge uploads.',
    stack: ['TypeScript', 'SvelteKit', 'PostgreSQL', 'Kafka', 'Cloudflare Workers'],
  },
  {
    to: '/projects/breast-cancer-cnn',
    title: 'Breast Cancer Detection with CNN',
    status: 'Completed',
    summary:
      'Medical imaging classifier using transfer learning with EfficientNet and Inception-ResNet-v2.',
    stack: ['Python', 'PyTorch', 'Pandas', 'scikit-learn'],
  },
] as const

function Projects() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="font-pixel-line text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Projects Directory
        </p>
        <h1 className="font-pixel-square text-3xl tracking-wide uppercase md:text-5xl">Projects</h1>
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
              <p className="font-pixel-grid text-xs leading-6 text-muted-foreground">{project.summary}</p>
              <Link
                to={project.to}
                className="font-pixel-line inline-block border border-border px-3 py-2 text-[10px] tracking-wider uppercase hover:border-foreground"
              >
                View Project
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
