import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';

//assets
import BrandImage from '../../assets/brand.svg';
import LogoImage from '../../assets/logo.svg';

//styles
import { Container } from './styles';

export const Splash = () => {
  const navigation = useNavigation();
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [0, -100],
            Extrapolate.CLAMP,
          ),
        }
      ],
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [0, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [-100, 0],
            Extrapolate.CLAMP,
          ),
        }
      ],
    };
  });

  const startApp = () => {
    navigation.navigate('Home');
  }

  useEffect(() => {
    splashAnimation.value = withTiming(
      50, 
      { duration: 1000 },
      () => runOnJS(startApp)(),
      );
  }, []);

  return (
    <>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <Container>
        <Animated.View style={[brandStyle, { position: 'absolute' }]}>
          <BrandImage width={80} height={50} />
        </Animated.View>

        <Animated.View style={[logoStyle, { position: 'absolute' }]}>
          <LogoImage width={180} height={20} />
        </Animated.View>
      </Container>
    </>
  );
}

