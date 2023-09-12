import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import MyOrderScreen from "./screens/MyOrderScreen";
import NearByScreen from "./screens/NearByScreen";
import LoginScreen from "../accounts/Login"

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="NearBy"
        component={NearByScreen}
        options={{
          tabBarLabel: "Near By",
          tabBarActiveTintColor:"#D90504",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="location"
              size={25}
              color={focused ? "#D90504" : "#999"}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="MyOrder"
        component={MyOrderScreen}
        options={{
          tabBarLabel: "My Order",
          tabBarActiveTintColor:"#D90504",
          tabBarIcon: ({ focused }) => (
            <Icon name="list" size={25} color={focused ? "#D90504" : "#999"} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor:"#D90504",
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={25} color={focused ? "#D90504" : "#999"} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarActiveTintColor:"#D90504",
          tabBarIcon: ({ focused }) => (
            <Icon name="cart" size={25} color={focused ? "#D90504" : "#999"} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={LoginScreen}
        options={{
          tabBarLabel: "Account",
          tabBarActiveTintColor:"#D90504",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="person"
              size={25}
              color={focused ? "#D90504" : "#999"}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
