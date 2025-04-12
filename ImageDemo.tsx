import { StyleSheet, Image, SafeAreaView } from "react-native";

export default function ImageDemo(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
     <Image source={require('./assets/flower.jpg')} style={styles.image}/>


      {/* <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.image}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
});
