import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoal = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  const cancelGoal = () => {
    props.cancelGoalHandler();
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          placeholder="new goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.btnContainer}>
          <Button title="CANCEL" color="red" onPress={cancelGoal} />
          <Button title="ADD" onPress={addGoal} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default GoalInput;
