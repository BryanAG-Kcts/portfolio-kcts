'use client'

import { useChatBoxContext } from '@/shared/hooks/useChatBox/useChatBox'
import { MessageBox } from './messageBox'
import { useContext } from 'react'

export const MessagesBox = (): JSX.Element => {
  const { messages } = useContext(useChatBoxContext)

  return (
    <article className='flex flex-col gap-4 p-4'>
      {messages.map((message, index) => <MessageBox key={`${message.message} ${index}`} msj={message} />)}
    </article>
  )
}
