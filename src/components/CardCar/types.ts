import { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

export interface CardCarProps extends TouchableOpacityProps {
  brand: string;
  name: string;
  icon: FC<SvgProps>;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
};
