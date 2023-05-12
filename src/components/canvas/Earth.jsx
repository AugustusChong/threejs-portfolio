/* eslint react/no-unknown-property: 0 */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "./Loader";
import { EarthModel } from "../models";

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ antialias: false, preserveDrawingBuffer: false }}
      camera={{
        fov: 50,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <EarthModel scale={2} position-y={0} rotation-y={0} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
