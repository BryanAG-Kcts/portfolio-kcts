import { Canvas } from '@react-three/fiber'
import { CanvasConfig } from './canvasConfig'
import { CanvasFigure } from './canvasFigure'
import { CanvasParticles } from './canvasParticles'

export function HeroBackground() {
  return (
    <figure className='absolute inset-0 -z-10 cursor-grab'>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <CanvasConfig />
        <CanvasParticles
          amount={500}
          size={0.04}
          spread={10}
        />

        <CanvasFigure />
      </Canvas>
    </figure>
  )
}
