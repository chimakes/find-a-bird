import { Mask, OrbitControls, Environment } from "@react-three/drei"
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Bird from './Bird.jsx'
import Birds from './Birds.jsx'
import Background from './Background.jsx'
import { useControls } from 'leva'

export default function Experience()
{
    const { lensPositionX, lensPositionY } = useControls({ 
        lensPositionX: 0,
        lensPositionY: 0,
    })

    return <>
        <Canvas gl={{ stencil: true }} >
            {/* lighting */}
            <directionalLight position={[1, 2, 1.5]} intensity={2.5}  />
            <hemisphereLight args={["#fff7e6", "#b8c1ff", 2.0]} />

            <OrbitControls makeDefault />

            <Suspense fallback={null}>
                <Environment preset="city" />

                <CircularMask scale={0.7} position={[lensPositionX, lensPositionY, 0]}/>

                <Background />
                <Birds scale={1.2} position-y={-2.6}/>
            </Suspense>
        </Canvas>
    </>
}

const CircularMask = (props) => (
  <group {...props}>
      <Frame position={[0, 0, 1]} />
      <Mask id={1} position={[0, 0, 0.95]}>
        <circleGeometry args={[0.8, 64]} />
      </Mask>
  </group>
)

const Frame = (props) => (
  <mesh {...props}>
    <ringGeometry args={[0.785, 0.85, 64]} />
    <meshPhongMaterial color="black" />
  </mesh>
)




