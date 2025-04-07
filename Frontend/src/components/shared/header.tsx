import { JSX, useState, useContext} from "react"
import { NavLink } from 'react-router-dom'
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CartContext } from "../../context/CartContext"

const header = ():JSX.Element => {
     
     const [toggleState, setToggleState] = useState<boolean>(false)

     const toggleMenu = () => {
          setToggleState(!toggleState);
     }

     const cartContext = useContext(CartContext);

     if (!cartContext) {
          throw new Error("CartContext is not provided");
     }

     const cart = cartContext?.cart;

     return (
          <div className="flex justify-between items-center sticky top-0 m-5 py-3 px-7 bg-white shadow-sm rounded-[50px] lg:mx-16">
               <NavLink to="/">
                    <h1 className="text-[24px] font-semibold text-Crimson">LOUNGE</h1>
               </NavLink>
               <ul className={toggleState ?"nav active-nav flex justify-between items-center gap-8 text-[20px]" : "nav flex justify-between items-center gap-8 text-[20px]"} >
                    <li className="hover:text-Crimson hover:text-[22px] hover:font-medium"><NavLink to="/">Home</NavLink></li>
                    <li className="hover:text-Crimson hover:text-[22px] hover:font-medium"><NavLink to="/menu">Menu</NavLink></li>
                    <li className="hover:text-Crimson hover:text-[22px] hover:font-medium"><NavLink to="/contact">Contact</NavLink></li>
               </ul>
               <div className="flex justify-center items-center gap-4">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[20px] cursor-pointer" />
                    <NavLink to="/Cart">
                         <div className=" flex relative items-center cursor-pointer">
                              <FontAwesomeIcon icon={faCartShopping} className="text-[20px] cursor-pointer"/>
                              <p className="font-medium text-l text-Crimson absolute -top-4 left-5">{cart.cart.length}</p>
                         </div>
                    </NavLink>
                    <div className="hidden md:block">
                         <NavLink to="/Login">
                              <button className="cursor-pointer bg-Crimson text-white text-[20px] font-medium py-1 px-3 border-2 border-Crimson rounded-3xl hover:text-Crimson hover:bg-white">
                                   Login
                              </button>
                         </NavLink>
                    </div>
                    <div className= "cursor-pointer flex flex-col items-center p-2 border-3 border-Crimson rounded-[12px] md:hidden" onClick={toggleMenu}>
                         <div className={toggleState ? 'w-6 h-1 rounded-xs bg-Crimson transform translate-y-[8px] rotate-45' : "w-6 h-1 rounded-xs bg-Crimson"} ></div>
                         <div className={toggleState ? 'w-6 h-1 mt-1 rounded-xs opacity-0' : "w-6 h-1 mt-1 rounded-xs bg-Crimson"}></div>
                         <div className={toggleState ? 'w-6 h-1 mt-1 rounded-xs bg-Crimson transform -translate-y-[8px] -rotate-45' : "w-6 h-1 mt-1 rounded-xs bg-Crimson"}></div>
                    </div>
               </div>
          </div>
     )
}

export default header

