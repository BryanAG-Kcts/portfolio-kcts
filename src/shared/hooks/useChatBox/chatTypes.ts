import { Message } from './message'

export interface UseChatBox {
  messages: Message[]
  addMessage: (newMessage: Message) => void
}
