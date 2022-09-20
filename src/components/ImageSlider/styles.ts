import { Image, Dimensions } from 'react-native';
import styled from 'styled-components/native';

//types
import { ImageIndexProps } from './types';

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  padding-right: 24px;
  margin-bottom: 36px;

  flex-direction: row;
  align-self: flex-end;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;
  margin-left: 8px;
  background-color: ${({ theme, active }) => 
    active ? theme.colors.title : theme.colors.shape
  };
  border-radius: 3px;
`;

export const CarWrapper = styled.View`
  width: ${Dimensions.get('screen').width}px;
  height: 132px;
  align-items: center;
  justify-content: center;
`;

export const CarImage = styled(Image)`
  width: 280px;
  height: 132px;
`;
