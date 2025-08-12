import { OrbitControls } from '@react-three/drei'

export function CanvasConfig() {
  return (
    <>
      <ambientLight
        color={'#1a1a40'}
        intensity={0.2}
      />

      <directionalLight
        intensity={1}
        position={[5, 5, 5]}
      />

      <OrbitControls
        enablePan={false}
        maxDistance={20}
        minDistance={5}
      />
    </>
  )
}
