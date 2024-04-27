import { Technology as ITechnology } from '@/locales/main'

interface Props {
  technology: ITechnology
}
export async function Technology ({ technology }: Props): Promise<JSX.Element> {
  const { icon, publicName } = technology
  const Icon = await icon
  return (
    <span title={publicName} className='p-4 bg-white rounded-lg select-none cardContentDarkmode transition-transform hover:scale-95'>
      <Icon className='w-16 h-16' />
    </span>
  )
}
