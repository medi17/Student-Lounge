import { JSX, useContext, useReducer, useState } from "react"
import Log from '../../assets/log-pic.png' 
import { InitialState, userRegisterReducer } from "../../hooks/userRegisterReducer";
import axios from "axios"
import { UserContext } from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';

type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type FormChangeEvent = React.ChangeEvent<FormElement>;

const login = (): JSX.Element => {

     const navigate = useNavigate();

     const userContext = useContext(UserContext)
     
     if (!userContext) {
          throw new Error("UserContext is not provided");
     }
     const setToken = userContext.setToken

     const [isRegistered, setIsRegistered] = useState(true);

     const [state, dispatch] = useReducer(userRegisterReducer, InitialState)

     const handleChange = (e: FormChangeEvent) => {
          dispatch({ type: "Change_Input", payload: { name: e.target.name, value: e.target.value } })          
     }

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          let newUrl = userContext.url
          
          if (!isRegistered) {
               newUrl += "/api/user/register"
          } else {
               newUrl += "/api/user/login"
          }          
          const response = await axios.post(newUrl, state)

          if (response.data.success) {

               if (response.data.admin) {
                    navigate('/admin');
               } else {
                    navigate('/');
                    setToken(response.data.token)
                    localStorage.setItem("token", response.data.token)                    
               }
          }
          else {
               alert(response.data.message)
          }

     }


     return (
          <form onSubmit={handleSubmit} className="flex justify-center items-center bg-white mx-6 rounded-[30px] shadow-sm md:mx-16 md:p-5 md:h-[450px]">
               <div className='w-[950px] h-full rounded-[30px] hidden md:block'>
                    <img src={Log}  className='hero w-full h-full rounded-l-[30px] '/>
               </div>
               <div className='w-[450px] md:w-full px-6 py-12'>
                    <h1 className="text-center text-5xl font-medium py-5">{isRegistered? "Log in": "Sign up"}</h1>
                    <div className="flex flex-col gap-4 px-8 md:px-0 lg:px-24">
                         {isRegistered ? <></> : 
                              <input className="bg-gray-hepta text-gray-tri py-2 px-4 rounded-3xl focus:outline-none"
                              name="fullName" value = {state.fullName} type="text" 
                                   placeholder="Doe John"
                                   onChange={handleChange}
                              />                         
                         }
                         <input className="bg-gray-hepta text-gray-tri py-2 px-4 rounded-3xl focus:outline-none"
                              name="email" value = {state.email} type="email"
                              onChange={handleChange}
                              placeholder={isRegistered? "Your email": "example@email.com"}
                         />
                         <input className="bg-gray-hepta text-gray-tri py-2 px-4 rounded-3xl focus:outline-none"
                              name="password" value = {state.password} type="password"
                              onChange={handleChange}
                              placeholder={isRegistered? "Your password": "enter your password"}
                         />
                         <button className="bg-Crimson text-white font-medium py-2 px-4 rounded-3xl cursor-pointer border-2 border-Crimson hover:text-Crimson hover:bg-white" 
                                   type="submit">
                              {isRegistered? "Log in":"Sign up"}</button>
                    </div>
                    <p className="text-center py-2 text-sm">{isRegistered? "Don't have an account?":"Already have an account?"}
                         <span className="text-Crimson underline hover:no-underline cursor-pointer"
                         onClick={() => setIsRegistered(!isRegistered)}>
                              {isRegistered ? "Sign up" : "Login"}</span>
                    </p>
               </div>
          </form>
     )
}

export default login
