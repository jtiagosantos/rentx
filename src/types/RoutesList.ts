import { Car } from './Car';

export interface RoutesList {
  Home: undefined;
  CarDetails: {car: Car};
  Scheduling: {car: Car};
  SchedulingDetails: {car: Car, dates: string[]};
  SchedulingComplete: undefined;
}