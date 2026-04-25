import React from "react";
import {
  Alert,
  Button,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Ex1() {
  const foodName = "Grilled Salmon Bowl";
  const foodPrice = "$12.99";
  const foodDescription =
    "Fresh grilled salmon served with rice, avocado, vegetables, and signature sauce. Healthy, delicious, and perfect for lunch or dinner.";

  const handleAddToCart = () => {
    Alert.alert("Cart", "Item added to cart");
  };

  const handleOrderNow = () => {
    Alert.alert("Order", "Your order has been placed");
  };

  const handleViewDetails = () => {
    Alert.alert("Food Details", `${foodName}\nPrice: ${foodPrice}`);
  };

  const handlePressImage = () => {
    Alert.alert("Image", "You pressed the food image");
  };

  return (
    <View style={styles.container}>
      <View style={styles.screenTitleWrapper}>
        <Text style={styles.screenTitle}>Mini Restaurant Menu</Text>
        <Text style={styles.screenSubtitle}>React Native Homework Project</Text>
      </View>

      <View style={styles.card}>
        <TouchableOpacity activeOpacity={0.9} onPress={handlePressImage}>
          <Image
            source={require("../../../assets/images/food.jpg")}
            style={styles.foodImage}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.foodName}>{foodName}</Text>

          <Text style={styles.foodDescription} numberOfLines={2}>
            {foodDescription}
          </Text>

          <View style={styles.infoRow}>
            <Text style={styles.foodPrice}>{foodPrice}</Text>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>BEST SELLER</Text>
            </View>
          </View>

          <View style={styles.touchableRow}>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={handleAddToCart}
              activeOpacity={0.8}>
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.orderNowButton}
              onPress={handleOrderNow}
              activeOpacity={0.8}>
              <Text style={styles.orderNowButtonText}>Order Now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonWrapper}>
            <Button title="View Details" onPress={handleViewDetails} />
          </View>

          <Text style={styles.platformText}>
            {Platform.OS === "ios"
              ? "Special layout for iOS"
              : "Special layout for Android"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? "#f2f7ff" : "#f7f7f7",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 20 : 12,
    justifyContent: "center",
  },

  screenTitleWrapper: {
    marginBottom: 18,
    alignItems: "center",
  },

  screenTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },

  screenSubtitle: {
    fontSize: 14,
    color: "#6b7280",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 22,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 6,
  },

  foodImage: {
    width: "100%",
    height: 220,
  },

  content: {
    padding: 18,
  },

  foodName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
  },

  foodDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: "#4b5563",
    marginBottom: 16,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  foodPrice: {
    fontSize: 22,
    fontWeight: "700",
    color: "#dc2626",
  },

  badge: {
    backgroundColor: "#fef3c7",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#92400e",
  },

  touchableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  addToCartButton: {
    flex: 1,
    backgroundColor: "#2563eb",
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: "center",
    marginRight: 8,
  },

  addToCartButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },

  orderNowButton: {
    flex: 1,
    backgroundColor: "#16a34a",
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: "center",
    marginLeft: 8,
  },

  orderNowButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },

  buttonWrapper: {
    marginBottom: 14,
  },

  platformText: {
    textAlign: "center",
    fontSize: 13,
    color: "#6b7280",
    marginTop: 4,
  },
});
