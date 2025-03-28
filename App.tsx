import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { items, Item } from "./data/items";

export default function App() {
  const renderItem = ({ item }: { item: Item }) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listTitle}>{item.name}</Text>
        <Text style={styles.listTitle}>{item.emoji}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList style={styles.list} data={items} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 0.5,
    fontSize: 16,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  listTitle: {
    fontSize: 40,
  },
});
