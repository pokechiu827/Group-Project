import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ResultsScreen from './screens/ResultsScreen';
import Question1 from './screens/Question1';
import Question2 from './screens/Question2';
import Question3 from './screens/Question3';
import Question4 from './screens/Question4';
import Question5 from './screens/Question5';
import Question6 from './screens/Question6';
import Question7 from './screens/Question7';
import Question8 from './screens/Question8';
import Question9 from './screens/Question9';
import Question10 from './screens/Question10';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options= {{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name='Results' component={ResultsScreen} />
        <Stack.Screen name='Question1' component={Question1} />
        <Stack.Screen name='Question2' component={Question2} />
        <Stack.Screen name='Question3' component={Question3} />
        <Stack.Screen name='Question4' component={Question4} />
        <Stack.Screen name='Question5' component={Question5} />
        <Stack.Screen name='Question6' component={Question6} />
        <Stack.Screen name='Question7' component={Question7} />
        <Stack.Screen name='Question8' component={Question8} />
        <Stack.Screen name='Question9' component={Question9} />
        <Stack.Screen name='Question10' component={Question10} />
        
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