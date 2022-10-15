import { View, Text, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="メッセージ"
        onPress={() => navigation.navigate("Message")}
      />
      <Button title="設定" onPress={() => navigation.navigate("Setting")} />
    </View>
  );
};

export default HomeScreen;
