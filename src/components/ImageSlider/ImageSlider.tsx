import React, { FC, useRef, useState } from 'react';
import { FlatList } from 'react-native';

//types
import { ImageSliderProps, ChangeImageProps } from './types';

//styles
import * as S from './styles';

export const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <S.Container>
      <S.ImageIndexes>
        {images.map((_, index) => (
          <S.ImageIndex key={index} active={index === imageIndex} />
        ))}
      </S.ImageIndexes>

      <FlatList 
        data={images}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <S.CarWrapper>
            <S.CarImage 
              source={{uri: item}}
              resizeMode='cover'
            />
          </S.CarWrapper>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </S.Container>
  );
}
