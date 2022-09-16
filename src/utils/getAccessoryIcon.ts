//assets
import speedImage from '../assets/speed.svg';
import accelerationImage from '../assets/acceleration.svg';
import forceImage from '../assets/force.svg';
import gasolineImage from '../assets/gasoline.svg';
import exchangeImage from '../assets/exchange.svg';
import peopleImage from '../assets/people.svg';
import energyImage from '../assets/energy.svg';
import hybridImage from '../assets/hybrid.svg';
import carImage from '../assets/car.svg';

const icons = {
  'speed': speedImage,
  'acceleration': accelerationImage,
  'turning_diameter': forceImage,
  'gasoline_motor': gasolineImage,
  'electric_motor': energyImage,
  'hybrid_motor': hybridImage,
  'exchange': exchangeImage,
  'seats': peopleImage,
};

export const getAccessoryIcon = (iconType: string) => 
  icons[iconType] || carImage;
