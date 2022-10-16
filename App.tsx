import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import UserScreen from "./src/screens/UserScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNavigator from "./src/navigations/StackNavigator";
import { NativeBaseProvider, Box } from "native-base";
import theme from "./src/theme";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <StackNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
