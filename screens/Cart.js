import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Button, IconButton } from "react-native-paper";

import {
  BottomModal,
  ModalContent,
  SlideAnimation,
  ModalTitle,
  ModalButton,
  ModalFooter,
} from "react-native-modals";

import AppTitle from "../components/visuals/AppTitle";
import { Store } from "../Store";



//utils
import { getSavedValues } from "../utils/phoneStorage";

export default function Cart({ jumpTo,updateCartBadge }) {
  const { getCart, getCartTotalPrice, removeFromCart } =
    React.useContext(Store);

  const [modalVis, setModalVis] = React.useState(false);
  const [savedUserData, setSavedUserData] = React.useState({});

  // let itemToAddToCart = {
  //     id:shortUID(),
  //     name: selectedItem.name,
  //     size: itemSize,
  //     quantity: numericInputVal,
  //     sizePrice: selectedItemPrice,
  //     totalPrice: selectedItemPrice * numericInputVal,
  //   };
  const getUserDataOnDevice = async () => {
    const user = await getSavedValues();
    setSavedUserData(user);
  };
  const formatSize = (size) => {
    switch (size) {
      case "small":
        return <IconButton icon="alpha-s" />;
      case "medium":
        return <IconButton icon="alpha-m" />;
      case "large":
        return <IconButton icon="alpha-l" />;
      case "XLarge":
        return <IconButton icon="alpha-x" />;

      default:
        return <IconButton icon="alpha-f" />;
        break;
    }
  };
  const checkOut = () => {
    // check if user has his creditentials saved

    // jumpTo('Home');
    // send order to backend

    console.log("I got this!");
  };
  const renderCart = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity>
          <View style={styles.item}>
            <IconButton
              icon="delete"
              color={"#b71c1c"}
              style={{
                position: "absolute",
                left: -6,
                width: "10%",
              }}
              onPress={() => {
                removeFromCart(item.id, item.totalPrice);
                updateCartBadge(-1);
              }}
            />
            <Text style={{ width: "25%", marginLeft: 20 }}>{item.name}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "20%",
                marginLeft: "14%",
              }}
            >
              <Text>{item.quantity}x</Text>
              <Text>{formatSize(item.size)}</Text>
            </View>

            <Text
              style={{
                position: "absolute",
                right: 10,
                textAlign: "center",
                width: "19%",
                borderColor: "#558b2f",
                borderRadius: 10,
                borderWidth: 2,
                padding: 5,
              }}
            >
              {item.totalPrice}LE
            </Text>
          </View>
          <View>
            <Text style={{ padding: 0, margin: -5 }}></Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{ padding: 20 }}>
        <FlatList
          data={getCart()}
          scrollEnabled={true}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ flexGrow: 1 }}
          style={{ height: "86%" }}
        />
        <View style={{}}>
          <Button
            mode="contained"
            icon="check-outline"
            style={{
              backgroundColor: "#ffa726",
              position: "absolute",
              top: 0,
              width: "90%",
              alignSelf: "center",
            }}
            onPress={() => {
              setModalVis(true);
              getUserDataOnDevice();
            }}
          >
            Checkout
          </Button>
        </View>
        <BottomModal
          visible={modalVis}
          modalAnimation={
            new SlideAnimation({
              slideFrom: "bottom",
            })
          }
          footer={
            <ModalFooter>
              <ModalButton
                style={{}}
                text="CANCEL"
                onPress={() => {
                  setModalVis(false);
                }}
              />
              <Button
                mode="contained"
                icon="thumb-up"
                style={{
                  flex: 1,
                  justifyContent: "center",
                  backgroundColor: "#e65100",
                }}
                onPress={() => checkOut()}
              >
                Confirm
              </Button>
            </ModalFooter>
          }
          modalTitle={<ModalTitle title={"Confirm Checkout"} />}
          onTouchOutside={() => {
            setModalVis(false);
          }}
        >
          <ModalContent>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", width: "50%", fontSize: 20 }}>
                Name :
              </Text>
              <Text
                style={{
                  position: "absolute",
                  right: 10,
                  textAlign: "center",
                  width: "50%",
                  margin: 3,
                }}
              >
                {savedUserData.savedName}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", width: "50%", fontSize: 20 }}>
                phone :
              </Text>
              <Text
                style={{
                  position: "absolute",
                  right: 10,
                  textAlign: "center",
                  width: "50%",
                  margin: 3,
                }}
              >
                {savedUserData.savedPhoneNumber}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", width: "50%", fontSize: 20 }}>
                Address :
              </Text>
              <Text
                style={{
                  position: "absolute",
                  right: 10,
                  textAlign: "center",
                  width: "50%",
                  margin: 3,
                }}
                numberOfLines={1}
              >
                {savedUserData.savedAddress}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", width: "50%", fontSize: 25 }}>
                Total Price :
              </Text>
              <Text
                style={{
                  position: "absolute",
                  right: 10,
                  textAlign: "center",
                  width: "50%",
                  borderColor: "#558b2f",
                  borderRadius: 10,
                  borderWidth: 2,
                  padding: 5,
                  fontSize: 25,
                  margin: 3,
                }}
              >
                {getCartTotalPrice()}LE
              </Text>
            </View>
          </ModalContent>
        </BottomModal>
      </View>
    );
  };

  return (
    <View>
      <AppTitle />
      {renderCart()}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    margin: 5,
    backgroundColor: "#FFFFFF",
    padding: 15,
    alignItems: "center",
    borderColor: "#9e9e9e",
    borderWidth: 2,
    borderRadius: 10,
  },
  totalPrice: {
    padding: 20,
    backgroundColor: "#f6f5f6",
  },
});
