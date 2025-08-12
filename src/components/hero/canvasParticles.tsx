import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Points } from 'three'

interface Props {
  amount: number
}

export function CanvasParticles({ amount }: Props) {
  const pointsRef = useRef<Points>(null)
  const particles = generateParticles(amount)

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005
      pointsRef.current.rotation.x += 0.0002
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
        color={'#ffffff'}
        opacity={0.8}
        size={0.02}
        sizeAttenuation
        transparent
      />
    </points>
  )
}

function generateParticles(amount: number) {
  const particles = new Float32Array(amount * 3)

  for (let i = 0; i < amount; i++) {
    const x = (Math.random() - 0.5) * 10
    const y = (Math.random() - 0.5) * 10
    const z = (Math.random() - 0.5) * 10

    particles[i * 3] = x
    particles[i * 3 + 1] = y
    particles[i * 3 + 2] = z
  }

  return particles
}
