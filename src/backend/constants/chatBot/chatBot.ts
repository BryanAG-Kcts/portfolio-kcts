import { GoogleGenerativeAI, GenerationConfig } from '@google/generative-ai'
import { chatbotContext } from './chatBotContext'

const apiKey = process.env.GOOGLE_AI_API_KEY ?? ''
const generativeAI = new GoogleGenerativeAI(apiKey)
const model = generativeAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

const generationConfig: GenerationConfig = {
  temperature: 1.2,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain'
}

export const chatSession = model.startChat({
  generationConfig,
  history: chatbotContext
})
