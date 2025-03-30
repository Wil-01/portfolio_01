import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particules chargées", container);
  };

  const options = useMemo(() => ({
    background: {
      color: "#000"
    },
    detectRetina: false,
    fpsLimit: 30,
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: true,
        onClick: {
          enable: true,
          mode: "push"
        }
      }
    },
    particles: {
      color: {
        value: "#fff"
      },
      number: {
        density: {
          enable: true,
          area: 1080
        },
        limit: 0,
        value: 400
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.05,
          speed: 0.25,
          sync: false
        },
        random: {
          enable: true,
          minimumValue: 0.05
        },
        value: 1
      },
      shape: {
        type: "circle"
      },
      size: {
        random: {
          enable: true,
          minimumValue: 0.5
        },
        value: 1
      },
      move: {
        enable: true,
        speed: 0.5
      }
    }
  }), []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0



      }}
    />
  );
};

export default ParticlesBackground;