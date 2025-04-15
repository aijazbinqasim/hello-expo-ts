import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  text: string;
}

export default function Square({ text }: Props): React.JSX.Element {
  return (
    <View style={styles.square}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    borderColor: "#fff",
    borderWidth: 1,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
