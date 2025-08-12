import { Canvas } from '@react-three/fiber'
import { CanvasConfig } from './canvasConfig'
import { CanvasParticles } from './canvasParticles'

export function HeroBackground() {
  return (
    <figure className='absolute inset-0 -z-10'>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <CanvasConfig />
        <CanvasParticles
          amount={500}
          size={0.04}
          spread={10}
        />

        <mesh
          position={[0, 0, 0]}
          rotation={[10, 45, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={'red'} />
        </mesh>
      </Canvas>
    </figure>
  )
}
