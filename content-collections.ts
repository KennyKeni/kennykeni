import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const projects = defineCollection({
  name: 'projects',
  directory: 'content/projects',
  include: '**/*.mdx',
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    periodLabel: z.string(),
    tags: z.array(z.string()),
    status: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string().url(),
        }),
      )
      .default([]),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    content: z.string(),
  }),
})

const blogs = defineCollection({
  name: 'blogs',
  directory: 'content/blogs',
  include: '**/*.mdx',
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    summary: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    content: z.string(),
  }),
})

export default defineConfig({
  collections: [projects, blogs],
})
