import React from "react";
import { showMessage } from "react-native-flash-message";
import { firebase } from "./fbconfig";

export const Store = React.createContext();

import { getSavedValues } from "./utils/phoneStorage";

export const StoreProvider = (props) => {
  const [cart, setCart] = React.useState([]);
  const [cartTotalPrice, setCartTotalPrice] = React.useState(0);
  React.useEffect(() => {
    // console.log(`Cart :`, cart, `,number of items : ${cart.length}`);
  }, [cart]);

  let db = firebase.firestore();
  // Cart Methods
  const addToCart = (item) => {
    setCart([...cart, item]);
    // also lets add to the total price
    setCartTotalPrice(cartTotalPrice + item.totalPrice);
  };
  const getCart = () => {
    return cart;
  };
  const removeFromCart = (uid, totalPrice) => {
    // remove item from cart
    setCart(cart.filter((item) => item.id !== uid));

    // reduce total price
    setCartTotalPrice(cartTotalPrice - totalPrice);
  };
  const getCartTotalPrice = () => {
    return cartTotalPrice;
  };

  //checkout
  const cartCheckOut = async () => {
    try {
      const user = await getSavedValues();
      // console.log(user);
      // console.log(cart);
      // console.log(cartTotalPrice);

      const dbOrder = {
        name: user.savedName,
        address: user.savedAddress,
        phoneNumber: user.savedPhoneNumber,
        order: cart,
        totalDue: cartTotalPrice,
        created: firebase.database.ServerValue.TIMESTAMP 
      };

      const sendingOrder = await db.collection("orders").add(dbOrder);

      if (sendingOrder.id !== null || sendingOrder.id !== undefined) {
        // order sent successfully
        showMessage({
          message: "Order was sent successfully!",
          type: "success",
          icon: "success",
          floating: true,
        });

        setCart([]);
        setCartTotalPrice(0);

        return true;
      }
    } catch (err) {
      console.log(`uh some error when sending order ${err}`);
      return false;
    }
    return false;
  };

  return (
    <Store.Provider
      value={{
        addToCart,
        getCart,
        getCartTotalPrice,
        removeFromCart,
        cartCheckOut,
      }}
    >
      {props.children}
    </Store.Provider>
  );
};
