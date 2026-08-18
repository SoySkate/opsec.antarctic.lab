import { useEffect, useState, useMemo, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "next-themes";

const GlobalParticles = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {}, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: true,
      fpsLimit: 60,
      particles: {
        number: {
          value: 144,
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
        },
        color: {
          value: isDark
            ? ["#ffffff", "#e8e8e8", "#d0d0d0", "#c8d4e0", "#a8c0d8"]
            : ["#1a1a2e", "#2d2d44", "#3d3d5c", "#4a5568", "#718096"],
        },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.1, max: 0.6 },
          animation: { enable: true, speed: 0.8, sync: false },
        },
        size: {
          value: { min: 1, max: 4 },
          animation: { enable: true, speed: 2, sync: false },
        },
        move: {
          enable: true,
          speed: 1.8,
          direction: "bottom",
          random: false,
          straight: true,
          outModes: { default: "out" },
          angle: { offset: 0, value: 0 },
        },
        wobble: {
          enable: true,
          distance: 5,
          speed: { min: 0.5, max: 1.5 },
        },
        tilt: {
          enable: true,
          direction: "random",
          value: { min: 0, max: 360 },
          animation: { enable: true, speed: 3 },
        },
        roll: {
          darken: { enable: true, value: 15 },
          enable: true,
          speed: { min: 3, max: 8 },
        },
        links: { enable: false },
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
        },
      },
      detectRetina: true,
      smooth: true,
    }),
    [isDark]
  );

  if (!init) return null;

  return (
    <Particles
      id="global-particles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="!fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default GlobalParticles;
