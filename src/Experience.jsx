import { OrbitControls, useGLTF, Environment } from "@react-three/drei"
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Bird from './Bird.jsx'

export default function Experience()
{
    return <>
        <Canvas>
            {/* lighting */}
            <directionalLight position={[1, 2, 1.5]} intensity={2.5}  />
            <hemisphereLight args={["#fff7e6", "#b8c1ff", 2.0]} />

            <OrbitControls />

            <Suspense fallback={null}>
                <Environment preset="city" />

                <Bird scale={2} position={[0, -0.5, 0]} />
            </Suspense>
        </Canvas>
    </>
}

