import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

export default function KeybAvoidView() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <Text style={styles.title}>Hello Expo + React</Text>
        <View style={styles.field}>
          <Text style={styles.label}>Name:</Text>
          <TextInput placeholder="Enter your name" style={styles.input} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 16,
  },
  field: {
    marginTop: "auto",
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
  },
});
