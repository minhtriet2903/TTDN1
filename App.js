import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthStackNavigator} from './navigators/AuthStackNavigator';

const RootStack = createStackNavigator();

export default function() {
  return (
  <NavigationContainer>
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      <RootStack.Screen name={'RootStack'} component ={AuthStackNavigator}/>
    </RootStack.Navigator>
  </NavigationContainer>
  );
}

