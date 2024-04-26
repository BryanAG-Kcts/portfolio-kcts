
import { RouterLangsProps } from '@/locales/constants/constants'
import { getLocale } from '@/locales/main'
import { Metadata } from 'next'

interface Props {
  children: JSX.Element

}

export const generateMetadata = ({ params }: RouterLangsProps): Metadata => {
  const { title, description } = getLocale(params.lang).head

  return {
    title,
    description
  }
}

export default function Layout ({ children }: Props): JSX.Element {
  return children
}
