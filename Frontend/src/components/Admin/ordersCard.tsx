import { orderProps } from "../../types/userTypes"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons"
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type FormChangeEvent = React.ChangeEvent<FormElement>;

const ordersCard = ({ order }: orderProps) => {
     const { _id, foods, status, fee, delivery, info } = order
     
     const usecontext = useContext(UserContext)
     const url = usecontext?.url     

     const handleChange = async (e: FormChangeEvent, orderId:string) => {
          await axios.post(url + "/api/order/status", { orderId, status: e.target.value })  
     }

     return (
          <div className="w-full grid grid-cols-[1fr_1fr] sm:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] place-items-center gap-y-3 sm:gap-3 md:gap-7 md:text-base py-3 px-1 sm:px-5 text-gray-mono border border-Crimson rounded-4xl">
               <FontAwesomeIcon icon={faBoxOpen} className="text-2xl md:text-5xl text-gray-tri" />
               <div className="flex flex-col gap-3 justify-self-start">
                    <p className="text-[10px] sm:text-sm md:text-base font-medium">
                         {foods.map((item, index) => {
                         if (index === order.foods.length - 1) {
                              return item.name + " x " + item.quantity
                         } else {
                              return item.name + " x " + item.quantity +", "                         
                         }
                         })}
                    </p> 
                    <div className="text-[10px] sm:text-sm"> 
                         <p>{info.firstName + " " + info.lastName}</p>
                         <p className="font-medium">{info.dormBlock + ", " + info.dormNumber}</p>
                    </div>
               </div>
               <p className="text-[10px] sm:text-sm md:text-base">Items: {foods.length}</p>
               <p className="text-[10px] sm:text-sm md:text-base">{fee} ETB</p>
               <div className="flex items-center">
                    <p className="font-medium text-[10px] sm:text-sm md:text-base">Delivery:</p> 
                    <div className={delivery === true ? "px-1 ml-1 text-[10px] sm:text-sm bg-green-400 flex justify-center items-center rounded-sm" : "px-1 ml-1 text-[10px] sm:text-sm bg-red-400 flex justify-center items-center rounded-sm"}>
                    {delivery === true ? (<h4>Yes</h4>) : (<h4>No</h4>)}
                    </div>
               </div>
               <select name="status" value={status} onChange={(event)=>handleChange(event, _id)} className="bg-gray-hepta text-[9px] sm:text-base p-1 sm:p-2 outline-none rounded-2xl">
                    <option value="Food Processing">Food Processing</option>
                    <option value="Completed">Completed</option>
                    {
                         delivery === true ? (
                              <>
                                   <option value="Out for delivery">Out for delivery</option>
                                   <option value="Delivered">Delivered</option>
                              </>
                         ) : (
                              <></>
                         )
                    }
               </select>
          </div>
     )
}

export default ordersCard
