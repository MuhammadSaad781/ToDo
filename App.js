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
import { font } from "./Constants/Fonts";
import { colors } from "./Constants/Colors";

import * as SplashScreen from "expo-splash-screen";
import { AntDesign } from "@expo/vector-icons";
import { listData } from "./Constants/ListData";
import TodoList from "./Components/TodoList";
import AppListModal from "./Components/AddListModal";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
  const [modal, setmodal] = useState(false);

  function openmodal() {
    setmodal(true);
  }
  function modalclose() {
    setmodal(false);
  }

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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "fade" }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
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
