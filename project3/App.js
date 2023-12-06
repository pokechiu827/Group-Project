import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ResultsScreen from './screens/ResultsScreen';
import USDestinations from './screens/USDestinations';
import IntDestinations from './screens/IntDestinations';
import DomesticOrInternational from './screens/DomesticOrInternational';
import CityOrNationalPark from './screens/CityOrNationalPark';
import NationalParkDestinations from './screens/NationalParkDestinations';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options= {{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name='Results' component={ResultsScreen} />
        <Stack.Screen name="DomesticOrInternational" component={DomesticOrInternational} />
        <Stack.Screen name='USDestinations' component={USDestinations} />
        <Stack.Screen name='IntDestinations' component={IntDestinations} />     
        <Stack.Screen name='CityOrNationalPark' component={CityOrNationalPark} />  
        <Stack.Screen name='NationalParkDestinations' component={NationalParkDestinations} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
