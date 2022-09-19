import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

//components
import { BackButton } from '../../components/BackButton/BackButton';
import { ImageSlider } from '../../components/ImageSlider/ImageSlider';
import { Accessory } from '../../components/Accessory/Accessory';
import { Button } from '../../components/Button/Button';

//utils
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

//types
import { Car } from '../../types/Car';

//styles
import * as S from './styles';

export const CarDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as { car: Car };

  const handleChooseRentalPeriod = () => {
    navigation.navigate('Scheduling', { car });
  }

  const navigationToHomeScreen = () => {
    navigation.goBack();
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
            images={car.photos}
          />
        </S.ImageSliderWrapper>

        <S.Content>
          <S.Details>
            <S.Description>
              <S.Brand>{car.brand}</S.Brand>
              <S.Name>{car.name}</S.Name>
            </S.Description>

            <S.Rent>
              <S.Period>{car.rent.period}</S.Period>
              <S.Price>R$ {car.rent.price}</S.Price>
            </S.Rent>
          </S.Details>

          <S.Accessories>
            {car.accessories.map((accessory) => (
              <Accessory 
                key={accessory.type}
                name={accessory.name} 
                icon={getAccessoryIcon(accessory.type)} 
              />
            ))}
          </S.Accessories>

          <S.About>{car.about}</S.About>
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