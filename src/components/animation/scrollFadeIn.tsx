import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

interface YProps {
  elementClass: string
  duration: number
}

export function YScrollFadeIn({ elementClass, duration }: YProps) {
  useGSAP(() => {
    const cards = gsap.utils.toArray(elementClass) as string[]
    cards.forEach(card => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration,
        pointerEvents: 'none',
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 70%'
        }
      })
    })
  })

  return null
}

interface XProps {
  elementClass: string
  duration: number
  invert?: boolean
}
export function XScrollFadeIn({
  elementClass,
  duration,
  invert = false
}: XProps) {
  useGSAP(() => {
    const cards = gsap.utils.toArray(elementClass) as string[]
    cards.forEach(card => {
      gsap.from(card, {
        x: invert ? -100 : 100,
        opacity: 0,
        duration,
        pointerEvents: 'none',
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 70%'
        }
      })
    })
  })

  return null
}
