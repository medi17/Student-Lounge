import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const OrderSummary = () => {

     const navigator = useNavigate()
     const Order = useContext(OrderContext)

     if (!Order) {
          throw new Error("OrderContext is not provided");
     }

     const isChecked = Order.isChecked
     const totalFee = Order.totalFee
     const foodPriceCalculator = Order.foodPriceCalculator

     const userContext = useContext(UserContext);

     if (!userContext) {
          throw new Error("UserContext is not provided");
     }

     const token = userContext.token

     return (
          <>
               <h1 className="text-2xl">Order Summary</h1>
               <hr className="my-5 w-full border-dashed" />
               <div className="px-7">
                    <div className="flex justify-between items-center gap-4 lg:gap-42">
                         <h2 className="text-lg text-gray-tetra">Food</h2>
                         <p className="text-gray-tetra">{foodPriceCalculator()} ETB</p>
                    </div>
                    <div className="flex justify-between items-center gap-4 mt-3">
                         <h2 className="text-lg text-gray-tetra">Delivery fee</h2>
                         <p className="text-gray-tetra">{isChecked === "yes"? "10 ETB" : "None"}</p>
                    </div>
                    <div className="flex justify-between items-center gap-4 lg:gap-42 mt-3">
                         <h2 className="text-lg font-[600]">Total</h2>
                         <p className="font-[600]">{totalFee} ETB</p>
                    </div>
               </div>
               <hr className="my-5 w-full border-dashed" />
               <button className="bg-Crimson text-white py-2 lg:px-24 rounded-3xl font-medium px-14 lg:text-lg cursor-pointer border-2 border-Crimson hover:text-Crimson hover:bg-white"
                    onClick={() => {
                         if (token) {
                              navigator("/delivery")
                         } else {
                              alert ("Please log in")
                         }
                    }}
               >Proceed to Order</button>
          </>
     )
}

export default OrderSummary
