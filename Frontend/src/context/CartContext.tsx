import { createContext, useReducer } from "react";
import cartReducer, { InitialState } from "../hooks/UseReducer";
import { CartContextType, ChildrenType } from "../types/foodTypes";
import { foodItems } from "../data";

export const CartContext = createContext<CartContextType | null>(null)


const CartContextProvider = ({ children }:ChildrenType) => {
     const [cart, dispatch] = useReducer(cartReducer, InitialState)

     return (
          <CartContext.Provider value={{ cart, dispatch, foodItems }}>
               {children}
          </CartContext.Provider>
     )
}

export default CartContextProvider