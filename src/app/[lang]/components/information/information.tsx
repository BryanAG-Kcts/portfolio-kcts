import { RouterLangsProps } from '@/locales/constants/constants'
import { getLocale } from '@/locales/main'
import { TitleGenerator } from '@/shared/components/titleGenerator/titleGenerator'
import { Infos } from './infos'
import { ButtonGrow } from '@/shared/components/buttonGrow/buttonGrow'
import Link from 'next/link'

export const Information = ({ params }: RouterLangsProps): JSX.Element => {
  const { information, indie } = getLocale(params.lang)

  return (
    <section className='flex flex-col items-center w-full gap-4 font-quickSand'>
      <TitleGenerator>
        {information.name}
      </TitleGenerator>
      <div className='w-full max-w-[500px] flex flex-col gap-5 px-5 py-3 bg-white rounded-2xl cardContentDarkmode'>
        <Infos information={information.information} />
        <ButtonGrow>
          <Link href='/cv'>{indie.cvLink}</Link>
        </ButtonGrow>
        <ButtonGrow>
          <Link href={`/certificate/langs/${params.lang}`}>{indie.certificateLink}</Link>
        </ButtonGrow>
      </div>
    </section>
  )
}
