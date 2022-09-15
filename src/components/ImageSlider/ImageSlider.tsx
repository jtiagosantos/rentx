import React, { FC } from 'react';

//types
import { ImageSliderProps } from './types';

//styles
import * as S from './styles';

export const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
  return (
    <S.Container>
      <S.ImageIndexes>
        <S.ImageIndex active={true} />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
      </S.ImageIndexes>

      <S.CarWrapper>
        <S.CarImage 
          source={{uri: images[0]}}
          resizeMode='cover'
        />
      </S.CarWrapper>
    </S.Container>
  );
}
