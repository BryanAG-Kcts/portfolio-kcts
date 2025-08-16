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
    sections: z.array(
      z.object({
        link: z.string(),
        name: z.string()
      })
    )
  })
})

const techStack = defineCollection({
  type: 'content',
  schema: z.object({
    frontend: z.string(),
    backend: z.string(),
    learning: z.string(),
    tools: z.string(),
    skillLevel: z.object({
      0: z.string(),
      1: z.string(),
      2: z.string(),
      3: z.string(),
      4: z.string()
    })
  })
})

const footer = defineCollection({
  type: 'content',
  schema: z.object({
    github: z.string(),
    gmail: z.string(),
    linkedin: z.string(),
    copyright: z.string()
  })
})

export const collections = { hero, stats, header, techStack, footer }
