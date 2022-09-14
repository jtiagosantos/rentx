import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
}

export type ContainerProps = Pick<ButtonProps, 'color'>;