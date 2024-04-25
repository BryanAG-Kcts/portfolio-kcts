'use client'
import { useState } from 'react'
import { themeIcon } from './constants'
import './darkmode.css'

export const DarkMode = (): JSX.Element => {
  const [selectColorMode, setSelectColorMode] = useState(false)
  const { moon, sun } = themeIcon

  const changeDarkMode = (): void => {
    setSelectColorMode(!selectColorMode)
    document.body.classList.toggle('dark')
  }

  const primaryIcon = selectColorMode ? moon : sun
  const secondaryIcon = !selectColorMode ? moon : sun

  return (
    <button aria-label='DarkMode' className='darkmodeBtn flex relative justify-center' onClick={changeDarkMode}>
      <img title='darkMode' className='firstIcon' src={primaryIcon.icon} alt={primaryIcon.name} />
      <img title='darkMode' className='secondIcon' src={secondaryIcon.icon} alt={secondaryIcon.name} />
    </button>
  )
}
