import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

//types
import { ContainerProps } from './types';

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 100%;
  padding: 19px;
  background-color: ${({ color, theme }) => color ? color : theme.colors.main};
  border-radius: 2px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.shape};
`;