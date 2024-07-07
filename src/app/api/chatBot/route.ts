import { chatBotController } from '@/backend/controller/chatBot/controller'
import { NextRequest, NextResponse } from 'next/server'

export async function POST (req: NextRequest): Promise<NextResponse> {
  const { input } = await req.json()
  const data = await chatBotController.modelAnswer(input)
  return NextResponse.json({
    data
  })
}

export function GET (): NextResponse {
  return NextResponse.json({
    message: 'Hello, world!'
  })
}
