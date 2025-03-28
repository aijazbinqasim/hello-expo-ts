import React from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";

export default function App(): React.JSX.Element {
  const children: React.JSX.Element[] = [];

  for (let i = 0; i <= 40; i++) {
    children.push(
      <Text style={styles.text} key={i}>
        Line: {i}
      </Text>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    textAlign: "center",
  },
});
