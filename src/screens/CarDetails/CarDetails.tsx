import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//components
import { BackButton } from '../../components/BackButton/BackButton';
import { ImageSlider } from '../../components/ImageSlider/ImageSlider';
import { Accessory } from '../../components/Accessory/Accessory';
import { Button } from '../../components/Button/Button';

//assets
import speedImage from '../../assets/speed.svg';
import accelerationImage from '../../assets/acceleration.svg';
import forceImage from '../../assets/force.svg';
import gasolineImage from '../../assets/gasoline.svg';
import exchangeImage from '../../assets/exchange.svg';
import peopleImage from '../../assets/people.svg';

//styles
import * as S from './styles';

export const CarDetails = () => {
  const navigation = useNavigation();

  const handleChooseRentalPeriod = () => {
    navigation.navigate('Scheduling');
  }

  const navigationToHomeScreen = () => {
    navigation.navigate('Home')
  }

  return (
    <>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
      />

      <S.Container>
        <S.Header>
          <BackButton onPress={navigationToHomeScreen} />
        </S.Header>

        <S.ImageSliderWrapper>
          <ImageSlider 
            images={['https://www.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841516415001715.webp?s=fill&w=236&h=135&q=70&t=true']}
          />
        </S.ImageSliderWrapper>

        <S.Content>
          <S.Details>
            <S.Description>
              <S.Brand>Lamborghini</S.Brand>
              <S.Name>Huracan</S.Name>
            </S.Description>

            <S.Rent>
              <S.Period>Ao dia</S.Period>
              <S.Price>R$ 580</S.Price>
            </S.Rent>
          </S.Details>

          <S.Accessories>
            <Accessory name='380Km/h' icon={speedImage} />
            <Accessory name='3.2s' icon={accelerationImage} />
            <Accessory name='800 HP' icon={forceImage} />
            <Accessory name='Gasolina' icon={gasolineImage} />
            <Accessory name='Auto' icon={exchangeImage} />
            <Accessory name='2 pessoas' icon={peopleImage} />
          </S.Accessories>

          <S.About>
            Este é automóvel desportivo. Surgiu do lendário touro de lide 
            indultado na praça Real Maestranza de Sevilla. É um belíssimo 
            carro para quem gosta de acelerar.
          </S.About>
        </S.Content>

        <S.Footer>
          <Button 
            title='Escolher período do aluguel' 
            onPress={handleChooseRentalPeriod}
          />
        </S.Footer>
      </S.Container>
    </>
  );
}