import { useContext, useReducer, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { deliveryReducer, InitialState } from "../../hooks/deliveryReducer";
import { CartContext } from "../../context/CartContext";
import { FoodItem } from "../../types/foodTypes";
import { OrderContext } from "../../context/OrderContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type FormChangeEvent = React.ChangeEvent<FormElement>;

const delivery_form = () => {
     const navigate = useNavigate()

     const [isSubmitting, setIsSubmitting] = useState(false);

     //  order Context
     const orderContext = useContext(OrderContext)

     if (!orderContext) {
          throw new Error("OrderContext is not provided");
     }     
     const isChecked = orderContext.isChecked
     const totalFee = orderContext.totalFee

     //  user Context
     const userContext = useContext(UserContext)

     if (!userContext) {
          throw new Error("UserContext is not provided");
     }
     const url = userContext.url
     const token = userContext.token

     //  cart Context
     const cartContext = useContext(CartContext)

     if (!cartContext) {
          throw new Error("CartContext is not provided");
     }
     const cart = cartContext.cart
     const cartDispatch = cartContext.dispatch
     const foodItems = cartContext.foodItems

     // Delivery useReducer 
     const [state, dispatch] = useReducer(deliveryReducer, InitialState);

     const handleChange = (e: FormChangeEvent) => {
          const { name, value } = e.target;
          dispatch({ type: "Change_Input", payload: {name, value}})
     }
     
     const placeOrder = async (event:React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          if (isSubmitting) {
               return;
          }
          setIsSubmitting(true);
          let orderItems: FoodItem[] = []
          
          foodItems.map((food) => {
               if (cart[food._id] > 0) {
                    let foodInfo = food
                    foodInfo["quantity"] = cart[food._id]
                    orderItems.push(foodInfo)
               }
          })
          let OrderData = {
               delivery: isChecked,
               foods: orderItems,
               fee: totalFee,
               info:state
          }

          let response = await axios.post(`${url}/api/order/placeorder`, OrderData, { headers: { token } })
          
          if (response.data.success) {
               cartDispatch({type:"Reset"})
               navigate("/")
               toast.success(response.data.message)
          } else {
               setIsSubmitting(false);
               toast.error(response.data.message)
               console.log(response.data.message)
          }
     }

     return (
          <div className="flex-grow bg-white m-5 py-5 px-7 rounded-3xl lg:mx-16">
               <h1 className="text-3xl font-medium">Delivey Information</h1>
               <p className="font-light text-sm my-2">Fill the form so we can deliver to you.</p>
               <form onSubmit={placeOrder}>
                    <div className="flex justify-center items-center gap-3">
                         <input className="bg-gray-hepta text-gray-tri py-2 px-4 w-full my-3 rounded-3xl focus:outline-none"
                              name="firstName"
                              value={state.firstName}
                              type="text"
                              placeholder="First name"
                              onChange={handleChange}
                              required
                         />
                         <input className="bg-gray-hepta text-gray-tri py-2 px-4 w-full my-3 rounded-3xl focus:outline-none"
                              name="lastName"
                              value={state.lastName}                              
                              type="text"
                              placeholder="Last name"
                              onChange={handleChange}
                              required
                         />
                         <input className="bg-gray-hepta text-gray-tri py-2 px-4 w-full my-3 rounded-3xl focus:outline-none"
                              name="email"
                              value={state.email}                              
                              type="email"
                              placeholder="Email address"
                              onChange={handleChange}
                              required
                         />
                    </div>

                    
                    <div className="md:grid md:grid-cols-3 md:justify-center  md:place-items-center">
                         
                         <input className="bg-gray-hepta text-gray-tri py-2 px-4 w-full my-3 rounded-3xl focus:outline-none"
                              name="phoneNumber"
                              value={state.phoneNumber}
                              placeholder="Phone number"
                              onChange={handleChange}
                              required
                         />
                         <div>
                              <label className="pl-3 font-medium mr-5" htmlFor="fruits">Dorm block: </label>
                              <select name="dormBlock" value={state.dormBlock} onChange={handleChange} className="bg-gray-hepta p-3 rounded-xl focus:outline-none" >
                                   <option value="Men's - A">Men's - A</option>
                                   <option value="Men's - B">Men's - B</option>
                                   <option value="Women's - C">Women's - C</option>
                                   <option value="Women's - D">Women's - D</option>
                              </select>
                         </div>

                         <input className="bg-gray-hepta text-gray-tri py-2 px-4 w-full my-3 rounded-3xl focus:outline-none"
                              name="dormNumber"
                              value={state.dormNumber}                              
                              type="number"
                              placeholder="Dorm number"
                              onChange={handleChange}
                              required
                         />
                    </div>
                    <button className={`bg-Crimson text-white font-medium w-full sm:w-[20%] p-2 mt-8 rounded-3xl cursor-pointer 
                    border-2 border-Crimson ${isSubmitting?'opacity-70 cursor-not-allowed':'hover:text-Crimson hover:bg-white '}`}
                         type="submit"
                    >{isSubmitting?"Processing...":"Done"}</button>
               </form>
          </div>
     )
}

export default delivery_form
