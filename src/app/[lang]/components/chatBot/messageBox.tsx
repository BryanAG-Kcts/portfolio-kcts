import { Message } from '@/shared/hooks/useChatBox/message'

interface Props {
  msj: Message
}
export const MessageBox = ({ msj }: Props): JSX.Element => {
  const { message, role } = msj

  if (role === 'model') return <p>{message}</p>

  return (
    <div className='flex justify-end'>
      <p className='text-right p-2 bg-slate-200 rounded-md cardContentDarkmode'>{message}</p>
    </div>
  )
}
