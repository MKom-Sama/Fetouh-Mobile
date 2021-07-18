import { Linking, Alert, Platform } from 'react-native';


const callNumber = phone => {
  console.log('callNumber ----> ', phone);
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  }
  else  {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
  .then(supported => {
    if (!supported) {
      Alert.alert('Phone number is not available');
    } else {
      return Linking.openURL(phoneNumber);
    }
  })
  .catch(err => console.log(err));
};

const openGPS = (lat, lng) => {
  var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';


  let androidLabel = 'مطعم وكافيه فتوح اخوان فتوح مطعم وكافيه';
  let iosLabel = 'شارع 65 20L'
  const url = Platform.select({
    ios: "maps:" + lat + "," + lng + "?q=" + iosLabel,
    android: "geo:" + lat + "," + lng + "?q=" + androidLabel
  });

  Linking.openURL(url);
}

export {
  callNumber,
  openGPS
}
