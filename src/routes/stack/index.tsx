import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import { Splash } from '../../screens/Splash/Splash';
import { Home } from '../../screens/Home/Home';
import { CarDetails } from '../../screens/CarDetails/CarDetails';
import { Scheduling } from '../../screens/Scheduling/Scheduling';
import { SchedulingDetails } from '../../screens/SchedulingDetails/SchedulingDetails';
import { SchedulingComplete } from '../../screens/SchedulingComplete/SchedulingComplete';
import { MyCars } from '../../screens/MyCars/MyCars';

export const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name='Splash'
        component={Splash}
      />
      <Stack.Screen 
        name='Home'
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen 
        name='CarDetails'
        component={CarDetails}
      />
      <Stack.Screen 
        name='Scheduling'
        component={Scheduling}
      />
      <Stack.Screen 
        name='SchedulingDetails'
        component={SchedulingDetails}
      />
      <Stack.Screen 
        name='SchedulingComplete'
        component={SchedulingComplete}
      />
      <Stack.Screen 
        name='MyCars'
        component={MyCars}
      />
    </Stack.Navigator>
  );
}