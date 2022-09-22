import React from 'react';
import LottieView from 'lottie-react-native';

//assets
import carLoading from '../../assets/car_loading.json';

//styles
import { Container } from './styles';

export const CarLoading = () => {
  return (
    <Container>
      <LottieView 
        source={carLoading}
        style={{
          width: 150,
          height: 150,
        }}
        resizeMode='contain'
        autoPlay
        loop
      />
    </Container>
  );
}