import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import CartScreen from "./screens/CartScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AccountScreen from "./screens/AccountScreen";
import {Image} from "react-native";
import MenuStack from "./MenuStack";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                tabBarActiveTintColor: '#DB3C25',
            }}
        >
            <Tab.Screen
                name="Home"
                options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons name="home-outline" color={color} size={24}/>
                    )
                }}
                component={HomeScreen}
            />
            <Tab.Screen
                name="Menu"
                component={MenuStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="view-grid" color={color} size={24}/>
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerLeft: () => (
                        <Image source={require('../assets/back.png')} style={{width: 36, height: 36, marginLeft: 24}} />
                    ),
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="shopping" color={color} size={24}/>
                    )
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Image source={require('../assets/account.png')} style={{
                            width: 24,
                            height: 24
                        }}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
}
