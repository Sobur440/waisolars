"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import Lights from "./Lights";
import {
  Float,
  Scroll,
  ScrollControls,
  Text,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import Systems from "./Systems";
import Texts from "./Texts";
import Words from "./Words";
import Astronaut from "./Astronaut";
import { Suspense } from "react";
import LoadingScreen from "./LoadingScreen";

const Experince = () => {
  return (
    <>
      <LoadingScreen />
      <Canvas className="w-full h-full" camera={{ position: [0, 0, 4] }}>
        <Suspense>
          <ScrollControls pages={3}>
            <Lights />
            <Texts />
            <Scroll>
              <Systems />
            </Scroll>
            <Scroll html>
              <Words />
            </Scroll>
            <Astronaut />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
};

export default Experince;
