"use client"

import { useCallback, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import dynamic from "next/dynamic"

// Dynamically import Particles to avoid SSR issues
const Particles = dynamic(() => import("react-tsparticles"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10" />,
})

// Import the tsParticles engine separately
const { loadFull } = require("tsparticles")

export default function ParticlesBackground() {
  const [init, setInit] = useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setInit(true)
  }, [])

  const particlesInit = useCallback(async (engine) => {
    // Initialize the tsParticles instance
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {
    console.log("Particles loaded")
  }, [])

  if (!mounted || !init) return null

  const isDark = resolvedTheme === "dark"

  return (
    <Particles
      className="absolute inset-0 -z-10"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: isDark ? "#ffffff" : "#000000",
          },
          links: {
            color: isDark ? "#ffffff" : "#000000",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

