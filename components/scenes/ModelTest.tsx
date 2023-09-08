import { Merged, useGLTF } from '@react-three/drei'
import { createContext, useContext, useMemo } from 'react'

const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/Model_mid.gltf')
  const instances = useMemo(
    () => ({
      Clothes: nodes.clothes,
      Skin: nodes.skin,
      Clotheshair: nodes.clothes_hair,
      Faceskin: nodes.face_skin,
      Facehairskin: nodes.face_hair_skin,
    }),
    [nodes],
  )
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => (
        <context.Provider value={instances} children={children} />
      )}
    </Merged>
  )
}

export function Model(props) {
  const instances = useContext(context)
  return (
    <group {...props} dispose={null}>
      <instances.Clothes name="clothes" />
      <instances.Skin name="skin" />
      <instances.Clotheshair name="clothes_hair" />
      <instances.Faceskin name="face_skin" />
      <instances.Facehairskin name="face_hair_skin" />
    </group>
  )
}

useGLTF.preload('/Model_mid.gltf')
