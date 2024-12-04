"use client";
import * as THREE from "three";
import Plane from "./Plane";
import { Canvas } from "@react-three/fiber";
import { getProject } from "@theatre/core";
//@ts-ignore
import extension from "@theatre/r3f/dist/extension";
import { types } from "@theatre/core";
import studio from "@theatre/studio";
import { editable as e, SheetProvider } from "@theatre/r3f";

// const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

const Three = () => {
  // studio.initialize();
  // studio.extend(extension);
  return (
    <Canvas
      camera={{
        position: [0, 0, -2],
        fov: 75,
      }}
    >
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          // theatreKey="Light"
          position={[1.5, 1.5, 1.5]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Plane position={[0, 0, 0]}  />
     {/* <SheetProvider sheet={demoSheet}>
      </SheetProvider> */}
    </Canvas>
  );
};

export default Three;
