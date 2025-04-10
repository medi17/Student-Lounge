import { useContext} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faTrashCan} from "@fortawesome/free-solid-svg-icons"
import { FoodProps } from "../../types/types"
import { CartContext } from "../../context/CartContext"

const foodCardForCart = ({food}: FoodProps) => {
     const  { id, name, image, description, price, quantity } = food
     
     const cartContext = useContext(CartContext)

     if (!cartContext) {
          throw new Error("CartContext is not provided");
     }

     const cart = cartContext?.cart.cart || []
     const dispatch = cartContext?.dispatch

     const Increase = (id: number) => {
          const index = cart.findIndex(foodItem => foodItem.id === id)
          if (cart[index].quantity < 10) {
               dispatch({type: "Increase", payload: food})
          }
     }

     const Decrease = (id: number)=> {
          const index = cart.findIndex(foodItem => foodItem.id === id)
          if (cart[index].quantity > 1) {
               dispatch({type: "Decrease", payload: food})
          }
     }

     return (
          <div className="flex justify-between items-start gap-3 bg-gray-octa shadow-sm rounded-2xl px-2 mt-5 min-w-[250px] max-w-[450px]">
               <div>
                    <img src={image} alt={name} className="w-[150px] rounded-2xl p-2" />
               </div>
               <div>
                    <h2 className="text-xl font-medium">{name}</h2>
                    <p className="text-xs">{description}</p>
                    <div className="flex justify-between items-center gap-3 mt-2">
                         <h3 className="font-medium text-Crimson">{price} ETB</h3>
                         <div className="flex justify-between items-center gap-2 mb-2">
                              <button className="bg-Crimson text-white font-medium text-xl px-[9px] border-2 border-Crimson rounded-xl hover:text-Crimson hover:bg-white cursor-pointer"
                              onClick={()=> Decrease(id)}
                              >-</button>
                              <p className="text-2xl font-medium">{quantity}</p>
                              <button className="bg-Crimson text-white font-medium text-xl px-2 border-2 border-Crimson rounded-xl hover:text-Crimson hover:bg-white cursor-pointer"
                                   onClick={() => Increase(id)}
                              >+</button>
                         </div>
                    </div>
               </div>
               
               <button className="px-2 py-2 rounded-xl cursor-pointer hover:text-Crimson"
                    onClick={() => {dispatch({type: "Remove", payload: food})}}
               ><FontAwesomeIcon icon={faTrashCan} className="text-xl"/></button>
               
          </div>               
     )
}

export default foodCardForCart