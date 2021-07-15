import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Button, IconButton } from "react-native-paper";

import AppTitle from "../components/visuals/AppTitle";
import { Store } from "../Store";

export default function Cart() {
  const { getCart,getCartTotalPrice } = React.useContext(Store);
  // let itemToAddToCart = {
  //     id:selectedItem.id,
  //     name: selectedItem.name,
  //     size: itemSize,
  //     quantity: numericInputVal,
  //     sizePrice: selectedItemPrice,
  //     totalPrice: selectedItemPrice * numericInputVal,
  //   };
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
  const renderCart = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity>
          <View style={styles.item}>
            <IconButton
              icon="alpha-x"
              style={{
                color: "#f44336",
                position: "absolute",
                left: -6,
                width: "10%",
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
              <Text>{item.quantity}</Text>
              <IconButton icon="alpha-x" style={{ width: 15 }} />
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
          style={{height:'80%'}}
        />
        <View style={{ ...styles.item, ...styles.totalPrice }}>
          <Text style={{fontWeight:'bold'}}>Total Price</Text>

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
              {getCartTotalPrice()}LE
            </Text>
          {/* <Button mode="contained" style={{width:'30%'}}> Checkout </Button> */}
        </View>
       
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
    backgroundColor: '#f6f5f6',
  },
});
