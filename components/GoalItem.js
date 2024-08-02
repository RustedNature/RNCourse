import { StyleSheet, View, Text, Pressable, Platform } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={props.onDelete.bind(this, props.id)}
        style={({ pressed }) =>
          pressed && Platform.OS === "ios" && styles.pressedItem
        }
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: "#00000046",
  },
  goalText: {
    borderRadius: 5,
    padding: 5,
    color: "#000000",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
