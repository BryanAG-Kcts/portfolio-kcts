import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import type { Points, PointsMaterial } from 'three'
import { getPrimaryColor } from '@/lib/utils'

interface Props {
  amount: number
  spread: number
  size: number
}

export function CanvasParticles({ amount, spread, size }: Props) {
  const pointsRef = useRef<Points>(null)
  const { pointer } = useThree()
  const particles = generateParticles(amount, spread)
  const color = getPrimaryColor()

  useFrame(state => {
    if (pointsRef.current) {
      const t = state.clock.getElapsedTime()
      const material = pointsRef.current.material as PointsMaterial
      material.opacity = Math.min(t / 1.5, 0.8)
      pointsRef.current.rotation.y += 0.001 + pointer.x * 0.005
      pointsRef.current.rotation.x += 0.001 + pointer.y * 0.005
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          args={[particles, amount]}
          attach='attributes-position'
          count={amount}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color={color}
        opacity={0}
        size={size}
        sizeAttenuation
        transparent
      />
    </points>
  )
}

function generateParticles(amount: number, spread: number) {
  const particles = new Float32Array(amount * 3)

  for (let i = 0; i < amount; i++) {
    const x = (Math.random() - 0.5) * spread
    const y = (Math.random() - 0.5) * spread
    const z = (Math.random() - 0.5) * spread

    particles[i * 3] = x
    particles[i * 3 + 1] = y
    particles[i * 3 + 2] = z
  }

  return particles
}
