import { createContext, useReducer } from "react";
import cartReducer, { InitialState } from "../hooks/UseReducer";
import { CartContextType } from "../types/types";
import { foodItems } from "../data";
type Props = {
     children: React.ReactNode
}

export const CartContext = createContext<CartContextType | null>(null)


const CartContextProvider = ({ children }:Props) => {
     const [cart, dispatch] = useReducer(cartReducer, InitialState)

     return (
          <CartContext.Provider value={{ cart, dispatch, foodItems }}>
               {children}
          </CartContext.Provider>
     )
}

export default CartContextProvider