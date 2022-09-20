import React, { useState, useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';
import { Feather } from  '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';

//services
import { registerSchedulingService } from '../../services/cars/registerSchedulingService';

//components
import { BackButton } from '../../components/BackButton/BackButton';
import { ImageSlider } from '../../components/ImageSlider/ImageSlider';
import { Accessory } from '../../components/Accessory/Accessory';
import { Button } from '../../components/Button/Button';

//utils
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getPlatformDate } from '../../utils/getPlatformDate';

//types
import { Car } from '../../types/Car';
import { RentalPeriod } from './types';

//styles
import * as S from './styles';

export const SchedulingDetails = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as { car: Car, dates: string[] };

  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);
  const [isLoading, setIsLoading] = useState(false);

  const startDate = dates[0];
  const endDate = dates.slice(-1)[0];
  const rentTotal = (dates.length * car.rent.price);

  const handleConfirmRental = async () => {
    setIsLoading(true);

    const { error } = await registerSchedulingService({
      carId: car.id,
      dates,
      car,
      startDate: format(getPlatformDate(new Date(startDate)), 'dd/MM/yyyy'),
      endDate: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    });

    setIsLoading(false);

    if (error) {
      return Alert.alert('Agendamento', error);
    }

    navigation.navigate('SchedulingComplete');
  }

  const navigateToSchedulingScreen = () => {
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(startDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    });
  }, []);

  return (
    <>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
      />

      <S.Container>
        <S.Header>
          <BackButton onPress={navigateToSchedulingScreen} />
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

          <S.RentalPeriod>
            <S.CalendarIcon>
              <Feather 
                name='calendar'
                size={RFValue(24)}
                color={theme.colors.shape}
              />
            </S.CalendarIcon>

            <S.DateInfo>
              <S.DateTitle>DE</S.DateTitle>
              <S.DateValue>{rentalPeriod.startFormatted}</S.DateValue>
            </S.DateInfo>

            <Feather 
              name='chevron-right'
              size={RFValue(10)}
              color={theme.colors.text}
            />

            <S.DateInfo>
              <S.DateTitle>ATÉ</S.DateTitle>
              <S.DateValue>{rentalPeriod.endFormatted}</S.DateValue>
            </S.DateInfo>
          </S.RentalPeriod> 

          <S.RentalPrice>
            <S.RentalPriceLabel>TOTAL</S.RentalPriceLabel>
            <S.RentalPriceDetails>
              <S.RentalPriceQuota>R$ {car.rent.price} x {dates.length} diárias</S.RentalPriceQuota>
              <S.RentalPriceTotal>R$ {rentTotal}</S.RentalPriceTotal>
            </S.RentalPriceDetails>
          </S.RentalPrice>
        </S.Content>

        <S.Footer>
          <Button 
            title='Alugar agora' 
            color={theme.colors.success}
            onPress={handleConfirmRental}
            isLoading={isLoading}
          />
        </S.Footer>
      </S.Container>
    </>
  );
}