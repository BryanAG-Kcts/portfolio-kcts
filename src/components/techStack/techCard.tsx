import type { JSX } from 'react'
import { Card, CardContent } from '../ui/card'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'

interface Props {
  children: JSX.Element
  name: string
  level: string
  textLevel: string
}
export function TechCard({ children, name, level, textLevel }: Props) {
  return (
    <HoverCard openDelay={400}>
      <HoverCardTrigger asChild>
        <Card className='tech-stack-card'>
          <CardContent>{children}</CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className='w-auto'>
        <div className='flex items-center gap-4'>
          {children}
          <div>
            <p className='font-[Poppins] font-bold'>{name}</p>
            <p>
              {textLevel}: {level}
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
