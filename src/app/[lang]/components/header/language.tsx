'use client'
import { Languages, RouterLangsProps } from '@/locales/constants/constants'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface Props {
  language: {
    name: string
    value: Languages
  }
}
export const Language = ({ language }: Props): JSX.Element => {
  const { lang } = useParams<RouterLangsProps['params']>()
  const { name, value } = language
  const isSelected = value === lang ? 'bg-lt-color-green-100' : ''
  return (
    <li className={`p-2 ${isSelected} rounded hover:opacity-75 hover:bg-dk-color-gray-100`}>
      <Link href={`/${value}`} scroll={false}>{name}</Link>
    </li>
  )
}
