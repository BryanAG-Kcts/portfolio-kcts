import { RouterLangsProps, languages } from '@/locales/constants/constants'
import { Hero } from './components/hero/hero'
import { Experience } from './components/experience/experience'
import { Skills } from './components/skills/skills'
import { Information } from './components/information/information'
import { BackendProjects } from './components/backendProject/backendProjects'
import { Header } from './components/header/header'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

const Gallery = dynamic(async () => await import('./components/frontendProject/gallery').then(m => m.Gallery))
const About = dynamic(async () => await import('./components/about/about').then(m => m.About))
const Footer = dynamic(async () => await import('./components/footer/footer').then(m => m.Footer))

export default function Page ({ params }: RouterLangsProps): JSX.Element {
  if (!(params.lang in languages)) notFound()

  return (
    <>
      <Header params={params} />
      <Hero params={params} />
      <section id='mainContent' className='greatSection p-2'>
        <Experience params={params} />

        <main className='flex flex-col w-full gap-6 p-3 rounded-lg sectionContentDarkmode bg-slate-100 md:flex-row'>
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
    </>
  )
}
