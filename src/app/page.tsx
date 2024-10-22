"use client";

import SmoothScrolling from "../components/SmoothScrolling";
import Three from "../components/three";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <SmoothScrolling>
      <main className="overflow-x-hidden">
        <div className="flex flex-col w-full justify-center items-center h-full bg-green-800  bg-opacity-20">
          <h1 className="mb-[10rem] flex h-screen justify-center text-7xl items-center w-screen text-black uppercase font-bold">
            Tarnish elden lord Template Test
          </h1>

          <h1 className="mt-[10rem] mb-[20rem] flex h-screen justify-center text-7xl items-center w-screen text-black uppercase font-bold scrollingTest">
            Tarnish elden lord 2
          </h1>
          <h1 className="mt-[20rem] flex h-screen justify-center text-7xl items-center w-screen text-black uppercase font-bold scrollingTest2">
            Tarnish elden lord 3
          </h1>
        </div>
      </main>
    </SmoothScrolling>
  );
}
