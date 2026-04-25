import { ReactNode } from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

interface Props {
  title: string;
  subTitle?: string;
  image?: ImageSourcePropType;
  ImageComponent?: ReactNode;
}

export default function ListItem({
  image,
  title,
  subTitle,
  ImageComponent,
}: Props) {
  return (
    <View style={styles.container}>
      {ImageComponent}
      {image ? <Image style={styles.image} source={image} /> : null}
      <View style={styles.detailsContainer}>
        <AppText children={title} style={styles.title} />
        {subTitle && <AppText children={subTitle} style={styles.subTitle} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: { marginLeft: 10, justifyContent: "center" },
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 15,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    backgroundColor: "navy",
    borderRadius: 35,
  },
  title: { fontWeight: "500" },
  subTitle: { color: colors.medium },
});
