import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import { ReactNode } from 'react'
import { TitleWindow } from '@/shared/components/titleWindow/titleWindow'
import './globals.css'
import './styles/colors.css'
import './styles/darkMode.css'
import './styles/scroll.css'
import './styles/utilities.css'
import './styles/pulseHover.css'
import './styles/backgroundAnimation.css'

const quickSand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kactuswow | Desarrollador en Ocaña',
  description: 'Hola👋, soy Bryan Alvarez, desarrollador web en Ocaña. Sígueme en mi GitHub, convirtamos ideas a código',
  authors: [
    {
      name: 'Bryan David Alvarez',
      url: 'https://github.com/BryanAG-Kcts'
    }
  ],
  icons: {
    icon: '/images/kactuswowIcon.png'
  },
  keywords: ['portafolio', 'portfolio', 'Bryan Alvarez', 'kactus', 'BryanAG-Kcts', 'BryanAG', 'Kcts', 'Kactuswow', 'desarrollador', 'desarrollador Web', 'ocaña', 'github', 'developer', 'web developer'],
  alternates: {
    canonical: 'https://portfolio-kcts.vercel.app/'
  },
  manifest: '/manifest.json'

}

export default function RootLayout ({
  children
}: Readonly<{
  children: ReactNode
}>): JSX.Element {
  return (
    <html lang='es' suppressHydrationWarning>
      <head>
        <meta property='title' content='Portafolio Kcts' />
      </head>
      <body suppressHydrationWarning className={quickSand.className}>
        <TitleWindow />
        {children}
      </body>
    </html>
  )
}
