import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

export interface AccessoryProps {
  name: string;
  icon: FC<SvgProps>;
}