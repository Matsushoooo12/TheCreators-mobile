// import { View, Text, Button } from "react-native";
import React from "react";
import { Box, Text, Button } from "native-base";

const HomeScreen = ({ navigation }: any) => {
  return (
    <>
      <Box>
        <Text>HomeScreen</Text>
        <Button onPress={() => navigation.navigate("Feed")}>Feed</Button>
        <Button onPress={() => navigation.navigate("Setting")}>Setting</Button>
        <Button onPress={() => navigation.navigate("About")}>About</Button>
      </Box>
    </>
  );
};

export default HomeScreen;
