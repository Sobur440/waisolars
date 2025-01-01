import { useScroll, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Systems = () => {
  const planets = [
    {
      name: "Mecury",
      texture: "/textures/mecury.jpg",
      id: 0,
    },
    {
      name: "Mars",
      texture: "/textures/mars.jpg",
      id: 1,
    },
    {
      name: "Earth",
      texture: "/textures/earth.jpg",
      //   normalTexture: "/textures/2k_earth_normal_map.tif",
      id: 2,
    },
    {
      name: "Jupiter",
      texture: "/textures/jupiter.jpg",
      id: 3,
    },
    {
      name: "Saturn",
      texture: "/textures/saturn.jpg",
      id: 4,
    },
    {
      name: "Uranus",
      texture: "/textures/uranus.jpg",
      id: 5,
    },
    {
      name: "Neptune",
      texture: "/textures/neptune.jpg",
      id: 6,
    },
    {
      name: "Venus",
      texture: "/textures/venus.jpg",
      id: 7,
    },
  ];

  const systemsRef = useRef([]);

  const sunTexture = useTexture("/textures/sun.jpg");
  sunTexture.repeat.set(4, 4);
  sunTexture.wrapS = THREE.RepeatWrapping;
  sunTexture.wrapT = THREE.RepeatWrapping;

  const scrollData = useScroll();

  useFrame(({ clock }) => {
    const seconds = clock.getElapsedTime();
    const roll = seconds * scrollData.offset;
    // console.log(roll);
    systemsRef.current.forEach((system, i) => {
      let angle = (i / planets.length) * (Math.PI * 2);

      system.position.x = 8 * Math.cos(angle + roll * 0.2);
      system.position.z = 8 * Math.sin(angle + roll * 0.2);
    });
  });

  const viewport = useThree((state) => state.viewport);

  return (
    <>
      <group position={[0, -viewport.height, -8]}>
        <group>
          {planets.map((planet) => {
            const texture = useTexture(planet.texture);

            return (
              <mesh key={planet.id} ref={(el) => systemsRef.current.push(el)}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial map={texture} />
              </mesh>
            );
          })}
        </group>

        <mesh>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial map={sunTexture} />
        </mesh>
      </group>
    </>
  );
};

export default Systems;
