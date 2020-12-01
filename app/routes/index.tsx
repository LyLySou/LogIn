import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeContainer from '../screen/Home/HomeContainer';
import LoginContainer from '../screen/Auth/Login/LoginContainter';
import WelcomeContainer from '../screen/Auth/Welcome/WelcomeContainter';
import RegisterScreen from '../screen/Auth/Register/RegisterScreen';
import RegisterContainer from '../screen/Auth/Register/RegisterCointainer';



const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    <Stack.Navigator headerMode="none">
      
      <Stack.Screen name="Register" component={RegisterContainer} />
      <Stack.Screen name="Welcome" component={WelcomeContainer} />
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="Home" component={HomeContainer} />


    </Stack.Navigator>
  );
}



export default function App() {
  return <NavigationContainer>{AppStack()}</NavigationContainer>;
}

// export default App();
