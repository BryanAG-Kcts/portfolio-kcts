import { Button } from './button'

interface Props extends Omit<React.ComponentProps<typeof Button>, 'asChild'> {
  href: string
}
export function LinkButton({ href, ...props }: Props) {
  return (
    <Button
      asChild
      {...props}>
      <a href={href}>{props.children}</a>
    </Button>
  )
}
