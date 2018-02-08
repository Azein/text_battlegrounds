// @flow

import React, { Component } from 'react'
import StyledButton, {
  AnimatedContainer,
  TextLayer,
  AnimationLayer,
} from './styled'

type Props = {
  children: Element,
  background?: string,
}

const Button = ({ children, background } : Props) => (
  <StyledButton
    background={background}
  >
    {children}
  </StyledButton>
)

Button.defaultProps = {
  background: 'primaryTeal',
}

export const AnimatedButton = ({ children, background} : Props) => (
  <AnimatedContainer background={background}>
    <TextLayer>
      {children}
    </TextLayer>
    <AnimationLayer />
  </AnimatedContainer>
)

AnimatedButton.defaultProps = {
  background: 'primaryTeal',
}

export default Button
