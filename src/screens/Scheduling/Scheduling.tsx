import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';

//components
import { BackButton } from '../../components/BackButton/BackButton';
import { Button } from '../../components/Button/Button';
import { Calendar } from '../../components/Calendar/Calendar';

//functions
import { generateInterval } from '../../components/Calendar/generateInterval';

//utils
import { getPlatformDate } from '../../utils/getPlatformDate';

//assets
import ArrowLeftIcon from '../../assets/arrow.svg';

//types
import { DayProps } from '../../components/Calendar/types';
import { Car } from '../../types/Car';
import { RentalPeriod } from './types';

//styles
import * as S from './styles'

export const Scheduling = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as { car: Car };

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<{[key: string]: unknown}>();
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const handleConfirmRentalPeriod = () => {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      return Alert.alert('Perído de aluguel', 'Selecione o período de aluguel');
    }

    navigation.navigate('SchedulingDetails', {
      car,
      dates: Object.keys(markedDates),
    });
  }

  const navigateToCarDetailsScreen = () => {
    navigation.goBack();
  }

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(date);

    const interval = generateInterval(start, end);

    setMarkedDates(interval);

    const startDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval).slice(-1)[0];

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(startDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    });
  }

  return (
    <>
      <StatusBar 
        barStyle='light-content'
        backgroundColor={theme.colors.header}
      />

      <S.Container>
        <S.Header>
          <BackButton 
            color={theme.colors.background_secondary} 
            onPress={navigateToCarDetailsScreen} 
          />

          <S.Title>
            Escolha uma {'\n'}
            data de início e {'\n'}
            fim do aluguel
          </S.Title>

          <S.RentalPeriod>
            <S.DateInfo>
              <S.DateTitle>DE</S.DateTitle>
              <S.DateValue selected={!!rentalPeriod.startFormatted}>
                {rentalPeriod.startFormatted}
              </S.DateValue>
            </S.DateInfo>

            <ArrowLeftIcon />

            <S.DateInfo>
              <S.DateTitle>ATÉ</S.DateTitle>
              <S.DateValue selected={!!rentalPeriod.endFormatted}>
                {rentalPeriod.endFormatted}
              </S.DateValue>
            </S.DateInfo>
          </S.RentalPeriod>
        </S.Header>

        <S.Content>
          <Calendar 
            markedDates={markedDates}
            onDayPress={handleChangeDate}
          />
        </S.Content>

        <S.Footer>
          <Button 
            title='confirmar' 
            onPress={handleConfirmRentalPeriod}
          />
        </S.Footer>
      </S.Container>
    </>
  );
}