import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button, Card } from "react-native-paper";

import AppTitle from "../components/visuals/AppTitle";

import { callNumber, openGPS } from "../utils/linking";

const fetouhLocationPNG = require("../assets/img/fetouhLocation.png");
export default function CallUs() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "86%" }}>
        <AppTitle />
        <Card
          style={{ margin: 8 }}
          onPress={() => openGPS(31.50715753006112, 31.826428123336655)}
        >
          <Card.Cover source={fetouhLocationPNG} />
        </Card>
      </View>

      <View style={{ padding: 20 }}>
        <Button
          mode="contained"
          onPress={() => {
            callNumber("01015047515");
          }}
          icon="phone"
          style={{
            position: "absolute",
            top: 20,
            width: "90%",
            alignSelf: "center",
            backgroundColor: "#ffa726",
          }}
        >
          call us :)
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
