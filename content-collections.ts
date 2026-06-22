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

export default defineConfig({
  collections: [projects],
})
