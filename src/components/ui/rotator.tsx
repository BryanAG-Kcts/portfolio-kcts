import { Children, type JSX, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  interval: number
  children: JSX.Element[]
}

export function Rotator({ interval, children }: Props) {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const items = Children.toArray(children)

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((index + 1) % items.length)
        setFade(true)
      }, 300)
    }, interval)

    return () => clearInterval(timer)
  }, [index, items, interval])

  return (
    <span
      className={cn(
        'inline-block transition-all duration-300',
        fade ? 'opacity-100 translate-0' : 'opacity-0 translate-y-2.5'
      )}>
      {items[index]}
    </span>
  )
}
