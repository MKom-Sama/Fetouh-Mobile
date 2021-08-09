import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import { Button, Card, IconButton, Avatar } from "react-native-paper";

import AppTitle from "../components/visuals/AppTitle";

import { callNumber, openGPS } from "../utils/linking";


const fetouhBackground = require("../assets/img/fetouhBackground.jpg");
export default function CallUs() {
  return (
    <View style={{ flex: 1 }}>
      <AppTitle />
      <Avatar.Image
        source={fetouhBackground}
        size={250}
        style={{
          margin: 20,
          alignSelf: "center",
        }}
      />

      {/* Map Location */}

      <View
        style={{
          width: "80%",
          flexDirection: "row",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          size={40}
          icon="map-marker"
          onPress={() => openGPS(31.50715753006112, 31.826428123336655)}
          color={"#ef5350"}
        />
        <View
          style={{
            backgroundColor: "#e0e0e0",
            width: "80%",
            borderRadius: 15,
            height: 30,
            justifyContent: "center",
            padding: 3,
            paddingLeft: 5,
          }}
        >
          <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
            راس البر ~ شارع ٦٣ ~ سوق ٦٣
          </Text>
        </View>
      </View>

      {/* Call Us */}
      <View
        style={{
          width: "80%",
          flexDirection: "row",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          size={40}
          icon="phone"
          onPress={() => {
            callNumber("01015047515");
          }}
          color={"#ef5350"}
        />
        <View
          style={{
            backgroundColor: "#e0e0e0",
            width: "80%",
            borderRadius: 15,
            height: 30,
            justifyContent: "center",
            padding: 3,
            paddingLeft: 5,
          }}
        >
          <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
            اضغط على العلامه عشان تكلمنا
          </Text>
        </View>
      </View>
      {/* Social Media Icons */}
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          padding: 50,
        }}
      >
        <IconButton icon="facebook" size={40} color={"#4267B2"} />
        <IconButton icon="instagram" size={40} color={"#C13584"} />
        <IconButton icon="twitter" size={40} color={"#1DA1F2"} />
        <IconButton icon="youtube" size={40} color={"#FF0000"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
