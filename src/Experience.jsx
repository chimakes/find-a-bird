import { Mask, OrbitControls, Environment } from "@react-three/drei"
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Bird from './Bird.jsx'

export default function Experience()
{
    return <>
        <Canvas gl={{ stencil: true }}>
            {/* lighting */}
            <directionalLight position={[1, 2, 1.5]} intensity={2.5}  />
            <hemisphereLight args={["#fff7e6", "#b8c1ff", 2.0]} />

            <OrbitControls makeDefault />

            <Suspense fallback={null}>
                <Environment preset="city" />

                <CircularMask />

                <Bird scale={1.8} rotation-x={Math.PI * 0.03} position-x={1}/>
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

// const Box = ({ args = [1, 4, 1], radius = 0.1, smoothness = 4, bevelSegments=4, color = 'black', ...boxProps }) => (
//   <RoundedBox args={args} radius={radius} smoothness={smoothness} bevelSegments={bevelSegments} {...boxProps}>
//     <meshPhongMaterial color={color} />
//   </RoundedBox>
// )



