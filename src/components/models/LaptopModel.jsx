/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 ./public/laptop/scene.gltf --transform --instance
Author: Blue Lantern (https://sketchfab.com/genoris2)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gaming-laptop-4e72a2078b3c4a75a821ab09830693fe
Title: Gaming Laptop
*/

/* eslint react/no-unknown-property: 0 */

// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function LaptopModel(props) {
  const { nodes, materials } = useGLTF("/laptop/laptop-scene-transformed.glb");
  return (
    <>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <ambientLight intensity={1} />

      <group {...props} dispose={null}>
        <group position={[-1.2, 0.1, 0]} rotation={[0, 0, -1.38]}>
          <mesh
            geometry={nodes.Cube001_1.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.Cube001_2.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            geometry={nodes.Cube001_3.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            geometry={nodes.Cube001_4.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            geometry={nodes.Cube001_5.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Cube001_6.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            geometry={nodes.Cube001_7.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            geometry={nodes.Cube001_8.geometry}
            material={materials["Material.013"]}
          />
        </group>
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          geometry={nodes.Cube003_2.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Cube003_3.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          geometry={nodes.Cube003_4.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Cube003_5.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          geometry={nodes.Cube003_6.geometry}
          material={materials["Material.005"]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/laptop/laptop-scene-transformed.glb");
