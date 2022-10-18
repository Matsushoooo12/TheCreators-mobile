import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";
import { AntDesign } from "@expo/vector-icons";
import MessageScreen from "../screens/MessageScreen";
import { Image } from "native-base";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="message1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <Image
              source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
              borderRadius={100}
              size={size}
              alt="image"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
