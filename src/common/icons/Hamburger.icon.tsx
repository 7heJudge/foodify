import React from 'react';

import theme from 'theme/theme';

import { IconProps } from '../common.types';

const HamburgerIcon = ({ width = 24, height = 18, color = theme.colors.black }: IconProps) => (
  <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.182.568a1.182 1.182 0 0 0 0 2.364h21.284a1.182 1.182 0 1 0 0-2.364H1.182Zm0 7.094a1.182 1.182 0 0 0 0 2.365h21.284a1.182 1.182 0 1 0 0-2.365H1.182Zm0 7.095a1.182 1.182 0 1 0 0 2.365h21.284a1.182 1.182 0 1 0 0-2.365H1.182Z"
      fill={color}
    />
  </svg>
);

export default HamburgerIcon;
