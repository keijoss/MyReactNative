import React, { useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../authentication/AuthContext";

import { AppColors } from "../themes";
import {
  useFonts,
  Outfit_100Thin,
  Outfit_200ExtraLight,
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold,
  Outfit_800ExtraBold,
  Outfit_900Black,
} from "@expo-google-fonts/outfit";

const Login = () => {
  const navigation = useNavigation();
  const { setAuthState } = useAuth(); // useAuth should now return a valid context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.50.216:9000/login", {
        email,
        password,
      });
      const { token, userId, roleId } = response.data;

      await AsyncStorage.setItem("token", token);

      setAuthState({
        isLoggedIn: true,
        userId,
        roleId,
      });

      navigation.navigate("Gift");
    } catch (error) {
      console.error("Login failed!", error);
      alert("Login failed. Please check your ID and password.");
    }
  };

  return (
    <>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={styles.navbar}>
          <Text style={styles.pageSubTitle}>Login Account</Text>
          <Text style={{ fontSize: 14, fontFamily: "Outfit_300Light" }}>
            Please login to reveal the gift.
          </Text>
        </View>
      </SafeAreaView>
      <View
        style={{
          position: "relative",
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          backgroundColor: "pink",
          padding: 30,
          paddingBottom: 60,
        }}
      >
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              color: "black",
              fontFamily: "Outfit_400Regular",
            }}
          >
            Enter your Student ID:
          </Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.TextInput}
          />
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              color: "black",
              fontFamily: "Outfit_400Regular",
            }}
          >
            Enter your Password:
          </Text>
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.TextInput}
          />
        </View>
        <View style={{margin: 15}}>
          <Button title="Login" color='violet' onPress={handleLogin} />
        </View>

        <View style={{alignSelf: 'center', marginTop: 20}}>
            <Text>Don't have an account yet?</Text>
            <Button title="Sign Up" color='violet' onPress={() => navigation.navigate("SignUp")}/>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    margin: 1,
  },
  navbar: {
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
    justifyContent: "space-between",
    margin: 10,
    marginTop: 100,
  },
  pageSubTitle: {
    fontFamily: "Outfit_900Black",
    color: '#FF86C3',
    fontSize: 40,
    fontWeight: "bold",
    padding: 10,
  },
  TextInput: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 0,
    backgroundColor: AppColors.white,
  },
});

export default Login;
