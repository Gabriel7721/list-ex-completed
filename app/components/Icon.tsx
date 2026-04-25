import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

export type IconName = React.ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

interface Props {
  name: IconName;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}

export default function Icon({
  name,
  backgroundColor = colors.black,
  iconColor = colors.white,
  size = 40,
}: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
        },
      ]}>
      <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
