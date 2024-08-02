import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalListItem}>
      <Text>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalListItem: {
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: "#998d8d33",
  },
});
