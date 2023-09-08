import { useGLTF } from '@react-three/drei'

export function Model(props: any) {
  const { nodes, materials } = useGLTF('/model.gltf') as any
  return (
    <group {...props} dispose={null}>
      <mesh
        name="clothes"
        castShadow
        receiveShadow
        geometry={nodes.clothes.geometry}
        material={nodes.clothes.material}
      />
      <mesh
        name="skin"
        castShadow
        receiveShadow
        geometry={nodes.skin.geometry}
        material={nodes.skin.material}
      />
      <mesh
        name="clothes_hair"
        castShadow
        receiveShadow
        geometry={nodes.clothes_hair.geometry}
        material={nodes.clothes_hair.material}
      />
      <mesh
        name="face_skin"
        castShadow
        receiveShadow
        geometry={nodes.face_skin.geometry}
        material={nodes.face_skin.material}
      />
      <mesh
        name="face_hair_skin"
        castShadow
        receiveShadow
        geometry={nodes.face_hair_skin.geometry}
        material={nodes.face_hair_skin.material}
      />
    </group>
  )
}

useGLTF.preload('/model.gltf')
