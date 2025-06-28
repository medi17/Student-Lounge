import { createContext, useState } from "react";
import { ChildrenType, OrderContextType } from "../types/foodTypes"


export const OrderContext = createContext<OrderContextType | null>(null)



const OrderContextProvider = ({ children }: ChildrenType) =>{
     const [isChecked, setIsChecked] = useState("yes")

     return (
          <OrderContext.Provider value= {{isChecked, setIsChecked}}>
               {children}
          </OrderContext.Provider>
     )
}

export default OrderContextProvider