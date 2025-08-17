import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Mesh, MeshStandardMaterial, PlaneGeometry } from 'three'
import { getPrimaryColor } from '@/lib/utils'

interface Props {
  position: [number, number, number]
  speed: number
  amplitude: number
}

export function FooterWave({ position, speed, amplitude }: Props) {
  const meshRef = useRef<Mesh>(null)
  const geometryRef = useRef<PlaneGeometry>(null)
  const color = getPrimaryColor()

  useFrame(({ clock }) => {
    if (!geometryRef.current || !meshRef.current) return
    const t = clock.getElapsedTime()
    const position = geometryRef.current.attributes.position
    const material = meshRef.current.material as MeshStandardMaterial
    material.opacity = Math.min(t / 3, 0.3)
    const time = t * speed

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i)
      const y = position.getY(i)
      const z = Math.sin(x * 1.5 + time) * Math.cos(y * 1.5 + time) * amplitude
      position.setZ(i, z)
    }

    position.needsUpdate = true
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry
        ref={geometryRef}
        args={[10, 10, 50, 50]}
      />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0}
      />
    </mesh>
  )
}
