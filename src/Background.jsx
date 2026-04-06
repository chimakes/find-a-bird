import { useGLTF } from "@react-three/drei";

export default function Background()
{
    const background = useGLTF('./background.glb')

    return <primitive position-y={-2.6} scale={1.2} object={background.scene}/>
}