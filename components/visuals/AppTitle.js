import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AppTitle() {
  return (
    <View
      style={{
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        backgroundColor: "#d50000",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
      }}
    >
      <Text style={styles.title}>Fetouh 63 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontFamily: "pacifico",
    fontSize: 35,
    color: "#FFFFFF",
  },
});
