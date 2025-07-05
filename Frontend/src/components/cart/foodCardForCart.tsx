import { useContext} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan} from "@fortawesome/free-solid-svg-icons"
import { FoodProps } from "../../types/foodTypes"
import { CartContext } from "../../context/CartContext"
import { UserContext } from "../../context/UserContext"
import axios from "axios"

const foodCardForCart = ({food}: FoodProps) => {
     const  { _id, name, image, description, price, quantity } = food
     
     const cartContext = useContext(CartContext)

     if (!cartContext) {
          throw new Error("CartContext is not provided");
     }

     const cart = cartContext.cart.cart || []
     const dispatch = cartContext.dispatch

     const userContext = useContext(UserContext);

     if (!userContext) {
          throw new Error("UserContext is not provided");
     }
     const url = userContext.url
     const token = userContext.token

     const Increase = async (id: string) => {
          const index = cart.findIndex(foodItem => foodItem._id === id)
          // if (cart[index].quantity < 10) {
          //      dispatch({type: "Increase", payload: food})
          // }
          if (index === -1 || cart[index].quantity >= 10) {
               return;
           }
          if (token) {
               const response = await axios.post(url + "/api/cart/add", { foodId: id }, { headers: { token } });

               if (response.data.success) {
                   dispatch({ type: "Increase", payload: food });
               } else {
                   console.error("Backend error increasing item:", response.data.message);
               }
         }  else {
          dispatch({ type: "Increase", payload: food });
      }
  
     }

     const Decrease = async (id: string)=> {
          const index = cart.findIndex(foodItem => foodItem._id === id)
          // if (cart[index].quantity > 1) {
          //      dispatch({type: "Decrease", payload: food})
          // }
          if (index === -1 || cart[index].quantity <= 1) {
               return;
          }
   
          if (token) {
               const response =  await axios.post(url + "/api/cart/remove", { _id: id }, { headers: { token } })
               
               if (response.data.success) {
                    dispatch({ type: "Decrease", payload: food });
               } else {
                    console.error("Backend error decreasing item:", response.data.message);
               }               
          } else {
               dispatch({ type: "Decrease", payload: food });
           }
     }

     const Delete = async (id: string) =>{
          
          if (token) {
               const response = await axios.post(url + "/api/cart/remove", { _id: id }, { headers: { token } })
               
               if (response.data.success) {
                    dispatch({ type: "Remove", payload: food });
               } else {
                    console.error("Backend error deleting item:", response.data.message);
               }
          
          } else {
               dispatch({ type: "Remove", payload: food });
          }
     }
     return (
          <div className="flex justify-between items-start gap-3 bg-gray-octa shadow-sm rounded-2xl px-2 mt-5 min-w-[250px] max-w-[450px]">
               <div>
                    <img src={url+"/images/"+image} alt={name} className="w-[150px] rounded-2xl p-2" />
               </div>
               <div>
                    <h2 className="text-xl font-medium">{name}</h2>
                    <p className="text-xs">{description}</p>
                    <div className="flex justify-between items-center gap-3 mt-2">
                         <h3 className="font-medium text-Crimson">{price} ETB</h3>
                         <div className="flex justify-between items-center gap-2 mb-2">
                              <button className="bg-Crimson text-white font-medium text-xl px-[9px] border-2 border-Crimson rounded-xl hover:text-Crimson hover:bg-white cursor-pointer"
                              onClick={()=> Decrease(_id)}
                              >-</button>
                              <p className="text-2xl font-medium">{quantity}</p>
                              <button className="bg-Crimson text-white font-medium text-xl px-2 border-2 border-Crimson rounded-xl hover:text-Crimson hover:bg-white cursor-pointer"
                                   onClick={() => Increase(_id)}
                              >+</button>
                         </div>
                    </div>
               </div>
               
               <button className="px-2 py-2 rounded-xl cursor-pointer hover:text-Crimson"
                    onClick={()=>Delete(_id)}
               ><FontAwesomeIcon icon={faTrashCan} className="text-xl"/></button>
               
          </div>               
     )
}

export default foodCardForCart