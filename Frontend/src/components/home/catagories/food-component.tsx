import { JSX, useContext } from "react"
import { FoodItem } from "../../../types/types"
import { MenuContext } from "../../../context/MenuContext"

const foodComponent = ({ id, name, image, description, duration, price }: FoodItem): JSX.Element => {

     const menuContext = useContext(MenuContext);

     if (!menuContext) {
          throw new Error("MenuContext is not provided");
     }

     const { addToCart } = menuContext;

     return (
          <div className="bg-white shadow-2xl rounded-[30px] text-center min-w-[260px] md:min-w-[312px]">
               <img className="rounded-t-[30px]"
                    src={image} alt={name} />
               <h2 className="text-[28px] font-medium text-gray-mono">{name}</h2>
               <h4 className="text-sm text-gray-tetra">{duration} min</h4>
               <p className="text-base font-light px-1">{description}</p>
               <div className="mt-6 pb-6 text-white self-baseline">
                    <div className="inline-block py-3 pl-5 bg-Crimson text-white rounded-l-3xl">
                         <div className="flex gap-3">
                              <p>{price} ETB</p>
                              <p>|</p>
                         </div>
                    </div>
                    <button className="cursor-pointer bg-Crimson py-2 pl-2 pr-4 rounded-r-3xl border-y-4 border-r-4 border-Crimson shadow-5xl hover:bg-white hover:text-Crimson hover:font-medium"
                    
                         onClick = {() => addToCart(id)}>
                         Add to cart</button>
               </div>
          </div>
     )
}

export default foodComponent