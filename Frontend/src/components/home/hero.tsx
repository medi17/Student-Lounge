import { JSX, useContext } from "react"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignIn } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from 'react-router-dom'
import { UserContext } from "../../context/UserContext"

const hero = ():JSX.Element => {
 
     // usercontext import
     const userContext = useContext(UserContext)
          
     if (!userContext) {
          throw new Error("UserContext is not provided");
     }
     const token = userContext.token
     const setToken = userContext.setToken

     const handleLogout = () => {
          localStorage.removeItem("token");
          setToken("")
     }
     return (
          <div className="hero-section mx-6 rounded-[30px] md:mx-16 md:h-[420px]">
               <div className="hero pt-10 pb-5 px-5 text-white md:pt-28 md:px-10" >
                    <h1 className="text-4xl md:text-[72px]"><span className="font-semibold">Hungry?</span> Get it fast.</h1>
                    <p className="text-sm py-2 md:text-2xl">Fast, fresh and just the way you like it!</p>
                    <div className="flex items-center">
                         <button className="cursor-pointer border-3 border-Crimson bg-Crimson text-sm py-2 px-3 mt-4 rounded-3xl sm:px-6 md:text-xl md:mt-10 hover:bg-white hover:text-Crimson hover:font-medium">
                              <FontAwesomeIcon icon={faBagShopping} className="mr-2 sm:mr-3"/>
                              <a href="#foods">Order now</a>
                         </button>
                         <div className="md:hidden"> 
                              {
                                   !token ?
                                        <NavLink to="/login">
                                             <button className="cursor-pointer border-3 border-Crimson bg-Crimson text-sm py-2 px-3 mt-4 ml-3 rounded-3xl sm:px-6 hover:bg-white hover:text-Crimson hover:font-medium">
                                                  Login
                                                  <FontAwesomeIcon icon={faSignIn} className="ml-2 sm:ml-3"/>
                                             </button>
                                        </NavLink>
                                   :
                                   <button onClick={handleLogout} className="cursor-pointer border-3 border-Crimson bg-Crimson text-sm py-2 px-3 mt-4 ml-3 rounded-3xl sm:px-6 hover:bg-white hover:text-Crimson hover:font-medium">
                                        Logout
                                        <FontAwesomeIcon icon={faSignIn} className="ml-2 sm:ml-3"/>
                                   </button>                                              
                              }
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default hero