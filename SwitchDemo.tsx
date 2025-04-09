import { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

export default function SwitchDemo(): React.JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);
  const toggleSwitch = (): void => setIsActive((prevActive) => !prevActive);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {isActive ? "Switch is ON" : "Switch is OFF"}
      </Text>
      <Switch
        onValueChange={toggleSwitch}
        value={isActive}
        trackColor={{ false: "#ddd", true: "#f6706b" }}
        thumbColor={isActive ? "#fbd0cf" : "#fff"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
