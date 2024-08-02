import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setModalIsVisible] = useState(false);
  const [nextKey, setNextKey] = useState(0);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function stopAddGoalHandler() {
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="blue" onPress={startAddGoalHandler} />

      {isModalVisible && (
        <GoalInput
          nextKey={nextKey}
          setNextKey={setNextKey}
          isModalVisible={isModalVisible}
          setCourseGoals={setCourseGoals}
          onCancel={stopAddGoalHandler}
        />
      )}

      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDelete={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e6baa6b",
  },

  goalContainer: {
    marginTop: 16,
    flex: 5,
  },
});
