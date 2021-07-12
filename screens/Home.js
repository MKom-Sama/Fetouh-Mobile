import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { Text } from "react-native-paper";

import AppTitle from "../components/visuals/AppTitle";

// icons (clean later)
const pizza = require("../assets/icons/pizza-icon.png");
const pie = require("../assets/icons/pie-icon.png");
const crepe = require("../assets/icons/crepe-icon.png");
const fries = require("../assets/icons/fries-icon.png");

//menuItem pictures (clean later)
const veggyPizza = require("../assets/img/vegy-pizza.jpeg");

export default function Home() {
  // DUMMY DATA
  const categories = [
    { id: 0, name: "Eastern", icon: pie },
    { id: 1, name: "Italian", icon: pizza },
    { id: 2, name: "Crepe", icon: crepe },
    { id: 3, name: "Side", icon: fries },
  ];
  const menuItems = [
    { id: 0, name: "veggy-pizza", photo: veggyPizza },
    { id: 1, name: "veggy-pizza", photo: veggyPizza },
    { id: 2, name: "veggy-pizza", photo: veggyPizza },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState({});

  // React.useEffect(() => {
  //     console.log(`selectedCategory is : ${selectedCategory.name}`);
  // },[selectedCategory])

  const renderMainCategories = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            ...styles.categoryTouchableOpacity,
            backgroundColor:
              selectedCategory.id == item.id ? "#ef5350" : "#FFFFFF",
          }}
          onPress={() => setSelectedCategory(item)}
        >
          <View
            style={{
              ...styles.categoryView,
              backgroundColor:
                selectedCategory.id == item.id ? "#e57373 " : "#F5F5F6",
            }}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{ width: 38, height: 38, marginTop: 12 }}
            />
            <Text
              style={{
                marginBottom: -16,
                paddingTop: 15,
                color: selectedCategory.id == item.id ? "#FFFFFF" : "#000000",
              }}
            >
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{ padding: 20 }}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 20 }}
        />
      </View>
    );
  };
  const renderMenuList = () => {
    const renderItem = ({ item }) => {};
  };
  function renderRestaurantList() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ marginBottom: 5 }}
          onPress={() => console.log("Pressed")}
        >
          {/* Image */}
          <View
            style={{
              marginBottom: 10,
            }}
          >
            <Image
              source={item.photo}
              resizeMode="cover"
              style={{
                width: "100%",
                height: 200,
                borderRadius: 30,
              }}
            />

            <View
              style={{
                position: "absolute",
                bottom: 0,
                height: 50,
                width: "50%",
                backgroundColor: "#F5F5F6",
                borderTopRightRadius: 30,
                borderBottomLeftRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                ...styles.shadow,
              }}
            >
              <Text>{item.name}</Text>
            </View>
          </View>
          <View>
            <Text>
              {/* Very important Text Component allows dragging go figure why */}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        data={menuItems}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: "60%",
        }}
        scrollEnabled
      />
    );
  }

  return (
    <View>
      <AppTitle />
      {renderMainCategories()}
      <Text style={{ fontSize:22,margin:5,marginTop:-18}}>{selectedCategory.name}</Text>
      {renderRestaurantList()}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryTouchableOpacity: {
    padding: 10,
    paddingBottom: 35,
    alignItems: "center",
    justifyContent: "center",
    // marginRight: 10,
    margin: 10,
    borderRadius: 30,
  },
  categoryView: {
    width: 55,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -5,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});