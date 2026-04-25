import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/images/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo-red.png")}
          style={styles.logo}
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          color={colors.primary}
          title={"login"}
          onPress={() => console.log("Tapped!")}
        />
        <AppButton
          color={colors.secondary}
          title={"register"}
          onPress={() => console.log("Tapped!")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  buttonContainer: { padding: 20, width: "100%" },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
