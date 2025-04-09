import React, { useContext } from "react"
import { OrderContext } from "../../context/OrderContext"

type Props = {
     setToOrdersummary: React.Dispatch<React.SetStateAction<boolean>>
}
const delivery = ({setToOrdersummary}:Props) => {

     const Order = useContext(OrderContext)
     const isChecked = Order?.isChecked
     const setIsChecked = Order?.setIsChecked


     if (!Order) {
          throw new Error("OrderContext is not provided");
     }

     const isSelected = (value: string) => isChecked === value

     const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value
          setIsChecked?.(value)
     } 

     const wantDeliveryNext = () =>{
          setToOrdersummary(true)
     }

     return (
          <div className="bg-gray-octa px-5 py-10 my-5 text-left rounded-2xl md:pl-10 md:pr-28">
               <h2 className="text-2xl">Do you want delivery?</h2>
               <div className="flex flex-col justify-self-start mt-5">
                    <div className="flex justify-center items-center gap-2 text-xl">
                         <input
                              className="bg-Crimson"
                              type="radio"
                              value="yes"
                              id="yes"
                              name="delivery"
                              checked={isSelected("yes")}
                              onChange={handleRadio}
                         /> <label htmlFor="yes">Yes</label>
                    </div>
                    <div className="flex justify-center items-center gap-3 text-xl">
                         <input
                              type="radio"
                              value="no"
                              id="no"
                              name="delivery"
                              checked={isSelected("no")}
                              onChange={handleRadio}
                         /> <label htmlFor="no">No</label>
                    </div>                                                               
               </div>
               <button className = "bg-Crimson text-white font-medium mt-6 py-1 px-5 rounded-3xl cursor-pointer border-2 border-Crimson hover:text-Crimson hover:bg-white"
                    onClick = {wantDeliveryNext}                    
                    >Next</button> 
          </div>
     )
}

export default delivery
