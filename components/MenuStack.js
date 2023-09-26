import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MenuScreen from "./screens/MenuScreen";
import ItemDetailScreen from "./screens/ItemDetailScreen";
import CartScreen from "./screens/CartScreen";

const Stack = createNativeStackNavigator()
export default function MenuStack(){
  return(
      <Stack.Navigator
          screenOptions={{
              headerTitleAlign: 'center'
          }}
      >
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Detail" component={ItemDetailScreen} options={{
              headerTitle: '',
              headerBackImageSource: require('../assets/back.png')
          }}/>
          <Stack.Screen name="Cart" component={CartScreen} options={{
              headerTitle: 'Cart',
              headerBackImageSource: require('../assets/back.png')
          }}/>
      </Stack.Navigator>
  )
}
