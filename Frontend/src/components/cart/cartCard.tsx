import FoodCardForCart from "./foodCardForCart"
import { useContext, useEffect } from "react"
import { FoodItem } from "../../types/foodTypes"
import { CartContext } from "../../context/CartContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons"
import Order from "./order"
import axios from "axios"
import { UserContext } from "../../context/UserContext"

const cartCard = () => {

     const usecontext = useContext(UserContext)
     const url = usecontext?.url 
     const token = usecontext?.token

     const cartContext = useContext(CartContext)
     if (!cartContext) {
          throw new Error("UserContext is not provided");
     }
     const cart = cartContext.cart
     const dispatch = cartContext.dispatch
     const foodItems = cartContext.foodItems

     const isCartEmpty = Object.keys(cart).length === 0
     
     const fetchCart = async (token:string | null) => {
          const response = await axios.get(url + "/api/cart/get", { headers: { token } })

          if (response.data.success) {
               console.log(response.data.cartData)
               dispatch({ type: "SET_CART", payload: response.data.cartData })
               console.log(foodItems)
          } else {
               console.error("Failed to fetch user cart:", response.data.message);
          }

     }

     useEffect(() => {
          if (localStorage.getItem("token")) {
               fetchCart(localStorage.getItem("token"));
          }
     }, [url, token, dispatch])

     return (
          <div className={isCartEmpty === true ? "bg-white shadow-2xl rounded-[30px] py-10 px-6 mx-5 min-w-[260px] md:px-7 md:h-[300px] md:min-w-[312px] lg:mx-16 " :  "bg-white shadow-2xl rounded-[30px] py-5 px-6 mx-5 min-w-[260px] md:px-7 md:min-w-[312px] lg:mx-16 md:h-[490px] overflow-hidden"}>
               <h1 className="text-4xl font-medium">Cart items</h1>
               <div className={isCartEmpty === true ? "": "md:grid md:grid-cols-2 md:place-items-center"}>                    
                    <div className="scroll overflow-y-scroll max-h-[390px]">
                         {
                              isCartEmpty === true ? (
                                   <div className="my-18 text-3xl font-light md:text-3xl">There are no food items in your cart <FontAwesomeIcon icon={faHeartCrack} className="text-red-600 text-3xl" /></div>
                              ) : (             
                                   foodItems.map((food: FoodItem, index: number) => {
                                        if (cart[food._id] > 0) {
                                             return (
                                                  <FoodCardForCart food={food} key={index}></FoodCardForCart>
                                             )
                                        }
                                   })     
                              )
                         }
                    </div>
                    <Order isCartEmpty={isCartEmpty} />                    
               </div>
          </div>
     )
}

export default cartCard
