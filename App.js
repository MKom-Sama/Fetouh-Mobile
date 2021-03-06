import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, I18nManager } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { StoreProvider } from "./Store";

import { BottomNavigation, Text, IconButton } from "react-native-paper";

// Taps
import { CallUs, Home, Cart, Account } from "./screens";

// Styling
import * as Font from "expo-font";
import FlashMessage from "react-native-flash-message";

// Utils
import AppLoading from "expo-app-loading";
import { ModalPortal } from "react-native-modals";
// Navigation

const getFonts = () =>
  Font.loadAsync({
    pacifico: require("./assets/fonts/Pacifico-Regular.ttf"),
  });

export default function App() {
  // Bottom Navigation
  const [index, setIndex] = React.useState(1);
  const [routes, setRoutes] = React.useState([
    { key: "CallUs", title: "Call us", icon: "phone" },
    { key: "Home", title: "Order", icon: "silverware-fork-knife" },
    { key: "Cart", title: "Cart", icon: "basket", badge: 0 },
    { key: "Account", title: "Account", icon: "account" },
  ]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case "CallUs":
        return <CallUs jumpTo={jumpTo} />;
      case "Home":
        return <Home jumpTo={jumpTo} updateCartBadge={updateCartBadge} />;
      case "Cart":
        return (
          <Cart
            jumpTo={jumpTo}
            updateCartBadge={updateCartBadge}
            resetCartBadge={resetCartBadge}
          />
        );
      case "Account":
        return <Account jumpTo={jumpTo} />;
    }
  };

  const updateCartBadge = (val) => {
    let updatedRoutes = [
      routes[0],
      routes[1],
      {
        key: "Cart",
        title: "Cart",
        icon: "basket",
        badge: routes[2]["badge"] + val,
      },
      routes[3],
    ];

    setRoutes(updatedRoutes);
  };
  const resetCartBadge = () => {
    let updatedRoutes = [
      routes[0],
      routes[1],
      {
        key: "Cart",
        title: "Cart",
        icon: "basket",
        badge: 0,
      },
      routes[3],
    ];

    setRoutes(updatedRoutes);
  };

  // const renderIcon = ({ route, focused }) => {
  //   if (focused) {
  //     //return(<FAB icon={route.icon} />)
  //   } else {
  //     return (
  //       <View style={styles.inactiveTab}>
  //         <IconButton icon={route.icon}  />
  //       </View>
  //     );
  //   }
  // };

  // Font loaded
  const [fontsLoaded, setFontsLoaded] = useState(false);

  React.useEffect(() => {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
  }, []);

  // check for stuff loading
  if (fontsLoaded) {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <StoreProvider>
          <PaperProvider>
            <BottomNavigation
              navigationState={{ index, routes }}
              onIndexChange={setIndex}
              renderScene={renderScene}
              // labeled={false}
              shifting={true}
              sceneAnimationEnabled={true}
              barStyle={styles.barStyle}
              // renderIcon={renderIcon}
              keyboardHidesNavigationBar={true}
            />
            <ModalPortal />
            <FlashMessage position="top" />
          </PaperProvider>
        </StoreProvider>
      </SafeAreaView>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log("failed to load app")}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5f525e",
  },
  barStyle: {
    backgroundColor: "#d50000",
    padding: 5,
    paddingBottom: 10,
  },
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 32 : 0,
  },
});
