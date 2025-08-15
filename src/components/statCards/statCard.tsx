import type { JSX } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

interface Props {
  children: JSX.Element
  content: string
}
export function StatCard({ children, content }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{children}</CardTitle>
        <CardDescription>{content}</CardDescription>
      </CardHeader>
    </Card>
  )
}
