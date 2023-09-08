import { Center, Environment, Lightformer } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
// import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { useLenis } from '@studio-freight/react-lenis'
import { val } from '@theatre/core'
import { PerspectiveCamera, editable, useCurrentSheet } from '@theatre/r3f'
import { useCanvas } from 'libs/webgl/hooks/use-canvas'
import { useRef } from 'react'
import EGroup from '../EGroup'
import s from './MainScene.module.scss'
import { Model } from './Model'
// import { Model } from './Model'

// const WebGL = dynamic(
//   () => import('../../components/hero/webgl').then(({ WebGL }) => WebGL),
//   {
//     ssr: false,
//   },

// )
const randomVector = (r: any) => [
  r / 2 - Math.random() * r,
  r / 2 - Math.random() * r,
  r / 2 - Math.random() * r,
]
const randomEuler = () => [
  Math.random() * Math.PI,
  Math.random() * Math.PI,
  Math.random() * Math.PI,
]
const models = Array.from({ length: 30 }, (r = 10) => ({
  random: Math.random(),
  position: randomVector(r),
  rotation: randomEuler(),
}))

// function ModelInst({ random, ...props }: any) {
//   const ref = useRef()
//   useFrame((state) => {
//     const t = state.clock.getElapsedTime() + random * 10000
//     ref.current.rotation.set(Math.cos(t / 4) / 2, Math.sin(t / 4) / 2, Math.cos(t / 1.5) / 2)
//     ref.current.position.y = Math.sin(t / 1.5) / 2
//     ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, hovered ? 1.4 : 1, 0.1)
//   })

//   return (
//     <group {...props}>
//       <Instance ref={ref} />
//     </group>
//   )
// }

// function Models({ range = 30 }) {
//   const { nodes, materials } = useGLTF('/model.gltf')
//   return (
//     <Instances range={range} material={materials.phong1SG} geometry={nodes.Shoe.geometry}>
//       <group position={[0, 0, 0]}>
//         {models.map((props, i) => (
//           <ModelInst key={i} {...props} />
//         ))}
//       </group>
//     </Instances>
//   )
// }

export function WebGL() {
  // const { nodes, materials } = useGLTF('/glass-transformed.glb')
  const mainModelRef = useRef<any>()
  const meshRef = useRef()
  const sheet = useCurrentSheet()!
  console.log({ sheet })
  // const obj = sheet.object('nieco', { x: 0 })

  const { camera } = useThree()

  useLenis((l: any) => {
    const sequenceLength = val(sheet.sequence.pointer.length)
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = l.progress * sequenceLength

    // console.log('====================================')
    // console.log(mainModelRef.current.getFaceMesh().position)
    // console.log('====================================')
    // const meshPosition = mainModelRef.current.getFaceMesh().position
    // camera.lookAt(meshPosition)
  })

  useFrame(({ camera }, deltaTime) => {
    // const meshPosition = mainModelRef.current.getFaceMesh().position
    // camera.lookAt(meshPosition)
    // meshRef.current.rotation.x += deltaTime
    // meshRef.current.rotation.y += deltaTime
    // camera.loo
  })

  return (
    <>
      {/* <CameraGroup /> */}
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[20, 0.9, 20]}
        fov={26}
        near={0.1}
        far={70}
        attachArray={undefined}
        attachObject={undefined}
        attachFns={undefined}
      />
      {/* <Stage shadows="accumulative"> */}
      {/* <color args={['ivory']} attach="background" /> */}
      {/* <fog attach="fog" args={["#f0f0f0", 0, 20]} /> */}
      <color attach="background" args={['#f0f0f0']} />
      {/* <OrbitControls /> */}

      <ambientLight intensity={0.5} />
      <editable.directionalLight
        theatreKey="light"
        intensity={2}
        position={[-5, 5, 4]}
        castShadow
        shadow-mapSize={2048}
        shadow-bias={-0.0001}
      />

      <Center>
        {/* <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.5, 0]}
          receiveShadow
        >
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh> */}
        {/* <SoftShadows size={40} samples={16} /> */}

        <group position={[0, -0.5, 0]} rotation={[0, -0.75, 0]}>
          <EGroup theatreKey="model">
            <Model />
          </EGroup>
          <EGroup theatreKey="model-2">
            <Model ref={mainModelRef} />
          </EGroup>
          <EGroup theatreKey="model-3">
            <Model />
          </EGroup>
          <EGroup theatreKey="model-4">
            <Model />
          </EGroup>
          <EGroup theatreKey="model-5">
            <Model />
          </EGroup>
          <EGroup theatreKey="model-6">
            <Model />
          </EGroup>
          <EGroup theatreKey="model-7">
            <Model />
          </EGroup>
          <EGroup theatreKey="model-8">
            <Model />
          </EGroup>
          <EGroup theatreKey="model-9">
            <Model />
          </EGroup>
          {/* <group position={[0, 1, 0]} rotation={[0, -0.75, 0]} dispose={null}> */}
          {/* <Group theatreKey="main-model">
          </Group>
          <Group theatreKey="second-model">
            <Model />
          </Group>
          <Group theatreKey="third-model">
            <Model />
          </Group> */}

          {/* <AccumulativeShadows
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
          </AccumulativeShadows> */}
        </group>
        {/* <ContactShadows
          resolution={512}
          position={[0, -0.8, 0]}
          opacity={1}
          scale={10}
          blur={2}
          far={0.8}
        /> */}
      </Center>

      {/* <AccumulativeShadows
        temporal
        frames={100}
        color="orange"
        colorBlend={2}
        toneMapped={true}
        alphaTest={0.9}
        opacity={2}
        scale={12}
      >
        <RandomizedLight
          amount={8}
          radius={4}
          ambient={0.5}
          intensity={1}
          position={[5, 5, -10]}
          bias={0.001}
        />
      </AccumulativeShadows> */}

      {/* <Environment
        preset="sunset"
        background
        blur={1}
        
      /> */}
      <Env perfSucks={false} />

      {/* <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        /> */}
      {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
      {/* <Noise opacity={0.02} /> */}
      {/* <Vignette eskil={false} offset={0.1} darkness={0.5} /> */}
      {/* </EffectComposer> */}
    </>
  )
}

function Env({ perfSucks }: any) {
  const ref = useRef<any>()
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
      // ground={{ height: 32, radius: 130 }}
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

export function MainScene() {
  const { WebGLTunnel } = useCanvas()

  return (
    <section className={s.scene}>
      <WebGLTunnel.In>
        <WebGL />
      </WebGLTunnel.In>
    </section>
  )
}
