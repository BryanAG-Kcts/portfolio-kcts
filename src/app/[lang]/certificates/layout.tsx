import { FollowBall } from '@/shared/components/followBall/followBall'

interface Props {
  children: JSX.Element
}
export default function Layout ({ children }: Props): JSX.Element {
  return (
    <>
      <FollowBall />
      {children}
    </>
  )
}
