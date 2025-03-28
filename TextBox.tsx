import { useState } from "react";
import { StyleSheet, SafeAreaView, TextInput, Text } from "react-native";

export default function TextBox(): React.JSX.Element {
  const [mail, setMail] = useState<string>("");

  const handleNameChange = (text: string): void => {
    setMail(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Email"
        value={mail}
        //onChangeText={setName} // also OK
        onChangeText={handleNameChange}
        keyboardType="email-address"
        autoComplete="email"
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Password"
        secureTextEntry={true}
      />

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.textarea}
        multiline={true}
        placeholder="Enter Your Address"
        numberOfLines={5}
        autoCorrect
      />
      <Text style={styles.output}>{mail}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 12,
    fontSize: 16,
  },

  output: {
    fontSize: 16,
  },
  textarea: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 12,
    fontSize: 16,
    height: 5 * 24,
    textAlignVertical: "top",
  },
});
