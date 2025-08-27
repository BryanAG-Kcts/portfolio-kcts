import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export function scrollShowScale(elementClass: string) {
  const cards = gsap.utils.toArray(elementClass) as string[]
  cards.forEach(card => {
    gsap.fromTo(
      card,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: 'back.out(2)',
        duration: 0.5,
        scrollTrigger: {
          trigger: card,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
}
