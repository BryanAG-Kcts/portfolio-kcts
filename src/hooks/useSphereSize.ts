import { useEffect, useState } from 'react'

export function useSphereSize() {
  const [size, setSize] = useState(getSize())

  useEffect(() => {
    const handleResize = () => {
      setSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return size
}

function getSize() {
  const width = window.innerWidth
  if (width < 640) return 1.5
  if (width < 1024) return 2
  return 2.5
}
