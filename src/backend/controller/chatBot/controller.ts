import { chatSession } from '@/backend/constants/chatBot/chatBot'

export const chatBotController = {
  async modelAnswer (prompt: string): Promise<string> {
    const response = await chatSession.sendMessage(prompt)
    return response.response.text()
  }
}
