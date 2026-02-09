import { Link } from '@tanstack/react-router'

import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/projects/agentic-rag')({
  component: AgenticRagPage,
})

function AgenticRagPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <p className="font-pixel-line text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Project / July 2025 - Present
        </p>
        <h1 className="font-pixel-square text-3xl tracking-wide uppercase md:text-5xl">Agentic RAG</h1>
        <div className="flex flex-wrap gap-2">
          {['Python', 'Go', 'FastAPI', 'LlamaIndex', 'Qdrant', 'Docker'].map((tag) => (
            <Badge key={tag} variant="outline" className="font-pixel-line rounded-none text-[10px] uppercase">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <Separator />

      <ul className="space-y-2">
        <li className="font-pixel-grid text-xs leading-6 text-muted-foreground">
          - Built an agentic RAG FastAPI backend that reasons over user questions with vector retrieval.
        </li>
        <li className="font-pixel-grid text-xs leading-6 text-muted-foreground">
          - Implemented semantic search, hybrid search, and reranking to improve answer quality.
        </li>
        <li className="font-pixel-grid text-xs leading-6 text-muted-foreground">
          - Deployed Dockerized backend and databases to a VPS, reducing operating costs by 60%.
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
