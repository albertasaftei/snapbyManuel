export const commonVariants = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "tween",
      delay: 0.5,
      duration: 1,
    },
  },
  exit: {
    y: "100vh",
    transition: {
      ease: "easeInOut",
    },
  },
};
