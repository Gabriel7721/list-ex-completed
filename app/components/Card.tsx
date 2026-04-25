import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

interface Props {
  title: string;
  subTitle?: string;
  image: ImageSourcePropType;
}

export default function Card({ image, title, subTitle }: Props) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText children={title} style={styles.title} />
        <AppText children={subTitle} style={styles.subTitle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: "navy",
  },
  detailsContainer: { padding: 20 },
  title: { marginBottom: 7 },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
