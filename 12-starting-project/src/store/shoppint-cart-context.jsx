import { createContext } from "react";

const CartContext = createContext({
  items: [],
  cart: {},
  addItemToCart: () => {},
  updateItemQuantity: (id, quantity) => {},
});

export default CartContext;
