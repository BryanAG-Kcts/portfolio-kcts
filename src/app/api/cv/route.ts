import { statusCode } from '@/backend/constants/status/statusCode'
import { pdfController } from '@/backend/controller/pdf/controller'
import { NextResponse } from 'next/server'

export const GET = (): NextResponse => {
  const [err, pdf] = pdfController.getPdf('cv', 'cv.pdf')

  if (err) {
    return NextResponse.json({ error: err }, { status: statusCode.notFound })
  }

  return new NextResponse(pdf, { status: statusCode.ok })
}
