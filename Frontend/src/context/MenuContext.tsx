import { createContext, useState } from "react";
import { foodItems, streetFoodItems, drinkItems } from "../data";
import { MenuContextType } from "../types/types";

export const MenuContext = createContext< MenuContextType | null>(null)

type Props = {
     children: React.ReactNode
}

export const MenuContextProvider = (props: Props) => {

     const [cartItems, setCartItems] = useState<Record<string, number>>({})

     const addToCart = ((itemsId: string) => {
          if (!cartItems) {
               setCartItems((prev) => ({...prev, [itemsId]:1}))
          } else {
               setCartItems((prev) => ({...prev, [itemsId]: prev[itemsId] + 1}))
          }
     })

     const removeFromCart = ((itemsId: string) => { 
          setCartItems((prev) => ({...prev, [itemsId]: prev[itemsId] - 1}))   
     })

     const objValue: MenuContextType = {
          streetFoodItems,
          foodItems,
          drinkItems,
          addToCart,
          removeFromCart,
          cartItems,
          setCartItems,
     }
     return (
          <MenuContext.Provider value={objValue}>
               {props.children}
          </MenuContext.Provider>
     )
}

export default MenuContextProvider