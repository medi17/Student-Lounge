import { JSX, useContext } from "react"
import { FoodProps } from "../../../types/types"
import { CartContext } from "../../../context/CartContext"

const foodComponent = ({ food }: FoodProps): JSX.Element => {
     const { image, name, duration, description, price } = food;

     const cartContext = useContext(CartContext);

     if (!cartContext) {
          throw new Error("CartContext is not provided");
     }

     const dispatch = cartContext?.dispatch;

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
                         onClick = {() => dispatch({ type: "Add", payload: food })}>
                         Add to cart</button>
               </div>
          </div>
     )
}

export default foodComponent