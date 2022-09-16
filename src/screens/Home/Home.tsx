import React, { useState, useEffect } from 'react';
import { StatusBar, ListRenderItemInfo } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

//services
import { getCarsService } from '../../services/cars/getCarsService';

//components
import { CardCar } from '../../components/CardCar/CardCar';
import { Loading } from '../../components/Loading/Loading';

//utils
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

//types
import { Car } from '../../types/Car';

//assets
import Logo from '../../assets/logo.svg';

//styles
import * as S from './styles';

export const Home = () => {
  const navigation = useNavigation();
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSeeCarDetails = (car: Car) => {
    navigation.navigate('CarDetails', { car });
  }

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);

      const { data, error } = await getCarsService();

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
        backgroundColor='transparent'
        translucent
      />

      <S.Container>
        <S.Header>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <S.TotalCars>Total de {cars.length} carros</S.TotalCars>
        </S.Header>

        {!!error && (
          <S.MessageError>{error}</S.MessageError>
        )}
        {loading ? (
          <Loading />
        ) : (
          <S.CardList
            data={cars}
            keyExtractor={(item: Car) => item.id}
            renderItem={({ item }: ListRenderItemInfo<Car>) => (
              <CardCar 
                {...item} 
                icon={getAccessoryIcon(item.fuel_type)}
                activeOpacity={0.6} 
                onPress={() => handleSeeCarDetails(item)}
              />
            )}
            ItemSeparatorComponent={() => <S.Separator />}
          />
        )}
      </S.Container>
    </>
  );
}