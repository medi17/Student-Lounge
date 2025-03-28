import { JSX } from "react"
import { FoodItem } from "../../../types/types"

const foodComponent = ({ name, image, description, duration, price }: FoodItem): JSX.Element => {

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
                    <button className="cursor-pointer bg-Crimson py-2 pl-2 pr-4 rounded-r-3xl border-y-4 border-r-4 border-Crimson shadow-5xl hover:bg-white hover:text-Crimson hover:font-medium">
                         Add to cart</button>
               </div>
          </div>
     )
}

export default foodComponent

// import { JSX, useReducer, useEffect } from "react"
// import FoodComponent from "../components/shared/food-component"
// import { IntialState } from "../hooks/UseReducer"
// import reducer from "../hooks/UseReducer"
// // import { FoodProps } from "../types/types"
// import { getAll } from "../services/foodServices"

// <FoodComponent foods = {foods}/>

     // const [state, dispatch] = useReducer(reducer, IntialState)
     // const { foods } = state

     // useEffect(() => {
     //      getAll().then((foods) => dispatch({type: 'Foods_Loaded', payload: { foods }}))
     // }, [])