import React from 'react';
import { StatusBar, ListRenderItemInfo } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

//components
import { CardCar } from '../../components/CardCar/CardCar';

//assets
import Logo from '../../assets/logo.svg';

//styles
import * as S from './styles';

export const Home = () => {
  const navigation = useNavigation();

  const mockedCars = [
    {
      id: 1,
      brand: 'AUDI',
      name: 'RS 5 Coupé',
      rent: {
        period: 'Ao dia',
        price: 'R$ 120',
      },
      thumbnail: 'https://www.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841516415001715.webp?s=fill&w=236&h=135&q=70&t=true',
    },
    {
      id: 2,
      brand: 'AUDI',
      name: 'RS 5 Coupé',
      rent: {
        period: 'Ao dia',
        price: 'R$ 120',
      },
      thumbnail: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png',
    },
  ];

  type MockedCard = typeof mockedCars[0];

  const handleSeeCarDetails = () => {
    navigation.navigate('CarDetails');
  }

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

        <S.CardList
          data={mockedCars}
          keyExtractor={(item: MockedCard) => String(item.id)}
          renderItem={({ item }: ListRenderItemInfo<MockedCard>) => (
            <CardCar 
              {...item} 
              activeOpacity={0.6} 
              onPress={handleSeeCarDetails}
            />
          )}
          ItemSeparatorComponent={() => <S.Separator />}
        />
      </S.Container>
    </>
  );
}