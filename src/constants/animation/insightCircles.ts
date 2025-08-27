import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export function insightCircles() {
  const circles = gsap.utils.toArray<HTMLElement>('.insight-circle-load')
  circles.forEach(circle => {
    gsap.to(circle, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: circle,
        start: 'top 80%',
        end: 'bottom -80%',
        scrub: 2
      }
    })
  })
}
