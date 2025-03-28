import FoodComponent from "./food-component"
import { useContext } from "react"
import { MenuContext } from "../../../context/MenuContext"
import { FoodItem } from "../../../types/types"

const Mainfoods = () => {

     const foodItems = useContext(MenuContext)

     if (!foodItems) {
          return <div>No food items available.</div>;
     }

     return (
          <div className="scroll bg-white flex justify-start gap-5 overflow-x-scroll mb-5 mx-2 rounded-[30px] md:gap-10">
               {
                    foodItems.map((item:FoodItem, index:number) => {
                         return (
                              <FoodComponent
                                   key={index}
                                   id={item.id}
                                   name={item.name}
                                   duration = {item.duration}
                                   description={item.description}
                                   price={item.price}
                                   image={item.image}
                              /> 
                         )
                    })
               }
          </div>
     )
}

export default Mainfoods
