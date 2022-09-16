import React, { FC } from 'react';

//assets
import GasolineImage from '../../assets/gasoline.svg';

//types
import { CardCarProps } from './types';

//styles
import * as S from './styles';

export const CardCar: FC<CardCarProps> = ({ 
  brand, 
  name, 
  icon: Icon,
  rent, 
  thumbnail, 
  ...props 
}) => {
  return (
    <S.Container {...props}>
      <S.Details>
        <S.Brand>{brand}</S.Brand>
        <S.Name>{name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{rent.period}</S.Period>
            <S.Price>{rent.price}</S.Price>
          </S.Rent>

          <S.Type>
            <Icon />
          </S.Type>
        </S.About>
      </S.Details>

      <S.CarImage 
        source={{uri: thumbnail}} 
        resizeMode='cover'
      />
    </S.Container>
  );
}