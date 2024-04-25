import { Languages } from '@/locales/constants/constants'
import { Hero } from './components/hero/hero'
import { Experience } from './components/experience/experience'
import { Skills } from './components/skills/skills'
import { Information } from './components/information/information'
import { BackendProjects } from './components/backendProject/backendProjects'
import { Gallery } from './components/frontendProject/gallery'
import { About } from './components/about/about'

interface Props {
  params: {
    lang: Languages
  }
}

export default function Page ({ params }: Props): JSX.Element {
  return (
    <>
      <Hero params={params} />
      <section id='mainContent' className='greatSection p-2 sectionContentDarkmode'>
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
    </>
  )
}
