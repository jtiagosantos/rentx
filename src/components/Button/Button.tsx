import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

//types
import { ButtonProps } from './types';

//styles
import { Container, Title } from './styles';

export const Button: FC<ButtonProps> = ({ 
  title, 
  color, 
  disabled = false, 
  isLoading = false,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Container 
      activeOpacity={0.6} 
      color={color} 
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator 
          size={24.5}
          color={theme.colors.shape}
        />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}