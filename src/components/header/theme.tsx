import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { toggleTheme } from '@/constants/toggleTheme'
import { Button } from '../ui/button'

export function Theme() {
  const [isDark, setIsDark] = useState(true)
  const Logo = isDark ? Moon : Sun

  function handleDark() {
    const darkToggled = toggleTheme()
    setIsDark(darkToggled)
  }

  return (
    <Button onClick={handleDark} variant='secondary' className='cursor-pointer'>
      <Logo />
    </Button>
  )
}
