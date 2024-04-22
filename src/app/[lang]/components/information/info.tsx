import { noLink } from '@/locales/constants/information'
import { Information } from '@/locales/main'

interface Props {
  information: Information
}
export const Info = ({ information }: Props): JSX.Element => {
  const { answer, name, path, link } = information
  const isSelectable = link !== noLink ? '' : 'selected-none'
  return (
    <span className='flex justify-between gap-5'>

      <div className='flex items-center gap-3'>
        <img title={name} src={path} alt={name} className='w-4 h-4' />
        <p className='whitespace-nowrap'>{name} :</p>
      </div>

      <a href={link} target='_blank' className={`font-medium truncate duration-150 hover:text-lt-color-green-100 ${isSelectable}`} rel='noreferrer noopener'>{answer}</a>

    </span>
  )
}
