import type { ComponentProps } from 'react'
import { useCountUp } from 'react-countup'
import type { UseCountUpProps } from 'react-countup/build/useCountUp'

interface Props extends ComponentProps<'span'> {
  countOptions: UseCountUpProps & { ref: string }
}
export function Counter({ countOptions, ...props }: Props) {
  useCountUp(countOptions)
  return (
    <span
      id={countOptions.ref}
      {...props}>
      {countOptions.start ?? 0}
      {countOptions.suffix}
    </span>
  )
}
