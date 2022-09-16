import { NavigationContainer } from '@react-navigation/native';

//routes
import { StackRoutes } from './stack';

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}