import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { font } from "../Constants/Fonts";
import { colors } from "../Constants/Colors";

//icons
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";

export default function ToDoListModal({ data, close }) {
  const completedcount = data.todos.filter((item) => item.completed).length;
  const remainingcount = data.todos.length - completedcount;
  const totallength = data.todos.length;
  const todos = data.todos;
  const [newtask, setnewtask] = useState("");
  return (
    <>
      <TouchableOpacity
        style={{ position: "absolute", right: 20, top: 30 }}
        onPress={() => close()}
      >
        <Entypo name="cross" size={30} color="black" />
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          width: "90%",
          alignSelf: "center",
          marginTop: 80,
        }}
      >
        <View>
          <Text style={{ fontFamily: font.bold, fontSize: 30 }}>
            {data.name}
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: font.regular, fontSize: 14 }}>
            {remainingcount} out of {totallength} are remaining
          </Text>
        </View>

        <View
          style={{ height: 2, backgroundColor: data.color, marginTop: 10 }}
        ></View>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginTop: 20,
              }}
            >
              <Ionicons
                name={item.completed ? "square" : "square-outline"}
                color={item.completed ? "grey" : "black"}
                size={20}
              />
              <Text
                style={{
                  fontFamily: font.regular,
                  fontSize: 18,
                  textDecorationLine: item.completed ? "line-through" : "none",
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 30,
          width: "90%",
          height: 60,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",

          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholder="Enter New Task"
          style={{
            height: 60,
            borderWidth: 1,
            borderColor: data.color,
            borderRadius: 10,
            width: "80%",
            display: "flex",
            alignSelf: "center",
            fontFamily: font.regular,
            paddingHorizontal: 10,
          }}
          onChangeText={(text) => setnewtask(text)}
        />
        <TouchableOpacity
          style={{
            width: 50,
            height: 60,
            borderRadius: 10,
            backgroundColor: data.color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => console.log(newtask)}
        >
          <AntDesign name="plus" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
