import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

//icons
import { Entypo } from "@expo/vector-icons";
import { font } from "../Constants/Fonts";
import { colors } from "../Constants/Colors";
import { listData } from "../Constants/ListData";

export default function AddListModal({ closemodal }) {
  const backgroundColors = [
    "#5CD859",
    "#24A6D9",
    "#595BD9",
    "#8022D9",
    "#D159D8",
    "#D85963",
    "#D88559",
  ];

  const [name, setname] = useState("");
  const [color, setcolor] = useState(backgroundColors[0]);

  const createToDo = () => {
    listData.push({
      name,
      color,
      todos: [],
    }),
      closemodal();
  };
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <TouchableOpacity
        style={{ position: "absolute", right: 20, top: 30 }}
        onPress={closemodal}
      >
        <Entypo name="cross" size={30} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: font.bold, fontSize: 30 }}>Create List</Text>
      <TextInput
        placeholder="List Name"
        style={{
          borderWidth: 1,
          width: "90%",
          height: 60,
          borderRadius: 10,
          borderColor: colors.blue,
          fontFamily: font.regular,
          paddingHorizontal: 10,
          marginTop: 20,
        }}
        onChangeText={(text) => setname(text)}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        {backgroundColors.map((color) => {
          return (
            <TouchableOpacity
              key={color}
              style={{
                height: 40,
                width: 40,
                backgroundColor: color,
                borderRadius: 10,
                marginTop: 20,
              }}
              onPress={() => setcolor(color)}
            />
          );
        })}
      </View>
      <TouchableOpacity
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: color,
          width: "90%",
          borderRadius: 12,
          height: 60,
          marginTop: 30,
        }}
        onPress={() => createToDo()}
      >
        <Text
          style={{ fontFamily: font.regular, fontSize: 18, color: "white" }}
        >
          Create!
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
