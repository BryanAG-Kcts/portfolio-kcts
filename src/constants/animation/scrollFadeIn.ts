import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function yScrollFadeIn(elementClass: string, duration: number) {
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
}

export function xScrollFadeIn(
  elementClass: string,
  duration: number,
  invert = false
) {
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
}
