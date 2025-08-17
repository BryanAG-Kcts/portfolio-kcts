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

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    time: z.string(),
    responsibilities: z.array(z.string())
  })
})

const certificates = defineCollection({
  type: 'content',
  schema: z.object({
    link: z.string(),
    approved: z.string()
  })
})

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    skills: z.array(z.string())
  })
})

const about = defineCollection({
  type: 'content',
  schema: z.object({
    cv: z.string(),
    contact: z.string(),
    cards: z.array(
      z.object({
        title: z.string(),
        icon: z.string(),
        content: z.string()
      })
    )
  })
})

export const collections = {
  hero,
  stats,
  header,
  techStack,
  footer,
  experience,
  projects,
  certificates,
  about
}
