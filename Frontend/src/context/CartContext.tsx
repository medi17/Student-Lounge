import { createContext, useReducer } from "react";
import cartReducer, { IntialState } from "../hooks/UseReducer";
import { CartContextType } from "../types/types";

type Props = {
     children: React.ReactNode
}

export const CartContext = createContext<CartContextType | null>(null)


const CartContextProvider = ({ children }:Props) => {
     const [cart, dispatch] = useReducer(cartReducer, IntialState)

     return (
          <CartContext.Provider value={{ cart, dispatch }}>
               {children}
          </CartContext.Provider>
     )
}

export default CartContextProvider