import { Languages } from '@/locales/constants'
import { Hero } from './shared/home/components/hero/hero'

interface Props {
  params: {
    lang: Languages
  }
}

export default async function Page ({ params }: Props): Promise<JSX.Element> {
  return (
    <>
      <Hero params={params} />
    </>
  )
}
