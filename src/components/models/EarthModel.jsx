/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 ./public/earth/scene.gltf --transform --instance
Author: Loïc Norgeot (https://sketchfab.com/norgeotloic)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/a-windy-day-fb78f4cc938144e6902dd5cff354d525
Title: A Windy Day
*/

/* eslint react/no-unknown-property: 0 */

// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function EarthModel(props) {
  // eslint-disable-next-line no-unused-vars
  const { nodes, materials } = useGLTF("/earth/earth-scene-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <points
          geometry={nodes.Object_249.geometry}
          material={nodes.Object_249.material}
        />
        <points
          geometry={nodes.Object_250.geometry}
          material={nodes.Object_250.material}
        />
        <points
          geometry={nodes.Object_251.geometry}
          material={nodes.Object_251.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/earth/earth-scene-transformed.glb");
