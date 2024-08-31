"use client";
import Lenis from "lenis";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
// @ts-ignore

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
