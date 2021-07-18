import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button, Card, IconButton } from "react-native-paper";

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
        <View
          style={{
            padding: 8,
            borderWidth: 2,
            margin: 5,
            alignSelf: "center",
            borderRadius: 20,
            borderColor: "#ffa726",
          }}
        >
          <Text style={{ fontSize: 25 }}>
            {
              "خبراء لاكثر من ربع قرن بأحتراف فى مجال الفطائر و البيتزا الايطالى و المشروبات"
            }
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            alignSelf: "flex-start",
            marginLeft: "4%",
          }}
        >
          {"تحت إداره الاستاذ عبده عوض فتوح"}
        </Text>
        <View style={{flexDirection:'row',alignContent:'flex-start',padding:50}}>
          <IconButton icon="facebook" size={40} />
          <IconButton icon="instagram" size={40} />
          <IconButton icon="twitter" size={40} />
          <IconButton icon="youtube" size={40} />
        </View>
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
