import { Technology as ITechnology } from '@/locales/main'

interface Props {
  technology: ITechnology
}
export const Technology = ({ technology }: Props): JSX.Element => {
  const { icon, name, publicName } = technology
  return (
    <span title={publicName} className='p-4 bg-white rounded-lg select-none cardContentDarkmode'>
      <img className='w-16 h-16' src={icon} alt={name} />
    </span>
  )
}
