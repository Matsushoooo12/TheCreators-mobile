import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import SettingScreen from "../screens/SettingScreen";
import FeedScreen from "../screens/FeedScreen";
import MessageScreen from "../screens/MessageScreen";
import AboutScreen from "../screens/AboutScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group>
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
