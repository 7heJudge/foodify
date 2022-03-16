import { motion } from 'framer-motion';
import React, { ComponentType } from 'react';
import styled from 'styled-components';

import { animationVariants, pageAnimationTransition } from 'utils/framer-animation-constants';

const WithRouteAnimation = <T,>(WrappedComponent: ComponentType<T>): React.ComponentType<T> => {
  const AnimatedComponent = (props: T) => (
    <MotionContainer
      exit="out"
      animate="in"
      initial="initial"
      variants={animationVariants}
      transition={pageAnimationTransition}>
      <WrappedComponent {...props} />
    </MotionContainer>
  );

  return AnimatedComponent;
};

const MotionContainer = styled(motion.div)`
  transform: translateX(-0.95117vw) !important;
`;

export default WithRouteAnimation;
