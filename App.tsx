import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View } from "react-native";
import GlobalStyle from "./style";

const App = () => {
  const [name, setName] = useState("");

  return (
    <View style={GlobalStyle.container}>
      <Text>Open up App.js to start working on your app!!</Text>
      <Text>Hi,</Text>
      <TextInput
        style={GlobalStyle.textinput}
        placeholder="Please enter your name"
        onChangeText={(input) => setName(input)}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
