import { Languages, getLocale } from '@/locales/constants'
import { Metadata } from 'next'

interface Props {
  children: JSX.Element
  params: {
    lang: Languages
  }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  const { title, description } = getLocale(params.lang).head

  return {
    title,
    description
  }
}

export default function Layout ({ children, params }: Props): JSX.Element {
  return children
}
