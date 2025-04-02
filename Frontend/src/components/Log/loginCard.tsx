import {JSX, useState} from "react"
import Log from '../../assets/log-pic.png' 
const login = ():JSX.Element => {
     const [isRegistered, setIsRegistered] = useState(true);

     return (
          <div className="flex justify-center items-center bg-white mx-6 rounded-[30px] shadow-sm md:mx-16 md:p-5 md:h-[450px]">
               <div className='w-[950px] h-full rounded-[30px] hidden md:block'>
                    <img src={Log}  className='w-full h-full rounded-l-[30px] '/>
               </div>
               <div className='w-[450px] md:w-full px-6 py-12'>
                    <h1 className="text-center text-5xl font-medium py-5">{isRegistered? "Log in": "Sign up"}</h1>
                    <div className="flex flex-col gap-4 px-8 md:px-0 lg:px-24">
                         {isRegistered ? <></> : 
                              <input className="bg-gray-hepta py-2 px-4 rounded-3xl focus:outline-none"
                                   type="email"
                                   placeholder="Doe John"
                              />                         
                         }
                         <input className="bg-gray-hepta py-2 px-4 rounded-3xl focus:outline-none"
                              type="email"
                              placeholder={isRegistered? "Your email": "example@email.com"}
                         />
                         <input className="bg-gray-hepta py-2 px-4 rounded-3xl focus:outline-none"
                              type="password"
                              placeholder={isRegistered? "Your password": "enter your password"}
                         />
                         <button className="bg-Crimson text-white font-medium py-2 px-4 rounded-3xl cursor-pointer hover:bg-red-500"
                         
                         >
                              {isRegistered? "Log in":"Sign Up"}</button>
                    </div>
                    <p className="text-center py-2 text-sm">{isRegistered? "Don't have an account?":"Already have an account?"}
                         <span className="text-Crimson underline hover:no-underline cursor-pointer"
                         onClick={() => setIsRegistered(!isRegistered)}>
                              {isRegistered ? "Sign up" : "Login"}</span>
                    </p>
               </div>
          </div>
     )
}

export default login
