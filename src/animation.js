export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
}

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
}

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
}

export const photoSlideAnim = {
  hidden: { x: 200, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
}
export const photoZoomAnim = {
  hidden: { scale: 2, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 2,
    },
  },
}

export const pageSlider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
}

export const scrollReveal = {
  hidden: {
    opacity: 0,
    scale: 1.05,
    transition: { duration: 2, ease: "easeInOut" },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
}

export const skewReveal = {
  hidden: {
    opacity: 0,
    skew: "15deg",
    x: -200,
    transition: {
      duration: 2,
    },
  },
  show: {
    skew: "0deg",
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
    },
  },
}
