import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground
} from "react-native";
import { Avatar, IconButton, TextInput, Button } from "react-native-paper";
import { Formik } from "formik";

import PhoneInput from "react-native-phone-input";

import HideWithKeyboard from "react-native-hide-with-keyboard";

import AppTitle from "../components/visuals/AppTitle";
// Images
const fetouhBackground = require('../assets/img/fetouhBackground.jpg');
const AbdoFetouh = require('../assets/img/5aloAbdo.jpeg');
export default function Account() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AppTitle />
        <View
          style={{
            border: 2,
            // borderWidth: 2,
            // borderColor: "#ef5350",
            height: "40%",
          }}
        >
          <ImageBackground source={fetouhBackground} style={{flex:1,resizeMode:'cover'}}>
            
          </ImageBackground>
        </View>
        <HideWithKeyboard
          style={{ position: "absolute", alignSelf: "center", top: "38%" }}
        >
          <Avatar.Image
            size={125}
            source={AbdoFetouh}
          />
        </HideWithKeyboard>
        <IconButton icon="pencil" style={{ alignSelf: "flex-end" }} />
        <KeyboardAvoidingView behavior="position" style={{ height: "40%" }}>
          <Formik
            initialValues={{ name: "", phoneNumber: "", address: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  onChangeText={handleChange("name")}
                  mode="outlined"
                  value={values.name}
                  style={{
                    width: "65%",
                    alignSelf: "center",
                    height: 32,
                    marginTop: "5%",
                  }}
                  placeholder="Name"
                />
                <PhoneInput
                  value={values.phoneNumber}
                  onChangePhoneNumber={handleChange("phoneNumber")}
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
                  value={values.address}
                  onChangeText={handleChange("address")}
                  mode="outlined"
                  style={{
                    width: "65%",
                    alignSelf: "center",
                  }}
                  placeholder="Address"
                  multiline={true}
                />
                <HideWithKeyboard style={{ padding: 20 }}>
                  <Button
                    mode="contained"
                    onPress={handleSubmit}
                    icon="content-save-all"
                    style={{
                      width: "90%",
                      marginTop:10,
                      alignSelf: "center",
                      backgroundColor: "#ffa726",
                    }}
                  >
                    sava data
                  </Button>
                </HideWithKeyboard>
              </View>
            )}
          </Formik>
        </KeyboardAvoidingView>
        {/* 
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
        </HideWithKeyboard> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
