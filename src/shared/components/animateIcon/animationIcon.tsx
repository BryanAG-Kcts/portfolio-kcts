import { ReactNode } from 'react'
import './animationIcon.css'

interface animationIconProps {
  children: ReactNode
}

export const AnimationIcon = ({ children }: animationIconProps): JSX.Element => {
  return (
    <span className='animationIcon select-none'>
      {children}
    </span>
  )
}
