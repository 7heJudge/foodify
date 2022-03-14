export const animationVariants = {
  initial: {
    opacity: 0,
    x: '100vw',
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: '-100vw',
  },
};

export const pageAnimationTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};
