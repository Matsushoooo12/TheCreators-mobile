import { Box, Text, Button } from "native-base";
import React from "react";

const AboutScreen = ({ navigation }: any) => {
  return (
    <Box>
      <Text>AboutScreen</Text>
      <Button onPress={() => navigation.goBack()}>閉じる</Button>
    </Box>
  );
};

export default AboutScreen;
