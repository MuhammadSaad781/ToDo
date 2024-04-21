import { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { font } from "../Constants/Fonts";
import { colors } from "../Constants/Colors";

import { AntDesign } from "@expo/vector-icons";
import { listData } from "../Constants/ListData";
import TodoList from "../Components/TodoList";
import AppListModal from "../Components/AddListModal";

export default function Home() {
  const [modal, setmodal] = useState(false);

  function openmodal() {
    setmodal(true);
  }
  function modalclose() {
    setmodal(false);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{ height: 1, backgroundColor: colors.black, width: 100 }}
        ></View>
        <Text
          style={{
            fontSize: 38,
            fontFamily: font.bold,
            paddingHorizontal: 20,
          }}
        >
          ToDo{" "}
          <Text
            style={{
              color: colors.blue,
              fontFamily: font.regular,
            }}
          >
            List
          </Text>
        </Text>
        <View
          style={{ height: 1, backgroundColor: colors.black, width: 100 }}
        ></View>
      </View>
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: colors.blue,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
        onPress={() => openmodal()}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
      <View style={{ width: "95%", marginTop: 40 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={listData}
          ItemSeparatorComponent={<View style={{ width: 10 }}></View>}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <TodoList list={item} />}
        />
      </View>
      <Modal animationType="fade" visible={modal}>
        <AppListModal closemodal={modalclose} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "center",
  },
});
