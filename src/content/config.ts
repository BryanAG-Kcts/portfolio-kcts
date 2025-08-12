import { defineCollection, z } from 'astro:content'

const hero = defineCollection({
  type: 'content',
  schema: z.object({
    wordList: z.array(z.string())
  })
})

export const collections = { hero }
