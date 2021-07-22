import AsyncStorage from "@react-native-async-storage/async-storage";

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

export { getSavedValues };
