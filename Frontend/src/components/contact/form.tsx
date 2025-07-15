import { useContext, useReducer } from "react"
import contactUsReducer, { InitialState } from "../../hooks/contactUsReducer"
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";

type FormElement = HTMLInputElement | HTMLTextAreaElement;
type FormChangeEvent = React.ChangeEvent<FormElement>;

const Form = () => {

     const userContext = useContext(UserContext)
     if (!userContext) {
          throw new Error("userContext is not provided.");
     }
     const url = userContext.url

     const[state, dispatch] = useReducer(contactUsReducer, InitialState)

     const handleChange = (e: FormChangeEvent) => {
          const { name, value } = e.target;
          dispatch({ type: "Change_Input", payload: {name, value}})
     }     

     const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
          event.preventDefault()

          try {
               let contactInfo = state

               let response = await axios.post(url + "/api/contact/send", contactInfo)
     
               if (response.data.success) {
                    dispatch({type:"Reset"})
                    toast.success(response.data.message)
               } else {
                    toast.error(response.data.message)
                    console.log(response.data.message)
               }               
          } catch (error) {
               console.error("Error submitting form:", error);
               if (axios.isAxiosError(error) && error.response) {
                   toast.error(error.response.data.message || "Failed to send message. Please try again.");
               } else {
                   toast.error("An unexpected error occurred. Please try again.");
               }
          }

     }

     return (
          <div className="ease-up bg-white mt-5 p-5 rounded-3xl max-w-[500px] md:max-w-[300px] lg:max-w-[500px]">
               <h1 className="text-3xl font-medium">Get in Touch</h1>
               <p className="font-light text-sm my-2">You can reach us anytime</p>
               <form onSubmit={handleSubmit}>
                    <div className="md:flex md:justify-center md:items-center md:gap-3">
                         <input className="bg-gray-hepta text-gray-tri py-2 px-4 w-full my-3 rounded-3xl focus:outline-none"
                              type="text"
                              name = "firstName"
                              value={state.firstName}
                              onChange ={handleChange}
                              placeholder="First name"
                              required />
                         <input className="bg-gray-hepta text-gray-tri py-2 px-4 w-full my-3 rounded-3xl focus:outline-none"
                              type="text"
                              name = "lastName"
                              value={state.lastName}
                              onChange ={handleChange}
                              placeholder="Last name" 
                              required/>
                    </div>
                    <input className="bg-gray-hepta text-gray-tri py-2 px-4 w-full my-3 rounded-3xl focus:outline-none"
                         type="text"
                         name = "email"
                         value={state.email}
                         onChange ={handleChange}
                         placeholder="Your email" 
                         required/>
                    <textarea className="bg-gray-hepta text-gray-tri py-2 px-4 w-full h-[120px] my-3 rounded-3xl focus:outline-none"
                         name="message"
                         value={state.message}
                         onChange ={handleChange}
                         placeholder="Your message"
                         required />
                    <button type="submit" className="bg-Crimson text-white font-medium w-full p-2 rounded-3xl cursor-pointer border-2 border-Crimson hover:text-Crimson hover:bg-white"
                    >Submit</button>
               </form>
          </div>
     )
}

export default Form
