import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../Constants/Colors";
import { font } from "../Constants/Fonts";

export default function TodoList({ list }) {
  const completedcount = list.todos.filter((item) => item.completed).length;
  const remainingcount = list.todos.length - completedcount;
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: list.color }]}
    >
      <Text
        style={{
          color: colors.white,
          fontFamily: font.bold,
          marginTop: 10,
          fontSize: 18,
        }}
      >
        {list.name}
      </Text>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 10,
        }}
      >
        <Text style={styles.number}>{completedcount}</Text>
        <Text style={styles.text}>Completed</Text>
        <Text style={styles.number}>{remainingcount}</Text>
        <Text style={styles.text}>Remaining</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 220,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: colors.white,
    fontFamily: font.regular,
    fontSize: 20,
  },
  text: {
    color: colors.white,
    fontFamily: font.regular,
    fontSize: 14,
  },
});
