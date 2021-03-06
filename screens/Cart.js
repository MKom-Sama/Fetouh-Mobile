import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Button, IconButton, FAB } from "react-native-paper";

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
import { showMessage, hideMessage } from "react-native-flash-message";

export default function Cart({ jumpTo, updateCartBadge, resetCartBadge }) {
  const { getCart, getCartTotalPrice, removeFromCart, cartCheckOut } =
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
  const checkOut = async () => {
    // check if user has his creditentials saved

    const { savedName, savedAddress, savedPhoneNumber } = savedUserData;

    if (savedName == null || savedAddress == null || savedPhoneNumber == null) {
      setModalVis(false);

      showMessage({
        message: "Please add your info and save them",
        type: "danger",
        icon: "auto",
        floating: true,
      });

      jumpTo("Account");
    } else if (getCartTotalPrice() == 0) {
      setModalVis(false);

      showMessage({
        message: "You need to order something",
        type: "danger",
        icon: "auto",
        floating: true,
      });

      jumpTo("Home");
    } else {
      let sendingOrder = await cartCheckOut();

      if (sendingOrder == false) {
        showMessage({
          message: "Something went wrong :(",
          type: "danger",
          icon: "auto",
          floating: true,
        });
      } else {
        // order was succesful
        resetCartBadge();
      }
      setModalVis(false);
    }

    // jumpTo('Home');
    // send order to backend

    // console.log("I got this!");
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
                showMessage({
                  message: "removed item from cart!",
                  type: "warning",
                  icon: "auto",
                  floating: true,
                });
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
      <View style={{ padding: 20, height: "90%" }}>
        <FlatList
          data={getCart()}
          scrollEnabled={true}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ flexGrow: 1,paddingBottom:'10%'}}
          // style={{ height: "80%" }}
        />
        <View
          style={{
            position: "absolute",
            bottom: "10%",
            width: "100%",
            alignSelf: "center",
          }}
        >
          <FAB
            mode="contained"
            icon="check-outline"
            style={{
              backgroundColor: "#ffa726",
              alignSelf: "flex-end",
            }}
            onPress={() => {
              setModalVis(true);
              getUserDataOnDevice();
            }}
          />
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
            <View
              style={{
                flexDirection: "row",
                borderRadius: 8,
                margin: 10,
                backgroundColor: "#e0e0e0",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                  padding: 5,
                  fontSize: 35,
                  margin: 3,
                  width: "100%",
                  color: "#1b5e20",
                }}
              >
                {getCartTotalPrice()} ??E
              </Text>
            </View>

            {/* User info */}
            <View
              style={{
                borderColor: "#000000",
                borderWidth: 2,
                padding: 8,
                borderRadius: 8,
                borderStyle: "dashed",
                borderColor: "#1b5e20",
              }}
            >
              {/* Name */}
              <View style={{ flexDirection: "row", margin: 5 }}>
                <Text style={styles.recieptTitle}>Name :</Text>
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

              {/* Phone */}
              <View style={{ flexDirection: "row", margin: 5 }}>
                <Text style={styles.recieptTitle}>phone :</Text>
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

              {/* Address */}
              <View style={{ flexDirection: "row", margin: 5 }}>
                <Text style={styles.recieptTitle}>Address :</Text>
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
  recieptTitle: {
    fontWeight: "bold",
    width: "50%",
    fontSize: 15,
    fontStyle: "italic",
  },
});
