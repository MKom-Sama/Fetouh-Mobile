import React from "react";

export const Store = React.createContext();

export const StoreProvider = (props) => {
  const [cart, setCart] = React.useState([]);
  const [cartTotalPrice, setCartTotalPrice] = React.useState(0);
  React.useEffect(() => {
    console.log(`Cart :`, cart, `,number of items : ${cart.length}`);
  }, [cart]);

  // Cart Methods
  const addToCart = (item) => {
    setCart([...cart, item]);
    // also lets add to the total price
    setCartTotalPrice(cartTotalPrice+item.totalPrice)
  };
  const getCart = () => {
    return cart;
  };
  const getCartTotalPrice = () => {
    return cartTotalPrice
  }

  return (
    <Store.Provider
      value={{
        addToCart,
        getCart,
        getCartTotalPrice
      }}
    >
      {props.children}
    </Store.Provider>
  );
};
