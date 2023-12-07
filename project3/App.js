import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import USCityDestinations from './screens/USCityDestinations';
import CityOrNationalPark from './screens/CityOrNationalPark';
import NationalParkDestinations from './screens/NationalParkDestinations';
import NewYorkDetails from './screens/NewYorkDetails';
import LosAngelesDetails from './screens/LosAngelesDetails';
import MiamiDetails from './screens/MiamiDetails';
import SanFranciscoDetails from './screens/SanFranciscoDetails';
import HonoluluDetails from './screens/HonoluluDetails';
import AcadiaDetails from './screens/AcadiaDetails';
import DenaliDetails from './screens/DenaliDetails';
import GlacierDetails from './screens/GlacierDetails';
import GrandCanyonDetails from './screens/GrandCanyonDetails';
import YosemiteDetails from './screens/YosemiteDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options= {{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name='USCityDestinations' component={USCityDestinations} />    
        <Stack.Screen name='CityOrNationalPark' component={CityOrNationalPark} />  
        <Stack.Screen name='NationalParkDestinations' component={NationalParkDestinations} /> 
        <Stack.Screen name='NewYorkDetails' component={NewYorkDetails} />
        <Stack.Screen name='LosAngelesDetails' component={LosAngelesDetails} />
        <Stack.Screen name='MiamiDetails' component={MiamiDetails} />
        <Stack.Screen name='SanFranciscoDetails' component={SanFranciscoDetails} />
        <Stack.Screen name='HonoluluDetails' component={HonoluluDetails} />
        <Stack.Screen name='GrandCanyonDetails' component={GrandCanyonDetails} />
        <Stack.Screen name='DenaliDetails' component={DenaliDetails} />
        <Stack.Screen name='GlacierDetails' component={GlacierDetails} />
        <Stack.Screen name='AcadiaDetails' component={AcadiaDetails} />
        <Stack.Screen name='YosemiteDetails' component={YosemiteDetails} />
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