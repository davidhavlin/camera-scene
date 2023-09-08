import state from '@/config/state.json'
import { Canvas } from '@react-three/fiber'
import { getProject } from '@theatre/core'
import { SheetProvider } from '@theatre/r3f'
import { Suspense } from 'react'
import { useCanvas } from '../../hooks/use-canvas'
import { RAF } from '../raf'
import s from './webgl.module.scss'

const sheet = getProject('outloud', { state: state }).sheet('Scene')

export function WebGLCanvas() {
  const { WebGLTunnel, DOMTunnel } = useCanvas()
  console.log({ sheet })

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
        // camera={{ position: [20, 0.9, 20], fov: 26 }}
        //   linear
        flat
      >
        <SheetProvider sheet={sheet}>
          {/* <SheetProvider id="WebGL"> */}
          <Suspense>
            {/* <OrthographicCamera
            makeDefault
            position={[0, 0, 5000]}
            near={0.001}
            far={10000}
            zoom={1}
          /> */}
            {/* <Group theatreKey="camera"> */}
            {/* <CameraGroup /> */}
            {/* <PerspectiveCamera
                makeDefault
                position={[20, 0.9, 20]}
                fov={26}
                // near={0.001}
                // far={10000}
                // zoom={1}
              /> */}
            {/* </Group> */}
            <RAF />
            {/* <PostProcessing /> */}
            <WebGLTunnel.Out />
          </Suspense>
          {/* </SheetProvider> */}
        </SheetProvider>
      </Canvas>
      <DOMTunnel.Out />
    </div>
  )
}
