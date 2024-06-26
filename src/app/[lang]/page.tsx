import { RouterLangsProps } from '@/locales/constants/constants'
import { Hero } from './components/hero/hero'
import { Experience } from './components/experience/experience'
import { Information } from './components/information/information'
import { BackendProjects } from './components/backendProject/backendProjects'
import { Header } from './components/header/header'

import dynamic from 'next/dynamic'
import { FallingStars } from '@/shared/components/fallingStars/fallingStars'
import { HoverTechnology } from '@/shared/components/technologies/hoverTechnology'

const Gallery = dynamic(async () => await import('./components/frontendProject/gallery').then(m => m.Gallery))
const About = dynamic(async () => await import('./components/about/about').then(m => m.About))
const Footer = dynamic(async () => await import('./components/footer/footer').then(m => m.Footer))
const Skills = dynamic(async () => await import('./components/skills/skills').then(m => m.Skills))

export default function Page ({ params }: RouterLangsProps): JSX.Element {
  return (
    <>
      <Header params={params} />
      <Hero params={params} />
      <section id='mainContent' className='greatSection p-2'>
        <Experience params={params} />

        <main className='flex flex-col w-full gap-6 p-3 rounded-lg sectionContentDarkmode bg-slate-100 md:flex-row overflow-hidden'>
          <aside className='flex flex-col items-center flex-1 gap-6'>
            <Skills params={params} />
            <Information params={params} />
          </aside>
          <BackendProjects params={params} />
        </main>

        <Gallery params={params} />
        <About params={params} />

        {/* <span className='precharge text-dk-color-gray-100 bg-dk-color-gray-100 text-lt-color-yellow-100 text-dk-color-blue-100 bg-lt-color-green-100 bg-lt-color-green-200 bg-lt-color-yellow-100 bg-dk-color-blue-100 bg-black text-black text-lt-color-blue-100 bg-lt-color-blue-100' /> */}

      </section>
      <Footer />
      <HoverTechnology />
      <FallingStars />
    </>
  )
}
