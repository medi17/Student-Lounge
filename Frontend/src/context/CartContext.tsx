import { createContext, useContext, useEffect, useReducer, useState } from "react";
import cartReducer, { InitialState } from "../hooks/UseReducer";
import { CartContextType, ChildrenType, FoodItem } from "../types/foodTypes";
import axios from "axios";
import { UserContext } from "./UserContext";


export const CartContext = createContext<CartContextType | null>(null)


const CartContextProvider = ({ children }:ChildrenType) => {
     const [cart, dispatch] = useReducer(cartReducer, InitialState)

     // User context import
     const usecontext = useContext(UserContext)

     if (!usecontext) {
          throw new Error("UserContext is not provided");
     }
     const setToken = usecontext.setToken
     const url = usecontext.url

     // a code for fetching food lists from db to display
     const [foodItems, setFoodItems] = useState<FoodItem[]>([])

     const [foodLoading, setFoodLoading] = useState<boolean>(true)

     const fetchFoods = async () => {
          const response = await axios.get(url + "/api/food/list")

          setTimeout(() => {
               setFoodLoading(false)
          }, 4000);

          if (response.data.success) {
               setFoodItems(response.data.data)
          }
          else {
               setFoodLoading(true) 
          }
     }

     // when the browser loads it constantly fetchs list of foods
     useEffect(() => {
          async function loadFoods() {
               await fetchFoods()
               const storedToken = localStorage.getItem("token");
               if (storedToken) {
                    setToken(storedToken);
               }
          }
          loadFoods();
     }, [])

     return (
          <CartContext.Provider value={{ cart, dispatch, foodItems, foodLoading}}>
               {children}
          </CartContext.Provider>
     )
}

export default CartContextProvider