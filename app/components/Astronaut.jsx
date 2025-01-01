import { Float, Text, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Astronaut = () => {
  const astronaut = useGLTF("/models/Astronaut.glb");
  const astroRef = useRef();
  const scrollData = useScroll();
  useFrame(() => {
    astroRef.current.rotation.x = scrollData.offset * (Math.PI / 2);
    astroRef.current.rotation.z = scrollData.offset * (Math.PI / 2);
    astroRef.current.position.x = Math.cos(scrollData.offset * 3.5);
    astroRef.current.position.z = Math.sin(scrollData.offset * 3.5);
  });
  return (
    <>
      <group>
        <Float floatIntensity={2} speed={3}>
          <primitive
            object={astronaut.scene}
            scale={2}
            rotation-y={Math.PI}
            ref={astroRef}
          />
        </Float>
        <Text
          fontSize={0.2}
          maxWidth={3}
          position={[0, -1.7, 0]}
          textAlign="center"
          scale={0.4}
        >
          Astronaut by PW Wu [CC-BY] via Poly Pizza
          <meshStandardMaterial color="white" />
        </Text>
      </group>
    </>
  );
};

export default Astronaut;
