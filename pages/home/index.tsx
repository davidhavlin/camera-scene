import { CameraScene } from '@/components/scenes/CameraScene'
import { Layout } from 'layouts/default'
import { Canvas } from 'libs/webgl/components/canvas'

export default function Home() {
  return (
    <Canvas>
      <Layout theme="light" className={''}>
        <CameraScene />
      </Layout>
    </Canvas>
  )
}

export async function getStaticProps() {
  return {
    props: {
      id: 'home',
    }, // will be passed to the page component as props
  }
}
