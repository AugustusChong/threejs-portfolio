/* eslint react/no-unknown-property: 0 */
import { Suspense } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 0.1]} />
      <mesh castShadow receiveShadow scale={4}>
        <sphereBufferGeometry args={[0.7, 30, 30]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
        />
        <Decal
          position={[0, 0, 0.9]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
          scale={0.9}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameLoop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

Ball.propTypes = {
  imgUrl: PropTypes.node.isRequired,
};

BallCanvas.propTypes = {
  icon: PropTypes.node.isRequired,
};

export default BallCanvas;
