import { NativeScreenNavigationContainer } from "react-native-screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackActions } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./page/Home.js";
import RegisterScreen from "./page/Register.js";
import CustomerScreen from "./page/Customer.js";
import StaffScreen from "./page/Staff.js"
import React, { Component } from 'react';
import { Keyboard, TextInput } from 'react-native';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen component={HomeScreen} name = "Home"/>
        <Stack.Screen component={RegisterScreen} name = "Register"/>
        <Stack.Screen component={CustomerScreen} name = "Customer"/>
        <Stack.Screen component={StaffScreen} name = "Staff"/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
