import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Avatar, IconButton, TextInput, Button } from "react-native-paper";
import PhoneInput from "react-native-phone-input";

import HideWithKeyboard from "react-native-hide-with-keyboard";

import AppTitle from "../components/visuals/AppTitle";

export default function Account() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AppTitle />
        <View
          style={{
            border: 2,
            borderWidth: 2,
            borderColor: "#000000",
            height: "40%",
          }}
        ></View>
        <HideWithKeyboard style={{ position: "absolute", alignSelf: "center", top: "38%" }}>
          <Avatar.Image
            size={125}
            source={{
              uri: "https://cdn.discordapp.com/attachments/860051709467557898/865715553736982558/hilloo_2.png",
            }}
            
          />
        </HideWithKeyboard>
        <IconButton icon="pencil" style={{ alignSelf: "flex-end" }} />
        <KeyboardAvoidingView behavior="position" style={{ height: "40%" }}>
          <TextInput
            mode="outlined"
            style={{
              width: "65%",
              alignSelf: "center",
              height: 32,
              marginTop: "5%",
            }}
            placeholder="Name"
          />
          <PhoneInput
            initialCountry={"eg"}
            textProps={{
              placeholder: "Enter a phone number...",
            }}
            style={{
              margin: 10,
              borderWidth: 2,
              borderColor: "#000000",
              width: "65%",
              alignSelf: "center",
              padding: 7,
              borderRadius: 5,
            }}
          />
          <TextInput
            mode="outlined"
            style={{
              width: "65%",
              alignSelf: "center",
            }}
            placeholder="Address"
            multiline={true}
          />
        </KeyboardAvoidingView>

        <HideWithKeyboard style={{ padding: 20 }}>
          <Button
            mode="contained"
            onPress={() => {
              console.log("should save data");
            }}
            icon="content-save-all"
            style={{
              position: "absolute",
              top: -50,
              width: "90%",
              alignSelf: "center",
              backgroundColor: "#ffa726",
            }}
          >
            sava data
          </Button>
        </HideWithKeyboard>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
