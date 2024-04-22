import { Languages } from '@/locales/constants'
import { Hero } from './shared/home/components/hero/hero'
import { Experience } from './shared/home/components/experience/experience'

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
      </section>
    </>
  )
}
