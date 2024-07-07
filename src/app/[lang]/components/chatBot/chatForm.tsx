'use client'
import { Languages } from '@/locales/constants/constants'
import { getLocale } from '@/locales/main'
import { postData } from '@/shared/constants/petitions'
import { Message } from '@/shared/hooks/useChatBox/message'
import { useChatBoxContext } from '@/shared/hooks/useChatBox/useChatBox'
import { FormEvent, useContext } from 'react'

interface Props {
  lang: Languages
}
export const ChatForm = ({ lang }: Props): JSX.Element => {
  const { send, placeholder } = getLocale(lang).chatBot
  const { addMessage } = useContext(useChatBoxContext)

  function submitMessage (event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const data = formData.get('message')
    if (data == null || data === '') return

    const message = new Message('user', data as string)
    addMessage(message)
    void submitResponse(message)
    form.reset()
  }

  async function submitResponse (message: Message): Promise<void> {
    const response = await postData('/api/chatBot', {
      input: message.message
    })

    if (response == null) return alert('Error')
    addMessage(new Message('model', response.data))
  }

  return (
    <form onSubmit={submitMessage} className='flex gap-3'>
      <input placeholder={placeholder} name='message' className='flex-1 px-3 py-2 rounded-lg bg-slate-200 outline-none cardContentDarkmode' type='text' />
      <button className='bg-lt-color-green-200 px-3 py-2 rounded-md font-semibold text-white hover:bg-lt-color-green-100 transition-colors'>{send}</button>
    </form>
  )
}
