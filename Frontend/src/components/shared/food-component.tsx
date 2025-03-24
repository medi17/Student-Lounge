import { JSX, useReducer } from "react"
import Tasty from "../../assets/tasty-soya.svg"

const foodComponent = (): JSX.Element => {
     

     // const [state, dispatch] = useReducer(reducer, intialstate)
     return (
          <div className="bg-white shadow-2xl rounded-[30px] text-center max-w-[312px]">
               <img className="rounded-t-[30px]"
                    src={Tasty} alt="food-img" />
               <h2 className="text-[28px] font-medium text-gray-mono">Tasty Soya</h2>
               <h4 className="text-sm text-gray-tetra">30 min</h4>
               <p className="text-base font-light">A Tasty soya dish made with tasty soya it self, pepper, onion and other delicious spices.</p>
               <div className="mt-6 pb-6 text-white">
                    <div className="inline-block py-3 pl-5 bg-Crimson text-white rounded-l-3xl">
                         <div className="flex gap-3">
                              <p>45.00 ETB</p>
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
