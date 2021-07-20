import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  RecyclerViewBackedScrollView,
} from "react-native";

// Third party
import { Avatar, IconButton, TextInput, Button } from "react-native-paper";
import { Formik } from "formik";
import PhoneInput from "react-native-phone-input";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppTitle from "../components/visuals/AppTitle";
// Images
const fetouhBackground = require("../assets/img/fetouhBackground.jpg");
const AbdoFetouh = require("../assets/img/5aloAbdo.jpeg");

const saveUserToDevice = async (user) => {
  try {
    // saving data to device
    let savingName = await AsyncStorage.setItem("savedName", user.name);
    let savingPhoneNumber = await AsyncStorage.setItem(
      "savedPhoneNumber",
      user.phoneNumber
    );
    let savingAddr = await AsyncStorage.setItem("savedAddress", user.address);
  } catch (err) {
    console.log("Tried saving data and uh failed : ", err);
  }
};
const getSavedValues = async () => {
  try {
    let savedName = await AsyncStorage.getItem("savedName");
    let savedPhoneNumber = await AsyncStorage.getItem("savedPhoneNumber");
    let savedAddress = await AsyncStorage.getItem("savedAddress");

    return {
      savedName,
      savedPhoneNumber,
      savedAddress,
    };
  } catch (error) {
    console.log("When retrieving data from device something happened : ", err);
  }
};
export default function Account() {
  const [savedUserData, setSavedUserData] = React.useState({});

  React.useEffect(() => {
    getSavedValues().then((res) => {
      const { savedName, savedPhoneNumber, savedAddress } = res;
      setSavedUserData({
        name: savedName,
        phoneNumber: savedPhoneNumber,
        address: savedAddress,
      });
     // Because apparently it renders only one time...so you need to set value
      phone.setValue(savedPhoneNumber)  
    });
  }, []);
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AppTitle />
        <View
          style={{
            border: 2,
            height: "40%",
          }}
        >
          <ImageBackground
            source={fetouhBackground}
            style={{ flex: 1, resizeMode: "cover" }}
          ></ImageBackground>
        </View>
        <HideWithKeyboard
          style={{ position: "absolute", alignSelf: "center", top: "38%" }}
        >
          <Avatar.Image size={125} source={AbdoFetouh} />
        </HideWithKeyboard>
        <IconButton icon="pencil" style={{ alignSelf: "flex-end" }} />
        <KeyboardAvoidingView behavior="position" style={{ height: "40%" }}>
          <Formik
            enableReinitialize={true}
            initialValues={{
              name: savedUserData.name,
              phoneNumber: savedUserData.phoneNumber,
              address: savedUserData.address,
            }}
            onSubmit={(values) => saveUserToDevice(values)}
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
                  ref={(ref) => {
                    phone = ref;
                  }}
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
                      marginTop: 10,
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
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
