import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import { Home } from '../../screens/Home/Home';
import { CarDetails } from '../../screens/CarDetails/CarDetails';
import { Scheduling } from '../../screens/Scheduling/Scheduling';
import { SchedulingDetails } from '../../screens/SchedulingDetails/SchedulingDetails';
import { SchedulingComplete } from '../../screens/SchedulingComplete/SchedulingComplete';

export const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name='Home'
        component={Home}
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
    </Stack.Navigator>
  );
}