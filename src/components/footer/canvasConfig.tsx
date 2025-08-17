import { OrbitControls } from '@react-three/drei'
import { getPrimaryColor } from '@/lib/utils'

export function CanvasConfig() {
  const color = getPrimaryColor()
  return (
    <>
      <ambientLight
        color={color}
        intensity={1}
      />

      <directionalLight
        intensity={1}
        position={[1, 1, 1]}
      />

      <OrbitControls
        enablePan={false}
        maxDistance={5}
        minDistance={3}
        maxPolarAngle={1.5}
        minPolarAngle={1.5}
      />
    </>
  )
}
