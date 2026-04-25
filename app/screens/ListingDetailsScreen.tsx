import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/jacket.jpg")}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText children={"Red jacket for sale!"} style={styles.title} />
        <AppText children={"$50"} style={styles.subTitle} />
      </View>

      <View style={styles.userContainer}>
        <ListItem
          title={"Mario Andolini"}
          image={require("../assets/images/mario.jpg")}
          subTitle="2 posts this week"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: { marginVertical: 40 },
  image: {
    width: "100%",
    height: 300,
    backgroundColor: "navy",
  },
  detailsContainer: { padding: 20 },
  title: { fontSize: 24, fontWeight: "500" },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
