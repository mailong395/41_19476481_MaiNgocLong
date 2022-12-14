import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen01 from "./componet/Screen_01";
import Screen02 from "./componet/Screen_02";
import Screen03 from "./componet/Screen_03";

export default function App() {
  const [screen, setScreen] = useState(0);

  return (
    <View style={styles.container}>
      {screen === 0 ? (
        <Screen01 onPress={() => setScreen(1)} />
      ) : screen === 1 ? (
        <Screen02 onPress={() => setScreen(2)} />
      ) : (
        <Screen03 />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
