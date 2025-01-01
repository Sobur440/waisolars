import { useProgress } from "@react-three/drei";
import styles from "./LoadingScreen.module.css";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const LoadingScreen = () => {
  const { progress, active } = useProgress();
  const overlayRef = useRef();
  const [hasCompleted, setHasCompleted] = useState(false);
  useEffect(() => {
    if (!active && overlayRef.current && progress === 100 && !hasCompleted) {
      setHasCompleted(true);
      gsap
        .timeline()
        .to(overlayRef.current, {
          opacity: 0,
          duration: 0.5,
          delay: 0.5,
        })
        .set(overlayRef.current, {
          display: "none",
        });
    }
  }, [progress, active]);

  return (
    <div
      className={`w-screen h-screen absolute z-[5] flex justify-center flex-col items-center ${styles.overlay}`}
      ref={overlayRef}
    >
      <p className="text-[3rem] font-bold text-[skyblue]">Waisolars</p>
      <div className="w-[15rem]">
        <div
          className={`bg-black h-[1rem] rounded-[.5rem] transition-all duration-[0.3] ease-in-out`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
