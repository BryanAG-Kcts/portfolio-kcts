'use client'
import { useEffect } from 'react'
import './followBall.css'

export const FollowBall = (): JSX.Element => {
  const followBall = (e: MouseEvent): void => {
    const followBall = document.getElementById('followBall') as HTMLElement
    followBall.style.setProperty('--moveX', `${e.clientX + 30}px`)
    followBall.style.setProperty('--moveY', `${e.clientY + 30}px`)
  }

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android|Windows Phone/i.test(navigator.userAgent)
    if (isMobile) return

    window.addEventListener('mousemove', followBall)
    return () => window.removeEventListener('mousemove', followBall)
  }, [])

  return (
    <section className='fixed top-0 left-0 w-full h-screen z-50 pointer-events-none'>
      <span id='followBall' className='w-12 h-12 z-50 rounded-full' />
    </section>
  )
}
