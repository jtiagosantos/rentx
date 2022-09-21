import React, { useState, useEffect } from 'react';
import { 
  StatusBar, 
  ListRenderItemInfo, 
  TouchableOpacity, 
  StyleSheet,
  BackHandler, 
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

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
import { theme } from '../../styles/theme';

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

export const Home = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const myCarsButtonStyleAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    }
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    /* onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    } */
  });

  const handleSeeCarDetails = (car: Car) => {
    navigation.navigate('CarDetails', { car });
  }

  const handleSeeMyCars = () => {
    navigation.navigate('MyCars');
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

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => null);
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
          {!loading && (
            <S.TotalCars>Total de {cars.length} carros</S.TotalCars>
          )}
        </S.Header>

        {!!error && (
          <S.MessageError>{error}</S.MessageError>
        )}
        {loading ? (
          <Loading />
        ) : (
          <S.CarList
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

        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View
            style={[
              myCarsButtonStyleAnimation,
              styles.button,
            ]}
          >
            <AnimatedButton 
              activeOpacity={0.6}
              onPress={handleSeeMyCars}
            >
              <Ionicons 
                name='ios-car-sport'
                size={32} 
                color={theme.colors.shape}
              />
            </AnimatedButton>
          </Animated.View>
        </PanGestureHandler>
      </S.Container>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 13,
    right: 22,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.main,
  },
});