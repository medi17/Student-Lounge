import FoodCardForCart from "./foodCardForCart"
import { useContext } from "react"
import { CartItemType } from "../../types/types"
import { CartContext } from "../../context/CartContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons"
import OrderSummary from "./orderSummary"

const cartCard = () => {

     const cart = useContext(CartContext)
     const cartItems = cart?.cart.cart || []

     return (
          <div className="bg-white shadow-2xl rounded-[30px] py-3 px-3 mx-5 min-w-[260px] md:px-7 md:min-w-[312px] lg:mx-16 md:h-[450px] overflow-hidden">
               <h1 className="text-2xl font-medium">My Orders</h1>
               <div className="md:grid md:grid-cols-2 md:place-items-center">                    
                    <div className="scroll overflow-y-scroll max-h-[450px]">
                         {
                              cartItems.length === 0 ? (
                                   <div className="my-18 text-4xl font-medium">No food items in your cart <FontAwesomeIcon icon={faHeartCrack} className="text-red-600 text-3xl" /></div>
                              ) : (
                                   
                                   cartItems.map((food: CartItemType) => (
                                        <FoodCardForCart food={food} key={food.id}></FoodCardForCart>
                                   ))
                                   
                              )
                         }
                    </div>
                    <OrderSummary/>                    
               </div>
          </div>
     )
}

export default cartCard
