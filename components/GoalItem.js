import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

function GoalItem(props) {
  return (
    <TouchableHighlight onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.item}>
        <Text>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
  },
});

export default GoalItem;
