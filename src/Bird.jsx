export default function Bird({nodes, materials, ...props}) {

  return (
    <group {...props}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials.bird_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials.bird_wings}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_2.geometry}
          material={materials.yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_3.geometry}
          material={materials.eyes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_4.geometry}
          material={materials.bird_beak}
        />
    </group>
  )
}