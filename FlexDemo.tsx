import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function FlexDemo(): React.JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#7CA1B4",
    flexWrap: "wrap",
    gap: "5",
  },

  square: {
    backgroundColor: "#7BB590",
    width: 100,
    height: 100,
    margin: 4,
  },
});
