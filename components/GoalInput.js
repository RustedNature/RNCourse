import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: props.nextKey },
    ]);
    props.setNextKey(props.nextKey + 1);
    setEnteredGoalText("");
    props.onCancel();
  }

  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/test.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    minHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    backgroundColor: "#1e6baa6b",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "35%",
    margin: 5,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#000000aa",
    marginEnd: 8,
    padding: 5,
  },
  image: {
    width: 250,
    height: 250,
    margin: 50,
    borderWidth: 3,
    borderColor: "#00000066",
  },
});
