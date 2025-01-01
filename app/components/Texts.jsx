import { OrbitControls, Scroll, Text3D } from "@react-three/drei";

const Texts = () => {
  return (
    <>
      <Scroll>
        <Text3D
          font={"/fonts/Inter 24pt_Bold.json"}
          position={[-5, 0, 0]}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.1}
          bevelSegments={13}
          size={1.2}
        >
          <OrbitControls
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 2}
            maxAzimuthAngle={Math.PI / 2}
            enableZoom={false}
          />
          WAISOLARS
          <meshStandardMaterial color="goldenrod" />
        </Text3D>
      </Scroll>
    </>
  );
};

export default Texts;
