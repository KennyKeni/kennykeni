import { Link } from '@tanstack/react-router'

import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/projects/breast-cancer-cnn')({
  component: BreastCancerCnnPage,
})

function BreastCancerCnnPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <p className="font-pixel-line text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Project / Oct 2024 - Dec 2024
        </p>
        <h1 className="font-pixel-square text-3xl tracking-wide uppercase md:text-5xl">
          Breast Cancer Detection with CNN
        </h1>
        <div className="flex flex-wrap gap-2">
          {['Python', 'PyTorch', 'Pandas', 'scikit-learn'].map((tag) => (
            <Badge key={tag} variant="outline" className="font-pixel-line rounded-none text-[10px] uppercase">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <Separator />

      <ul className="space-y-2">
        <li className="font-pixel-grid text-xs leading-6 text-muted-foreground">
          - Trained a CNN model for breast cancer image analysis and reached 82% detection accuracy.
        </li>
        <li className="font-pixel-grid text-xs leading-6 text-muted-foreground">
          - Applied transfer learning with EfficientNet and Inception-ResNet-v2, improving performance by 20%.
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
