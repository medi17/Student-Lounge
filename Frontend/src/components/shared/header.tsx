import {JSX, useState} from "react"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const header = ():JSX.Element => {
     
     const [toggleState, setToggleState] = useState<boolean>(false)

     const toggleMenu = () => {
          setToggleState(!toggleState);
     }

     return (
          <div className="flex justify-between items-center m-5 py-3 px-7 bg-white shadow-sm rounded-[50px] lg:mx-16">
               <h1 className="text-[24px] font-semibold text-Crimson">LOUNGE</h1>
               <ul className={toggleState ?"nav active-nav flex justify-between items-center gap-8 text-[20px]" : "nav flex justify-between items-center gap-8 text-[20px]"} >
                    <li className="hover:text-Crimson hover:text-[22px] hover:font-medium"><a href="#">Home</a></li>
                    <li className="hover:text-Crimson hover:text-[22px] hover:font-medium"><a href="#">About</a></li>
                    <li className="hover:text-Crimson hover:text-[22px] hover:font-medium"><a href="#">Contact</a></li>
               </ul>
               <div className="hidden md:block">
                    <div className="flex justify-center items-center gap-2">
                         <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[20px] cursor-pointer"/>
                         <button className="cursor-pointer bg-Crimson text-white text-[20px] font-medium py-1 px-3 border-2 border-Crimson rounded-3xl hover:text-Crimson hover:bg-white">
                              Login
                         </button>
                    </div>
               </div>
               <div className= "cursor-pointer flex flex-col items-center p-2 border-3 border-Crimson rounded-[12px] md:hidden" onClick={toggleMenu}>
                    <div className={toggleState ? 'w-6 h-1 rounded-xs bg-Crimson transform translate-y-[8px] rotate-45' : "w-6 h-1 rounded-xs bg-Crimson"} ></div>
                    <div className={toggleState ? 'w-6 h-1 mt-1 rounded-xs opacity-0' : "w-6 h-1 mt-1 rounded-xs bg-Crimson"}></div>
                    <div className={toggleState ? 'w-6 h-1 mt-1 rounded-xs bg-Crimson transform -translate-y-[8px] -rotate-45' : "w-6 h-1 mt-1 rounded-xs bg-Crimson"}></div>
               </div>
          </div>
     )
}

export default header
