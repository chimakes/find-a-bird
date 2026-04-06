import { Mask} from "@react-three/drei"
import { useRef } from "react"
import { a, useSpring } from '@react-spring/three'

const CircularMask = ({...props}) => {

    const circleRef = useRef()

    const { pos } = useSpring({
        from: { pos: [0, 0, 0] },        
        to: [
            { pos: [1.1, -0.84, 0] },
            { pos: [-2.04, -0.58, 0] },
            { pos: [-0.54, 3.4, 0] }, 
            { pos: [0, 0, 0] }, 
        ],   
        delay: 300,                     
        config: { tension: 40, friction: 12 }, 
        loop: { reverse: true }
    })

    return (
        <group {...props}>
            <a.group ref={ circleRef } position={pos}>
                <Frame position={[0, 0, 1]} />
                <Mask id={1} position={[0, 0, 0.95]}>
                    <circleGeometry args={[0.8, 64]}/>
                </Mask>
            </a.group>
        </group>
    )
}

export default CircularMask


const Frame = (props) => (
  <mesh {...props}>
    <ringGeometry args={[0.785, 0.88, 64]} />
    <meshPhongMaterial color="#472555" />
  </mesh>
)