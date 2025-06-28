import { JSX, useContext } from "react"
import { FoodProps } from "../../../types/foodTypes"
import { CartContext } from "../../../context/CartContext"

const foodComponent = ({ food }: FoodProps): JSX.Element => {
     const {id, image, name, duration, description, price } = food;

     const cartContext = useContext(CartContext);

     if (!cartContext) {
          throw new Error("CartContext is not provided");
     }
     const cart = cartContext?.cart.cart || []
     const dispatch = cartContext?.dispatch

     const Add = (id: number) => {

          if (cart.find(foodItem => foodItem.id === id)) {
               return;
          } else {
               dispatch({ type: "Add", payload: food })
          }
  
     }

     return (
          <div className="food-card flex flex-col justify-between items-center bg-white shadow-xl rounded-[30px] text-center min-w-[260px] border-1 border-gray-300 md:min-w-[312px]">
               <div>
                    <img className="rounded-t-[30px]"src={image} alt={name} />
                    <h2 className="text-[28px] font-medium text-gray-mono">{name}</h2>
                    <h4 className="text-sm text-gray-tetra">{duration} min</h4>
                    <p className="text-base font-light px-1">{description}</p>
               </div>
               <div className="flex justify-center items-center w-full mt-6 pb-6 text-white self-baseline">
                    <div className="inline-block py-3 pl-5 bg-Crimson text-white rounded-l-3xl">
                         <div className="flex gap-3">
                              <p>{price} ETB</p>
                              <p>|</p>
                         </div>
                    </div>
                    <button className="cursor-pointer bg-Crimson py-2 pl-2 pr-4 rounded-r-3xl border-y-4 border-r-4 border-Crimson shadow-5xl hover:bg-white hover:text-Crimson hover:font-medium"
                         onClick = {() => Add(id)}>
                         Add to cart</button>
               </div>
          </div>
     )
}

export default foodComponent