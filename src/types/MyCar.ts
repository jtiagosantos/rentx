import { Car } from './Car';

export interface MyCar {
  user_id: number,
  id: number;
  car: Car,
  startDate: string;
  endDate: string;
}