import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useCanvas } from '../../hooks/use-canvas'
import { RAF } from '../raf'
import s from './webgl.module.scss'

export function WebGLCanvas() {
  const { WebGLTunnel, DOMTunnel } = useCanvas()

  return (
    <div className={s.webgl}>
      <Canvas
        gl={
          {
            // powerPreference: 'high-performance',
            // antialias: true,
            // alpha: true,
            // stencil: false,
            // depth: true,
          }
        }
        shadows
        dpr={[1, 2]}
        eventPrefix="client"
        // orthographic
        // camera={{ position: [0, 0, 5000], near: 0.001, far: 10000, zoom: 1 }}
        frameloop="never"
        camera={{ position: [20, 0.9, 20], fov: 26 }}
        //   linear
        flat
      >
        <Suspense>
          {/* <OrthographicCamera
            makeDefault
            position={[0, 0, 5000]}
            near={0.001}
            far={10000}
            zoom={1}
          /> */}
          {/* <PerspectiveCamera
            makeDefault
            position={[0, 0, 5]}
            // near={0.001}
            // far={10000}
            // zoom={1}
          /> */}
          <RAF />
          {/* <PostProcessing /> */}
          <WebGLTunnel.Out />
        </Suspense>
      </Canvas>
      <DOMTunnel.Out />
    </div>
  )
}
