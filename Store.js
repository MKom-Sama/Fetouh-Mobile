import React from "react";

export const Store = React.createContext();

export const StoreProvider = (props) => {
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    console.log(`Cart :`,cart,`,number of items : ${cart.length}`);
  }, [cart]);

  // Cart Methods
  const addToCart = (item) => {
    setCart([...cart,item]);
  };
  const getCart = () => {
    return cart;
  };

  return (
    <Store.Provider
      value={{
        addToCart,
        getCart,
      }}
    >
      {props.children}
    </Store.Provider>
  );
};
