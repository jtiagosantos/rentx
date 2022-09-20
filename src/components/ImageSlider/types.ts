import { ViewToken } from 'react-native';

export interface ImageSliderProps {
  images: Array<string>;
}

export interface ImageIndexProps {
  active: boolean;
}

export interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}