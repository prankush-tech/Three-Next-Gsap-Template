"use client";
import { ThreeElements, useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vertexShader from "../shaders/vertex.glsl";
import fragmentShader from "../shaders/fragment.glsl";
// import {editable as e} from '@theatre/r3f'

gsap.registerPlugin(ScrollTrigger);

type UniformProps = {
  uTime: {
    value: number;
  };
  uResolution: {
    value: [number, number];
  };
};

const Plane = (props: ThreeElements["mesh"]) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms: UniformProps = useMemo(() => {
    return {
      uTime: {
        value: 1.0,
      },
      uResolution: {
        value: [window.innerWidth, window.innerHeight],
      },
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      if (material.uniforms) {
        material.uniforms.uTime.value = clock.getElapsedTime();
      }

      // console.log(material.uniforms.uTime.value)
    }
  });

  useEffect(() => {
    const currentRef = meshRef.current;

    const firstMoveTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollingTest",
        markers: true,
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "restart none none reverse",
      },
    });

    if (currentRef) {
      // Ensure ref is not null
      firstMoveTimeline.to(currentRef.scale, {
        y: 3,
        x: 3,
        z: 3,
        duration: 0.75,
        ease: "power3.inOut",
      });
    }

    const secondMoveTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollingTest2",
        markers: true,
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "restart none none reverse",
      },
    });

    if (currentRef) {
      // Ensure ref is not null
      secondMoveTimeline.to(currentRef.rotation, {
        y: Math.PI,
        duration: 0.75,
        ease: "power3.inOut",
      });
    }
  }, []);

  return (
    <mesh {...props} scale={1} ref={meshRef} 
    // theatreKey="Plane"
    >
      <planeGeometry args={[1.3, 1, 40,40]} />
      <shaderMaterial
        side={THREE.DoubleSide}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        // wireframe={true}
        depthTest={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

export default Plane;
