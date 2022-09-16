import { Car } from './Car';

export interface RoutesList {
  Home: undefined;
  CarDetails: {car: Car};
  Scheduling: undefined;
  SchedulingDetails: undefined;
  SchedulingComplete: undefined;
}