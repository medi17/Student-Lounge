import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { NavLink } from "react-router-dom"
const footer = () => {

     const year: number = new Date().getFullYear()

     return (
          <div className="bg-gray-di text-white mt-8 p-6 pb-3 md:pt-12">
               <div className="md:flex md:justify-between md:mx-16">
                    <div>
                         <h1 className="text-2xl font-semibold md:text-4xl hover:text-Crimson w-[90px]">LOUNGE</h1>
                         <div className="flex gap-2 mt-2 md:mt-4 md:gap-4">
                              <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-Crimson md:text-3xl"/>
                              <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-Crimson md:text-3xl"/>
                              <FontAwesomeIcon icon={faWhatsapp} className="text-xl hover:text-Crimson md:text-3xl"/>
                         </div>
                    </div>
                    <div className="flex flex-col text-base mt-8 w-[90px] md:text-lg md:mt-0">
                         <NavLink to="/" className="hover:text-Crimson cursor-pointer">Home</NavLink>
                         <NavLink to="/menu" className="hover:text-Crimson cursor-pointer">Menu</NavLink>
                         <NavLink to="/contact" className="hover:text-Crimson cursor-pointer">Contact Us</NavLink>
                    </div>
                    <div className="mt-5 md:text-lg md:mt-0">
                         <h3>6kilo - AAU, Addis Ababa, Ethiopia</h3>
                         <h3>sixkilolounge@gmail.com</h3>
                         <h3>+251-987-654-321</h3>
                    </div>
               </div>
               <div className="text-center mt-8 text-sm md:mt-14">
                   All right reserved. 6-K-Lounge &copy;{year}
               </div>
          </div>
     )
}

export default footer
