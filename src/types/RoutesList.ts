import { Car } from './Car';

export interface RoutesList {
  Splash: undefined;
  Home: undefined;
  CarDetails: {car: Car};
  Scheduling: {car: Car};
  SchedulingDetails: {car: Car, dates: string[]};
  SchedulingComplete: undefined;
  MyCars: undefined;
}