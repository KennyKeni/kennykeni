import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
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
    featured: z.boolean().default(false),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document)
    return {
      ...document,
      mdx,
    }
  },
})

export default defineConfig({
  collections: [projects],
})
