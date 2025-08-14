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

const header = defineCollection({
  type: 'content',
  schema: z.object({
    contact: z.string(),
    sections: z.array(z.object({
      link: z.string(),
      name: z.string()
    }))
  })
})

export const collections = { hero, stats, header }
