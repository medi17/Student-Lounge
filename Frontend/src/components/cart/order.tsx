import { useState } from "react"
import { CartItemType } from "../../types/foodTypes"
import Delivery from "./delivery"
import OrderSummary from "./orderSummary"

type Props = {
    cartItems: CartItemType[]
}

const Order = ({cartItems}:Props) => {

     const [toOrdersummary, setToOrdersummary] = useState<boolean>(false)

     return (
          <div className={cartItems.length === 0 ? "hidden":  "block"}>
               <div className={toOrdersummary? "hidden": "block"}>
                    <Delivery setToOrdersummary = {setToOrdersummary}/>
               </div>

               <div className={toOrdersummary? "block text-center mt-8 md:mx-10": "hidden"}>
                    <OrderSummary />
               </div>
          </div>
     )
}

export default Order
