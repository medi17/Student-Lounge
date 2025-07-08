import { orderProps } from "../../types/userTypes"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons"


const orderCard = ({ order }: orderProps) => {
     const { foods, status, fee, delivery } = order
     
     return (
          <div className="grid grid-cols-[1fr_2fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] place-items-center gap-y-3 md:gap-7 text-[10px] sm:text-[14px] md:text-base py-3 px-1 sm:px-5 text-gray-mono border border-Crimson rounded-4xl">
               <FontAwesomeIcon icon={faBoxOpen} className="text-2xl md:text-5xl text-gray-tri"/>
               <p>{foods.map((item, index) => {
                    if (index === order.foods.length - 1) {
                         return item.name + " x " + item.quantity
                    } else {
                         return item.name + " x " + item.quantity +", "                         
                    }
               })}
               </p>
               <p>{fee}.00 ETB</p>
               <p>Items: {foods.length}</p>
               <p><span>&#x25cf;</span> {status}</p>
               {
                    delivery === true ? (
                         <button className="bg-gray-penta p-1 sm:py-2 sm:px-3 text-[9px] sm:text-sm lg:text-[15px] font-medium rounded-2xl cursor-pointer hover:bg-gray-hexa"
                              // onClick={}
                         >Track order</button>
                    
                    ) : (
                              <p>Your ticket NO: </p>
                    )
               }
          </div>
     )
}

export default orderCard
