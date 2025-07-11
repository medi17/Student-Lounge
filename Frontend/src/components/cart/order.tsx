import { useState } from "react"
import Delivery from "./delivery"
import OrderSummary from "./orderSummary"

type Props = {
     isCartEmpty: boolean
}

const Order = ({isCartEmpty}:Props) => {

     const [toOrdersummary, setToOrdersummary] = useState<boolean>(false)

     return (
          <div className={isCartEmpty === true ? "hidden":  "block"}>
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
