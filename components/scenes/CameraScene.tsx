import {
  AccumulativeShadows,
  Center,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useCanvas } from 'libs/webgl/hooks/use-canvas'
import { useRef } from 'react'
import s from './CameraScene.module.scss'
import { Model } from './Model'

// const WebGL = dynamic(
//   () => import('../../components/hero/webgl').then(({ WebGL }) => WebGL),
//   {
//     ssr: false,
//   },
// )

export function WebGL() {
  // const { nodes, materials } = useGLTF('/glass-transformed.glb')
  const meshRef = useRef()

  useFrame((_, deltaTime) => {
    // meshRef.current.rotation.x += deltaTime
    // meshRef.current.rotation.y += deltaTime
  })

  return (
    <>
      {/* <Stage shadows="accumulative"> */}
      {/* <color args={['ivory']} attach="background" /> */}
      <color attach="background" args={['#f0f0f0']} />
      <OrbitControls />

      <Center>
        <group position={[0, -0.5, 0]} rotation={[0, -0.75, 0]}>
          {/* <Center> */}
          {/* <group position={[0, 1, 0]} rotation={[0, -0.75, 0]} dispose={null}> */}
          <group dispose={null}>
            <Model />
          </group>
          {/* </Center> */}

          <AccumulativeShadows
            frames={100}
            alphaTest={0.85}
            opacity={0.8}
            color="red"
            scale={30}
            position={[0, -0.005, 0]}
          >
            <RandomizedLight
              amount={8}
              radius={6}
              ambient={0.5}
              intensity={1}
              position={[-1.5, 2.5, -2.5]}
              bias={0.001}
            />
          </AccumulativeShadows>
        </group>
      </Center>

      {/* <Stage
        intensity={0.5}
        environment="city"
        shadows={{ type: 'accumulative', bias: -0.001 }}
        adjustCamera={false}
      > */}
      {/* <Stage
        environment="sunset"
        shadows={{ type: 'contact', opacity: 0.2, blur: 3 }}
        preset="portrait"
        intensity={2}
      > */}
      {/* <mesh castShadow>
          <boxGeometry />
          <meshStandardMaterial color="grey" />
        </mesh> */}
      {/* </Stage> */}

      {/* <mesh scale={1} ref={meshRef}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}

      {/* <Environment preset="sunset" background blur={0} /> */}
      <Env perfSucks={false} />
    </>
  )
}

function Env({ perfSucks }: any) {
  const ref = useRef()
  useFrame((state, delta) => {
    if (!perfSucks) {
      // easing.damp3(ref.current.rotation, [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x], 0.2, delta)
      // easing.damp3(state.camera.position, [Math.sin(state.pointer.x / 4) * 9, 1.25 + state.pointer.y, Math.cos(state.pointer.x / 4) * 9], 0.5, delta)
      // state.camera.lookAt(0, 0, 0)
    }
  })
  return (
    <Environment
      frames={perfSucks ? 1 : Infinity}
      preset="city"
      resolution={256}
      background
      blur={0.8}
    >
      <Lightformer
        intensity={4}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <Lightformer
        intensity={4}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <group rotation={[Math.PI / 2, 1, 0]}>
        {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
          <Lightformer
            key={i}
            intensity={1}
            rotation={[Math.PI / 4, 0, 0]}
            position={[x, 4, i * 4]}
            scale={[4, 1, 1]}
          />
        ))}
        <Lightformer
          intensity={0.5}
          rotation-y={Math.PI / 2}
          position={[-5, 1, -1]}
          scale={[50, 2, 1]}
        />
        <Lightformer
          intensity={0.5}
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[50, 2, 1]}
        />
        <Lightformer
          intensity={0.5}
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[50, 2, 1]}
        />
      </group>
      <group ref={ref}>
        <Lightformer
          intensity={5}
          form="ring"
          color="red"
          rotation-y={Math.PI / 2}
          position={[-5, 2, -1]}
          scale={[10, 10, 1]}
        />
      </group>
    </Environment>
  )
}

export function CameraScene() {
  const { WebGLTunnel } = useCanvas()

  return (
    <section className={s.scene}>
      <WebGLTunnel.In>
        <WebGL />
      </WebGLTunnel.In>
    </section>
  )
}
