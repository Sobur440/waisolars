import { useHelper } from "@react-three/drei";
import { use, useRef } from "react";
import * as THREE from "three";

const Lights = () => {
  const directionalLightRef = useRef();
  const boxRef = useRef();

  //   useHelper(directionalLightRef, THREE.DirectionalLightHelper, 0.5, "blue");

  return (
    <>
      <ambientLight intensity={0.3} color="white" />
      <directionalLight
        intensity={6}
        color="#FFD27D"
        // position={[2, 0, 0]}
        ref={directionalLightRef}
        // target={boxRef.current}
      />

      <mesh ref={boxRef} position={[7, 0, 0]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshBasicMaterial opacity={0} transparent />
      </mesh>
    </>
  );
};

export default Lights;
