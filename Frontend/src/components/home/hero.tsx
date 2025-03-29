import { JSX } from "react"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const hero = ():JSX.Element => {
     return (
          <div className="hero-section mx-6 rounded-[30px] md:mx-16 md:h-[420px]">
               <div className="hero pt-10 pb-5 px-5 text-white md:pt-28 md:px-10" >
                    <h1 className="text-4xl md:text-[72px]"><span className="font-semibold">Hungry?</span> Get it fast.</h1>
                    <p className="text-sm py-2 md:text-2xl">Fast, fresh and just the way you like it!</p>
                    <button className="cursor-pointer border-3 border-Crimson bg-Crimson py-2 px-6 mt-4 rounded-3xl md:text-xl md:mt-10 hover:bg-white hover:text-Crimson hover:font-medium">
                         <FontAwesomeIcon icon={faBagShopping} className="mr-3"/>
                         Order now
                    </button>
               </div>
          </div>
     )
}

export default hero