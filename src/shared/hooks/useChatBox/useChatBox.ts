import { createContext, useState } from 'react'
import { UseChatBox } from './chatTypes'
import { Message } from './message'

export function useChatBox (): UseChatBox {
  const [messages, setMessages] = useState<Message[]>([])

  function addMessage (newMessage: Message): void {
    messages.push(newMessage)
    console.log(messages)
    setMessages([...messages])
  }

  return {
    messages,
    addMessage
  }
}

export const useChatBoxContext = createContext<UseChatBox>({
  messages: [],
  addMessage: () => {}
})
