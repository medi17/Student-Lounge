import { JSX, useState, useContext, useEffect} from "react"
import { NavLink, useNavigate } from 'react-router-dom'
import { faCartShopping, faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CartContext } from "../../context/CartContext"
import { UserContext } from "../../context/UserContext"
import ProfileImage from "../../assets/Profile_pic.png"
import Skeleton from '@mui/material/Skeleton';

const header = ():JSX.Element => {
     
     const [loading, setLoading] = useState(true)

     const [toggleState, setToggleState] = useState<boolean>(false)

     const toggleMenu = () => {
          setToggleState(!toggleState);
     }

     const cartContext = useContext(CartContext);

     if (!cartContext) {
          throw new Error("CartContext is not provided");
     }

     const cart = cartContext.cart;
     const cartLength = Object.keys(cart).length

     // usercontext import
     const userContext = useContext(UserContext)
          
     if (!userContext) {
          throw new Error("UserContext is not provided");
     }
     const token = userContext.token
     const setToken = userContext.setToken

     const navigate = useNavigate();
     const logOut = () => {
          localStorage.removeItem("token");
          setToken("");
          navigate("/")
     }

     useEffect(() => {
          setTimeout(() => {
               setLoading(false)
          }, 2000);
          if(!token) {
               setLoading(true)
          }
     }, [token])

     return (
          <div className="flex justify-between items-center sticky top-0 m-5 py-3 px-7 bg-white shadow-sm rounded-[50px] z-50 lg:mx-16">
               <NavLink to="/">
                    <h1 className="text-[24px] font-semibold text-Crimson">LOUNGE</h1>
               </NavLink>
               <ul className={toggleState ?"nav active-nav flex justify-between items-center gap-8 text-[20px]" : "nav flex justify-between items-center gap-8 text-[20px]"} >
                    <li className="hover:text-Crimson hover:text-[22px] hover:font-medium"><NavLink to="/">Home</NavLink></li>
                    <li className="hover:text-Crimson hover:text-[22px] hover:font-medium"><NavLink to="/contact">Contact</NavLink></li>
                    <li className="hover:text-Crimson hover:text-[22px] hover:font-medium"><NavLink to="/mobile">Mobile</NavLink></li>
               </ul>
               <div className="flex justify-center items-center gap-4">
                    <NavLink to="/cart">
                         <div className=" flex relative items-center cursor-pointer">
                              <FontAwesomeIcon icon={faCartShopping} className="text-[20px] cursor-pointer"/>
                              {cartLength === 0 ? (
                                   <></>
                              ) : (
                                   <p className="font-medium text-l text-Crimson absolute -top-4 left-5">{cartLength}</p>
                              )}
                         </div>
                    </NavLink>
                    <div className="hidden md:block">
                         {loading ? (
                              <Skeleton variant="circular" width={35} height={35} />
                         ) : (!token ?
                              <NavLink to="/login">
                                   <button className="cursor-pointer bg-Crimson text-white text-[20px] font-medium py-1 px-3 border-2 border-Crimson rounded-3xl hover:text-Crimson hover:bg-white">
                                        Login
                                   </button>
                              </NavLink>
                              :
                              <div className="profile relative">
                                   <img src={ProfileImage} alt="profile picture" className="w-10 cursor-pointer" />
                                   <ul className="profile-dropdown hidden absolute right-0 z-40 border-2 border-gray-tri rounded-2xl">
                                        <NavLink to="/myorders">
                                             <li className="flex justify-center items-center font-medium text-lg px-6 pt-2 cursor-pointer hover:text-Crimson">
                                                       <FontAwesomeIcon icon={faBagShopping} className="mr-3" />Orders</li>
                                        </NavLink>
                                        <hr className="border-t-2 border-gray-tri"/>
                                        <li onClick={logOut} className="flex justify-center items-center font-medium text-lg px-6 pb-2 cursor-pointer hover:text-Crimson">
                                             <FontAwesomeIcon icon={faBagShopping} className="mr-3" />LogOut</li>
                                   </ul>
                              </div>)
                         }
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

