import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { font } from "../Constants/Fonts";
import { colors } from "../Constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { Firebase_Auth } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const navigation = useNavigation();
  const [Loading, setLoading] = useState();
  const auth = Firebase_Auth;

  const SignIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, Email, Password);
      navigation.navigate("Home");
    } catch (error) {
      alert("Login failed" + error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",

        justifyContent: "center",
      }}
    >
      {Loading ? (
        <ActivityIndicator />
      ) : (
        <>
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
              ToDo
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

          <View
            style={{
              width: "90%",
              alignSelf: "center",
              marginTop: 20,
              gap: 10,
            }}
          >
            <Text style={{ fontFamily: font.bold, fontSize: 18 }}>Email</Text>
            <TextInput
              style={{
                width: "100%",
                height: 60,
                borderWidth: 1,
                borderColor: "black",
                alignSelf: "center",
                borderRadius: 10,
                paddingHorizontal: 10,
                fontSize: 18,
                fontFamily: font.regular,
              }}
              onChangeText={(text) => setEmail(text)}
            />
            <Text style={{ fontFamily: font.bold, fontSize: 18 }}>
              Password
            </Text>
            <TextInput
              style={{
                width: "100%",
                height: 60,
                borderWidth: 1,
                borderColor: "black",
                alignSelf: "center",
                borderRadius: 10,
                paddingHorizontal: 10,
                fontSize: 18,
                fontFamily: font.regular,
              }}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <TouchableOpacity
            style={{
              width: "90%",
              height: 70,
              borderRadius: 100,
              backgroundColor: colors.blue,
              alignSelf: "center",
              marginTop: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={SignIn}
          >
            <Text
              style={{ fontFamily: font.regular, fontSize: 18, color: "white" }}
            >
              Login
            </Text>
          </TouchableOpacity>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontFamily: font.regular, fontSize: 14 }}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={{ fontFamily: font.bold, fontSize: 16 }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
