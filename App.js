import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import BottomTabNavigator from "./components/BottomTabNavigator";
import {useFonts,Inter_500Medium, Inter_400Regular} from '@expo-google-fonts/inter'
import {Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium} from '@expo-google-fonts/poppins'

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}
