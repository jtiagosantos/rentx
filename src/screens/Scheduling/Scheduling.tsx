import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

//components
import { BackButton } from '../../components/BackButton/BackButton';
import { Button } from '../../components/Button/Button';
import { Calendar } from '../../components/Calendar/Calendar';

//assets
import ArrowLeftIcon from '../../assets/arrow.svg';

//styles
import * as S from './styles'

export const Scheduling: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleConfirmRentalPeriod = () => {
    navigation.navigate('SchedulingDetails');
  }

  const navigateToCarDetailsScreen = () => {
    navigation.navigate('CarDetails');
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
              <S.DateValue selected={true}>18/06/2021</S.DateValue>
            </S.DateInfo>

            <ArrowLeftIcon />

            <S.DateInfo>
              <S.DateTitle>ATÉ</S.DateTitle>
              <S.DateValue selected={false}></S.DateValue>
            </S.DateInfo>
          </S.RentalPeriod>
        </S.Header>

        <S.Content>
          <Calendar />
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