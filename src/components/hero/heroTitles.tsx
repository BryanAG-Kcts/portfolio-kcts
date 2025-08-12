import { Rotator } from '../ui/rotator'

interface Props {
  titles: string[]
}

export function HeroTitles({ titles }: Props) {
  return (
    <Rotator interval={2000}>
      {titles.map(title => (
        <h1
          className='text-4xl font-bold'
          key={title}>
          {title}
        </h1>
      ))}
    </Rotator>
  )
}
