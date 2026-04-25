import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon, { IconName } from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

interface MenuItem {
  title: string;
  icon: {
    name: IconName;
    backgroundColor: string;
  };
}

const menuItems: MenuItem[] = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "message",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={"Mario Andolini"}
          subTitle="mario@gmail.com"
          image={require("../assets/images/mario.jpg")}
        />
      </View>
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(i) => i.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  iconColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title={"Log Out"}
          ImageComponent={
            <Icon
              name={"logout"}
              backgroundColor={colors.warning}
              iconColor={colors.medium}
            />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
