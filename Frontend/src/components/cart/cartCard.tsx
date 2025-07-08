import FoodCardForCart from "./foodCardForCart"
import { useContext } from "react"
import { CartItemType } from "../../types/foodTypes"
import { CartContext } from "../../context/CartContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons"
import Order from "./order"

const cartCard = () => {

     const cart = useContext(CartContext)
     
     if (!cart) {
          throw new Error("CartContext is not provided");
     }
     const cartItems = cart.cart.cart || []

     return (
          <div className={cartItems.length === 0 ? "bg-white shadow-2xl rounded-[30px] py-10 px-6 mx-5 min-w-[260px] md:px-7 md:h-[300px] md:min-w-[312px] lg:mx-16 " :  "bg-white shadow-2xl rounded-[30px] py-5 px-6 mx-5 min-w-[260px] md:px-7 md:min-w-[312px] lg:mx-16 md:h-[490px] overflow-hidden"}>
               <h1 className="text-4xl font-medium">Cart items</h1>
               <div className={cartItems.length === 0 ? "": "md:grid md:grid-cols-2 md:place-items-center"}>                    
                    <div className="scroll overflow-y-scroll max-h-[390px]">
                         {
                              cartItems.length === 0 ? (
                                   <div className="my-18 text-3xl font-light md:text-3xl">There are no food items in your cart <FontAwesomeIcon icon={faHeartCrack} className="text-red-600 text-3xl" /></div>
                              ) : (
                                   
                                   cartItems.map((food: CartItemType) => (
                                        <FoodCardForCart food={food} key={food._id}></FoodCardForCart>
                                   ))
                                   
                              )
                         }
                    </div>
                    <Order cartItems={cartItems } />                    
               </div>
          </div>
     )
}

export default cartCard
