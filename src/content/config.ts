import { defineCollection, z } from 'astro:content'

const hero = defineCollection({
  type: 'content',
  schema: z.object({
    wordList: z.array(z.string())
  })
})

const stats = defineCollection({
  type: 'content',
  schema: z.object({
    number: z.number(),
    suffix: z.string()
  })
})

export const collections = { hero, stats }
