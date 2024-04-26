import { RouterLangsProps } from '@/locales/constants/constants'
import { getLocale } from '@/locales/main'
import { DarkMode } from '@/shared/components/darkmode/darkmode'
import { TitleGenerator } from '@/shared/components/titleGenerator/titleGenerator'
import { Gallery } from './components/gallery/gallery'

export default function Page ({ params }: RouterLangsProps): JSX.Element {
  const { certificates, paragraph, title } = getLocale(params.lang).certificate
  return (
    <main className='flex flex-col items-center py-7 font-quickSand gap-7 px-3 bgPolygonal relative overflow-x-hidden'>
      <article className='text-white'>
        <TitleGenerator>{title}</TitleGenerator>
        <p className='text-center my-3'>{paragraph}</p>
      </article>

      <Gallery certificates={certificates} />

      <div className='absolute top-0 right-0 m-6 bg-white p-3 rounded-full sectionContentDarkmode'>
        <DarkMode />
      </div>
    </main>
  )
}
