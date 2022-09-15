import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

//assets
import LogoBackgroundImage from '../../assets/logo_background_gray.svg';
import DoneImage from '../../assets/done.svg';

//styles
import * as S from './styles';

export const SchedulingComplete = () => {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  return (
    <>
      <StatusBar 
        barStyle='light-content'
        backgroundColor={theme.colors.header}
      />

      <S.Container>
        <LogoBackgroundImage width={width} />

        <S.Content>
          <DoneImage 
            width={RFValue(80)}
            height={RFValue(80)}
          />
          <S.Title>Carro alugado!</S.Title>
          <S.Message>
            Agora você só precisa ir {'\n'}
            até a concessionária da RENTX {'\n'}
            pegar o seu automóvel. 
          </S.Message>
        </S.Content>

        <S.Footer>
          <S.Button activeOpacity={0.6}>
            <S.ButtonText>Ok</S.ButtonText>
          </S.Button>
        </S.Footer>
      </S.Container>
    </>
  );
}