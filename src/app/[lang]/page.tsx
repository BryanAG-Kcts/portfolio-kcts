import { Languages } from '@/locales/constants/constants'
import { Hero } from './components/hero/hero'
import { Experience } from './components/experience/experience'
import { Skills } from './components/skills/skills'
import { Information } from './components/information/information'
import { BackendProjects } from './components/backendProject/backendProjects'

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

        <div className='flex flex-col w-full gap-6 p-3 rounded-lg sectionContentDarkmode bg-slate-100 md:flex-row'>
          <aside className='flex flex-col items-center flex-1 gap-6'>
            <Skills params={params} />
            <Information params={params} />
          </aside>
          <BackendProjects params={params} />
        </div>

      </section>
    </>
  )
}
