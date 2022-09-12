import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

//assets
import Logo from '../../assets/logo.svg';

//styles
import * as S from './styles';

export const Home = () => {
  return (
    <>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <S.Container>
        <S.Header>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <S.TotalCars>Total de 12 carros</S.TotalCars>
        </S.Header>
      </S.Container>
    </>
  );
}