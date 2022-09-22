import React, { useState, useEffect } from 'react';
import { StatusBar, ListRenderItemInfo } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

//services
import { getMyCarsService } from '../../services/cars/getMyCarsService';

//components
import { CarLoading } from '../../components/CarLoading/CarLoading';
import { BackButton } from '../../components/BackButton/BackButton';
import { CardCar } from '../../components/CardCar/CardCar';

//utils
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

//types
import { MyCar } from '../../types/MyCar';

//styles
import * as S from './styles';

export const MyCars = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [cars, setCars] = useState<MyCar[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const appointmentsQuantity = String(cars.length).padStart(2, '0');

  const navigateToHomeScreen = () => {
    navigation.goBack();
  }

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);

      const { data, error } = await getMyCarsService({ userId: 1 });

      if (error) {
        setLoading(false);
        setError(error);
        return;
      }

      setCars(data);
      setLoading(false);
    }

    fetchCars();
  }, []);

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
            onPress={navigateToHomeScreen} 
          />

          <S.Title>
            Seus agendamentos, {'\n'}
            estão aqui.
          </S.Title>

          <S.SubTitle>Conforto, segurança e praticidade</S.SubTitle>
        </S.Header>

        <S.Content>
          <S.Appointments>
            <S.AppointmentsTitle>Agendamentos feitos</S.AppointmentsTitle>
            {!loading && (
              <S.AppointmentsQuantity>{appointmentsQuantity}</S.AppointmentsQuantity>
            )}
          </S.Appointments>

          {!!error && (
            <S.MessageError>{error}</S.MessageError>
          )}

          {loading ? (
            <CarLoading />
          ) : (
            <S.CarList
              data={cars}
              keyExtractor={(item: MyCar) => String(item.id)}
              renderItem={({ item: { car, startDate, endDate } }: ListRenderItemInfo<MyCar>) => (
                <S.CarWrapper>
                  <CardCar 
                    {...car} 
                    icon={getAccessoryIcon(car.fuel_type)}
                    activeOpacity={0.6} 
                  />
                  <S.CarFooter>
                    <S.CarFooterTitle>Período</S.CarFooterTitle>
                    <S.CarFooterPeriod>
                      <S.CarFooterDate>{startDate}</S.CarFooterDate>
                      <AntDesign 
                        name='arrowright'
                        size={20}
                        color={theme.colors.title}
                        style={{ marginHorizontal: 10 }}
                      />
                      <S.CarFooterDate>{endDate}</S.CarFooterDate>
                    </S.CarFooterPeriod>
                  </S.CarFooter>
                </S.CarWrapper>
              )}
              ItemSeparatorComponent={() => <S.Separator />}
              ListEmptyComponent={() => !error && (
                <S.ListEmptyText>
                  Alugue um carro para listar ele aqui
                </S.ListEmptyText>
              )}
            />
          )}
        </S.Content>
      </S.Container>
    </>
  );
}