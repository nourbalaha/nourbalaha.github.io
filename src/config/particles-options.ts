import { IOptions, RecursivePartial } from "tsparticles-engine";

export const particlesOptions: RecursivePartial<IOptions> | undefined = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: false },
      onHover: {
        enable: false,
        mode: "repulse",
        parallax: { enable: false },
      },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#ffffff" },
    move: {
      direction: "none",
      enable: true,
      outModes: "out",
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    opacity: {
      value: 0.4,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false,
    },
  },
};
