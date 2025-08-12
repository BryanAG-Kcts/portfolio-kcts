import { OrbitControls } from '@react-three/drei'
import { getPrimaryColor } from '@/lib/utils'

export function CanvasConfig() {
  const color = getPrimaryColor()
  return (
    <>
      <ambientLight
        color={color}
        intensity={0.2}
      />

      <directionalLight
        intensity={1}
        position={[5, 5, 5]}
      />

      <OrbitControls
        enablePan={false}
        maxDistance={10}
        minDistance={5}
      />
    </>
  )
}
