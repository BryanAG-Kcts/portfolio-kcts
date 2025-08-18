import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

interface Props {
  elementClass: string
}

export function ScrollShow({ elementClass}: Props) {
  useGSAP(() => {
    const cards = gsap.utils.toArray(elementClass) as string[]
    cards.forEach(card => {
      gsap.fromTo(
        card,
        {
          clipPath: 'inset(0% 0% 100% 0%)'
        },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: card,
            start: `top 70%`,
            end: `bottom 30%`,
            scrub: 2
          }
        }
      )
    })
  })

  return null
}
