import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Mesh, MeshBasicMaterial } from 'three'
import { useSphereSize } from '@/hooks/useSphereSize'

export function CanvasFigure() {
  const meshRef = useRef<Mesh>(null)
  const size = useSphereSize()

  useFrame(state => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime()
      const material = meshRef.current.material as MeshBasicMaterial
      material.opacity = Math.min(t / 1.5, 0.8)
      meshRef.current.rotation.y += 0.001
      meshRef.current.rotation.x += 0.001
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[size, 1]} />
      <meshBasicMaterial
        color='#00bcd4'
        opacity={0}
        transparent
        wireframe
      />
    </mesh>
  )
}
