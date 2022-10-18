import React from "react";
import { Box, Text, Button } from "native-base";

const AboutScreen = ({ navigation }: any) => {
  return (
    <Box>
      <Text>AboutScreen</Text>
      <Button onPress={() => navigation.goBack()}>閉じる</Button>
    </Box>
  );
};

export default AboutScreen;
