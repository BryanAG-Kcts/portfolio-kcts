import { pdfController } from '@/backend/controller/pdf/controller'
import { NextResponse } from 'next/server'

export const GET = (): NextResponse => {
  const [err, cv] = pdfController.getPdf('cv', 'cv.pdf')

  if (err) {
    return NextResponse.json({ error: err }, { status: 404 })
  }

  return new NextResponse(cv)
}
