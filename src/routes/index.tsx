import { Link } from '@tanstack/react-router'

import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/')({
  component: Home,
})

const profileLinks = [
  { label: 'linkedin.com/in/kennylin344', href: 'https://linkedin.com/in/kennylin344' },
  { label: 'github.com/kennykeni', href: 'https://github.com/kennykeni' },
] as const

const education = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'Master of Science in Computer Science (Concurrent B.S./M.S.)',
    location: 'Atlanta, GA',
    period: 'Aug 2025 - May 2027',
  },
  {
    school: 'Georgia Institute of Technology',
    degree: 'Bachelor of Science in Computer Science (GPA: 4.0)',
    location: 'Atlanta, GA',
    period: 'Aug 2023 - May 2026',
  },
] as const

const experiences = [
  {
    role: 'Software Engineering Intern',
    org: 'Viasat',
    location: 'Carlsbad, CA',
    period: 'May 2025 - Aug 2025',
    bullets: [
      'Automated customer order validation and fulfillment with Python batch processing and AWS SQS, increasing speed by 300%.',
      'Built concurrent worker pipeline processing 20+ batches in parallel, cutting runtime from 4 hours to 10 minutes.',
      'Designed GraphQL endpoints and integrated AWS SQS, S3, and CloudWatch for real-time batch monitoring.',
    ],
  },
  {
    role: 'Full Stack Developer',
    org: 'Bits of Good (Nonprofit)',
    location: 'Atlanta, GA',
    period: 'Jan 2024 - Present',
    bullets: [
      'Developed a web app with iCAN to gamify medication adherence for children in clinical trials.',
      'Implemented complex UI flows with React and Tailwind CSS to improve usability and maintainability.',
      'Created REST API integration layer with TanStack Query for reliable frontend-backend communication.',
    ],
  },
  {
    role: 'Machine Learning Undergraduate Researcher',
    org: 'Intelligent Digital Communications',
    location: 'Atlanta, GA',
    period: 'Aug 2024 - Present',
    bullets: [
      'Developed a near real-time system to identify and triangulate wireless users in signal-dense environments.',
      'Applied transfer learning to Co-DETR models with PyTorch and scikit-learn, achieving 85% detection accuracy.',
    ],
  },
] as const

const featuredProjects = [
  {
    to: '/projects/agentic-rag',
    title: 'Agentic RAG',
    summary: 'Agentic FastAPI backend using vector + hybrid retrieval, reranking, and cost-efficient VPS deployment.',
    tags: ['Python', 'FastAPI', 'LlamaIndex', 'Qdrant'],
  },
  {
    to: '/projects/aglaea',
    title: 'Aglaea',
    summary: 'Production content platform with event-driven architecture, Kafka outbox, and Cloudflare edge uploads.',
    tags: ['TypeScript', 'SvelteKit', 'PostgreSQL', 'Kafka'],
  },
  {
    to: '/projects/breast-cancer-cnn',
    title: 'Breast Cancer Detection with CNN',
    summary: 'PyTorch transfer-learning pipeline for medical image classification with strong performance on limited data.',
    tags: ['PyTorch', 'CNN', 'EfficientNet', 'scikit-learn'],
  },
] as const

const skills = [
  {
    label: 'Languages',
    value: 'Python, TypeScript, JavaScript, Java, Kotlin, Go, C, C++, SQL, HTML/CSS',
  },
  {
    label: 'Frameworks',
    value:
      'React, Svelte, Next.js, Elysia, NestJS, FastAPI, PyTorch, TensorFlow, LlamaIndex, Tailwind',
  },
  {
    label: 'Databases & Cloud',
    value: 'PostgreSQL, MongoDB, Redis, Qdrant, AWS (SQS, S3, CloudWatch), Docker',
  },
  {
    label: 'Tools',
    value: 'Git, Linux, Bun, Kysely, BetterAuth, RESTful APIs, CI/CD',
  },
] as const

function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-5">
        <p className="font-pixel-line text-xs tracking-[0.22em] text-muted-foreground uppercase">Resume</p>
        <h1 className="font-pixel-square text-4xl tracking-tight uppercase md:text-6xl">Kenny Lin</h1>
        <p className="max-w-4xl font-pixel-grid text-sm leading-7 text-muted-foreground">
          631-264-4497 | linkenny777@gmail.com | New York, NY | US Citizen
        </p>
        <div className="flex flex-wrap gap-2">
          {profileLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-pixel-line border border-border px-3 py-2 text-[10px] tracking-wider uppercase hover:border-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
        <Link
          to="/projects"
          className="font-pixel-circle inline-block border border-foreground bg-foreground px-4 py-3 text-xs tracking-[0.16em] text-background uppercase"
        >
          View All Projects
        </Link>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="font-pixel-triangle text-xl tracking-wider uppercase">Education</h2>
        <div className="space-y-4">
          {education.map((item) => (
            <Card key={`${item.degree}-${item.period}`} className="rounded-none border border-border shadow-none">
              <CardHeader className="space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <CardTitle className="font-pixel-square text-base tracking-wide uppercase">
                    {item.school}
                  </CardTitle>
                  <Badge variant="outline" className="font-pixel-line rounded-none text-[10px] tracking-wider uppercase">
                    {item.period}
                  </Badge>
                </div>
                <p className="font-pixel-line text-xs tracking-wide uppercase text-muted-foreground">
                  {item.location}
                </p>
              </CardHeader>
              <CardContent>
                <p className="font-pixel-grid text-xs leading-6 text-muted-foreground">{item.degree}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="font-pixel-triangle text-xl tracking-wider uppercase">Experience</h2>
        <div className="space-y-4">
          {experiences.map((item) => (
            <Card key={`${item.role}-${item.org}`} className="rounded-none border border-border shadow-none">
              <CardHeader className="space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <CardTitle className="font-pixel-square text-base tracking-wide uppercase">
                    {item.role}
                  </CardTitle>
                  <Badge variant="outline" className="font-pixel-line rounded-none text-[10px] tracking-wider uppercase">
                    {item.period}
                  </Badge>
                </div>
                <p className="font-pixel-line text-xs tracking-wide uppercase text-muted-foreground">
                  {item.org} | {item.location}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="font-pixel-grid text-xs leading-6 text-muted-foreground">
                      - {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-pixel-triangle text-xl tracking-wider uppercase">Featured Projects</h2>
          <Link
            to="/projects"
            className="font-pixel-line text-xs tracking-[0.2em] text-muted-foreground uppercase hover:text-foreground"
          >
            See all
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3 md:[grid-auto-rows:1fr]">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="h-full rounded-none border border-border shadow-none">
              <CardHeader className="space-y-4">
                <CardTitle className="font-pixel-square text-lg tracking-wide uppercase">{project.title}</CardTitle>
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
              <CardContent className="flex flex-1 flex-col justify-between gap-6">
                <p className="font-pixel-grid flex-1 text-xs leading-6 text-muted-foreground">
                  {project.summary}
                </p>
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
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="font-pixel-triangle text-xl tracking-wider uppercase">Technical Skills</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((item) => (
            <Card key={item.label} className="rounded-none border border-border shadow-none">
              <CardHeader>
                <CardTitle className="font-pixel-square text-sm tracking-wide uppercase">{item.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-pixel-grid text-xs leading-6 text-muted-foreground">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
