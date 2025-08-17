import { Canvas } from '@react-three/fiber'
import { CanvasParticles } from '../hero/canvasParticles'
import { CanvasConfig } from './canvasConfig'
import { FooterWave } from './footerWave'

export function FooterCanvas() {
  return (
    <figure className='w-full h-[50vh] cursor-grab'>
      <Canvas camera={{ position: [0, 1, 1], fov: 45 }}>
        <CanvasConfig />
        <CanvasParticles
          amount={500}
          size={0.02}
          spread={7}
        />
        <FooterWave
          position={[0, 0, 0]}
          speed={0.8}
          amplitude={0.2}
        />
      </Canvas>
    </figure>
  )
}
