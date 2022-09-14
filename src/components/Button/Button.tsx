import React, { FC } from 'react';

//types
import { ButtonProps } from './types';

//styles
import { Container, Title } from './styles';

export const Button: FC<ButtonProps> = ({ title, color, ...props }) => {
  return (
    <Container activeOpacity={0.6} color={color} {...props}>
      <Title>{title}</Title>
    </Container>
  );
}