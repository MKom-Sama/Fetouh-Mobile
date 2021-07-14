import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { Text, FAB, IconButton, Button } from "react-native-paper";

import AppTitle from "../components/visuals/AppTitle";

import {
  BottomModal,
  ModalContent,
  SlideAnimation,
  ModalTitle,
  ModalButton,
  ModalFooter,
} from "react-native-modals";
import NumericInput from "react-native-numeric-input";

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
  const {
    easternMenuItems,
    italianMenuItems,
    crepeMenuItems,
    sideMenuItems,
  } = require("../DummyDB");

  const [selectedCategory, setSelectedCategory] = React.useState({});
  const [menuItems, setMenuItems] = React.useState([]);

  const [modalVis, setModalVis] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({});
  const [selectedItemPrice, setSelectedItemPrice] = React.useState(0);

  const [numericInputVal, setNumericInputVal] = React.useState(0);

  const debugVar = (variable) =>
    React.useEffect(() => {
      console.log(variable);
    }, [variable]);

  const onSelectedCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory);

    // should here change menuItems
    switch (selectedCategory.name) {
      case "Eastern":
        setMenuItems(easternMenuItems);
        break;
      case "Italian":
        setMenuItems(italianMenuItems);
        break;
      case "Crepe":
        setMenuItems(crepeMenuItems);
        break;
      case "Side":
        setMenuItems(sideMenuItems);
        break;
      default:
        break;
    }
  };
  const renderMainCategories = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            ...styles.categoryTouchableOpacity,
            backgroundColor:
              selectedCategory.id == item.id ? "#ef5350" : "#FFFFFF",
          }}
          onPress={() => onSelectedCategory(item)}
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
              style={{ width: 38, height: 38, marginTop: 19 }}
            />
            <Text
              style={{
                marginBottom: -16,
                paddingTop: 15,
                color: selectedCategory.id == item.id ? "#FFFFFF" : "#000000",
                fontFamily: "pacifico",
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
  function renderMenuList() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ marginBottom: 5 }}
          onPress={() => {
            // console.log("Pressed");
            setSelectedItem(item);
            setModalVis(true);
          }}
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
  const setSelectedItemPriceOnCondition = (price) => {
    // check if price is *not included in the item price list
    if (
      !Object.values(selectedItem.price).includes(selectedItemPrice) ||
      selectedItemPrice == 0
    ) {
      setSelectedItemPrice(price);
    }
  };
  return (
    <View>
      <AppTitle />
      {renderMainCategories()}
      <Text
        style={{
          fontSize: 24,
          margin: 5,
          marginTop: -28,
          fontFamily: "pacifico",
          marginLeft: 20,
        }}
      >
        {selectedCategory.name}
      </Text>
      {renderMenuList()}
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
              style={{ }}
              text="CANCEL"
              onPress={() => {setModalVis(false)}}
            />
            <Button
              mode="contained"
              icon="basket-fill"
              style={{flex:1,justifyContent:'center',backgroundColor:'#e65100'}}
              onPress={() => console.log("Pressed")}
            >
              Add
            </Button>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title={selectedItem.name} />}
        onTouchOutside={() => {
          setModalVis(false);
        }}
      >
        <ModalContent>
          {Object.keys(selectedItem).length !== 0 &&
          selectedItem.price["fixed"] == undefined ? (
            // return sizes UI
            <View
              AccessibilityAction={setSelectedItemPriceOnCondition(
                selectedItem.price["small"]
              )}
              style={{ flexDirection: "row", margin: 10, marginBottom: 9 }}
            >
              <FAB
                style={styles.fab}
                icon="alpha-s"
                onPress={() =>
                  setSelectedItemPrice(selectedItem.price["small"])
                }
              />
              <FAB
                style={styles.fab}
                icon="alpha-m"
                onPress={() =>
                  setSelectedItemPrice(selectedItem.price["medium"])
                }
              />
              <FAB
                style={styles.fab}
                icon="alpha-l"
                onPress={() =>
                  setSelectedItemPrice(selectedItem.price["large"])
                }
              />
              <FAB
                style={styles.fab}
                icon="alpha-x"
                onPress={() =>
                  setSelectedItemPrice(selectedItem.price["XLarge"])
                }
              />
            </View>
          ) : Object.keys(selectedItem).length !== 0 ? (
            <View
              onAccessibilityAction={setSelectedItemPriceOnCondition(
                selectedItem.price["fixed"]
              )}
            ></View>
          ) : (
            <View>{/* Selected Item here is still undefined */}</View>
          )}

          {/* Numeric Input */}
          <View
            style={{
              flexDirection: "row",
              margin: 10,
              marginBottom: 9,
              marginLeft: 16,
              alignItems: "center",
            }}
          >
            <NumericInput
              onChange={(value) => setNumericInputVal(value)}
              rounded
              id="numeric-input"
              minValue={1}
              totalWidth={120}
            />
            <IconButton icon="alpha-x" style={{ marginLeft: -2 }} />
            <View
              style={{
                borderRadius: 10,
                height: 47,
                width: 100,
                marginLeft: -10,
                borderColor: "#000000",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{selectedItemPrice}</Text>
            </View>
            <IconButton icon="equal" style={{ marginLeft: -2 }} />
            <View
              style={{
                borderRadius: 10,
                height: 47,
                width: 90,
                marginLeft: -10,
                borderColor: "#000000",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{numericInputVal * selectedItemPrice}</Text>
            </View>
          </View>
        </ModalContent>
      </BottomModal>
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
  fab: {
    margin: 5,
  },
});
