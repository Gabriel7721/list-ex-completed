import React from "react";
import { FlatList, ImageSourcePropType, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

interface Listing {
  id: number;
  title: string;
  price: number;
  image: ImageSourcePropType;
}

const listings: Listing[] = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/images/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/images/couch.jpg"),
  },
];

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image}
            subTitle={"$" + item.price}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
