import { TouchableOpacityProps } from 'react-native';

export interface CardCarProps extends TouchableOpacityProps {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
};
