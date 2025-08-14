import { Button } from '../ui/button'

interface Props {
  text: string
  link: string
}

export function ContactButton({ text, link }: Props) {
  return (
    <Button asChild>
      <a href={link}>{text}</a>
    </Button>
  )
}
