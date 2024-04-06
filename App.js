import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { font } from "./Constants/Fonts";
import { colors } from "./Constants/Colors";

import * as SplashScreen from "expo-splash-screen";
import { AntDesign } from "@expo/vector-icons";
import { listData } from "./Constants/ListData";
import TodoList from "./Components/TodoList";

export default function App() {
  const [fontsLoaded] = useFonts({
    CircularRegular: require("./assets/CircularStd.ttf"),
    CircularBold: require("./assets/CircularStd-Bold.otf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
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
        }}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
      <View style={{ width: "95%", marginTop: 20 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={listData}
          ItemSeparatorComponent={<View style={{ width: 10 }}></View>}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <TodoList list={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },
});
