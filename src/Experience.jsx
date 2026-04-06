import { OrbitControls, Environment } from "@react-three/drei"
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Birds from './Birds.jsx'
import CircularMask from './CircularMask.jsx'
import Background from './Background.jsx'
import { useControls } from 'leva'

export default function Experience()
{
    // const { lensPositionX, lensPositionY } = useControls({ 
    //     lensPositionX: 0,
    //     lensPositionY: 0,
    // })

    // const {birdPositionY} = useControls({
    //     birdPositionY: -3
    // })


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
                <Birds scale={1.2} position-y={-3}/>
            </Suspense>
        </Canvas>
    </>
}




