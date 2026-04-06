import { PivotControls, Mask, OrbitControls, Environment } from "@react-three/drei"
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Bird from './Bird.jsx'
import Birds from './Birds.jsx'
import Background from './Background.jsx'
import { useControls } from 'leva'

export default function Experience()
{
    // const { lensPositionX, lensPositionY } = useControls({ 
    //     lensPositionX: 0,
    //     lensPositionY: 0,
    // })

    const {birdPositionY} = useControls({
        birdPositionY: -3
    })

    return <>
        <Canvas gl={{ stencil: true }} >
            {/* lighting */}
            <directionalLight position={[1, 2, 1.5]} intensity={2.5}  />
            <hemisphereLight args={["#fff7e6", "#b8c1ff", 2.0]} />

            <OrbitControls makeDefault />

            <Suspense fallback={null}>
                <Environment preset="city" />

                <CircularMask scale={0.7} />

                <Background />
                <Birds scale={1.2} position-y={birdPositionY}/>
            </Suspense>
        </Canvas>
    </>
}

const CircularMask = (props) => (
  <group {...props}>
    <PivotControls offset={[0.5, 0.5, 1]} activeAxes={[true, true, false]} disableRotations depthTest={false} lineWidth={0} anchor={0} scale={0.9} disableAxes={true} disableScaling={true} >
        <Frame position={[0, 0, 1]} />
        <Mask id={1} position={[0, 0, 0.95]}>
            <circleGeometry args={[0.8, 64]} />
        </Mask>
    </PivotControls>
  </group>
)

const Frame = (props) => (
  <mesh {...props}>
    <ringGeometry args={[0.785, 0.88, 64]} />
    <meshPhongMaterial color="#472555" />
  </mesh>
)




