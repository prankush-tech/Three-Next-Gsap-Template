"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { TransitionRouter } from "next-transition-router";

export function TransitionProviders({ children }: { children: React.ReactNode }) {
  const firstLayer = useRef<HTMLDivElement | null>(null);
  const secondLayer = useRef<HTMLDivElement | null>(null);

  return (
    <TransitionRouter
      auto={true}
      leave={(next, from, to) => {
       console.log({ from, to });

        const tl = gsap
          .timeline({
            onComplete: next,
          })
          .fromTo(
            firstLayer.current,
            { y: "100%" },
            {
              y: 0,
              ease: "expo.out",              duration: 0.5,
            },
          )
          .fromTo(
            secondLayer.current,
            {
              y: "100%",
            },
            {
              y: 0,
              ease: "expo.out",              duration: 0.5,

            },
            "<50%",
          );

        return () => {
          tl.kill();
        };
      }}
      enter={(next) => {
        const tl = gsap
          .timeline()
          .fromTo(
            secondLayer.current,
            { y: 0 },
            {
              y: "-100%",
              duration:1,
              ease: "expo.out",
            },
          )
          .fromTo(
            firstLayer.current,
            { y: 0 },
            {
              y: "-100%",
              ease: "expo.out",              duration: 0.5,

            },
            "<50%",
          )
          .call(next, undefined, "<50%");

        return () => {
          tl.kill();
        };
      }}
    >
      <main>{children}</main>

      <div
        ref={firstLayer}
        className="fixed inset-0  translate-y-full z-50 bg-pink-300"
      />
      <div
        ref={secondLayer}
        className="fixed inset-0  translate-y-full z-50 bg-black"
      />
    </TransitionRouter>
  );
}