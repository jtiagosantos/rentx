import { Platform } from 'react-native';
import { addDays } from 'date-fns';

export const getPlatformDate = (date: Date) => 
  Platform.OS === 'ios' ? addDays(date, 1) : date;