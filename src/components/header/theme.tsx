import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { toggleTheme } from '@/constants/toggleTheme'
import { Button } from '../ui/button'

interface Props {
  themeLabel: string
}
export function Theme({ themeLabel }: Props) {
  const [isDark, setIsDark] = useState(true)
  const Logo = isDark ? Moon : Sun

  function handleDark() {
    const darkToggled = toggleTheme()
    setIsDark(darkToggled)
  }

  return (
    <Button
      onClick={handleDark}
      variant='secondary'
      className='cursor-pointer'
      aria-label={themeLabel}>
      <Logo />
    </Button>
  )
}
