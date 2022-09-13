import React, { FC } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

//types
import { BackButtonProps } from './types';

//styles
import * as S from './styles';

export const BackButton: FC<BackButtonProps> = ({ color }) => {
  const theme = useTheme();

  return (
    <S.Container>
      <MaterialIcons 
        name='chevron-left'
        size={24}
        color={color || theme.colors.text}
      />
    </S.Container>
  );
}