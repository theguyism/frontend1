import { StatusBar } from "expo-status-bar";

import { NativeScreenNavigationContainer } from "react-native-screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackActions } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
//import HomeScreen from "./page/Home.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
