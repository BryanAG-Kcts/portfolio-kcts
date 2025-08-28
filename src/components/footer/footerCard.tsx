import type { JSX } from 'react'
import { Button } from '../ui/button'

interface Props {
  children: JSX.Element
  link: string
  title: string
}
export function FooterCard({ children, link, title }: Props) {
  return (
    <Button
      asChild
      variant='outline'
      size='icon'
      title={title}
      className='size-10 p-2'
      aria-label={title}>
      <a
        aria-label={title}
        target='_blank'
        rel='noopener noreferrer'
        href={link}>
        {children}
      </a>
    </Button>
  )
}
