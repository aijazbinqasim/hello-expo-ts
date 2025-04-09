import { StyleSheet, Pressable, View, Alert, Text } from "react-native";

export default function PressAble() {
  const handlePress = (): void => {
    Alert.alert("Pressed", 'I am alert content!');
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Button</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 332,
    minWidth: 100,
    alignItems: "center",
    backgroundColor: "#111",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
