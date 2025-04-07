import FoodComponent from "./food-component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { MenuContext } from "../../../context/MenuContext"
import { FoodItem } from "../../../types/types"

const Mainfoods = () => {

     const FoodListObject = useContext(MenuContext)
     const mainItems = FoodListObject?.foodItems || []

     if (!mainItems) {
          return <div className="ml-5 text-2xl font-bold">Sorry no food items are available <FontAwesomeIcon icon={faFaceSadTear} className="text-yellow-600 text-3xl"/></div>;
     }
     return (
          <div className="scroll bg-white flex justify-start gap-5 overflow-x-scroll mb-5 mx-2 rounded-[30px] md:gap-10 px-3 py-5 md:px-10">
               {
                    mainItems.map((fooditem: FoodItem) => (                         
                         fooditem.catagory === "main" && (     
                              < FoodComponent food = { fooditem }/>
                         )
                    
                    ))
               }
          </div>
     )
}

export default Mainfoods
