import { useReducer, useState } from 'react'
import UploadImage from '../../assets/admin_images/upload_monochromatic.jpg'
import { InitialState, addItemReducer } from '../../hooks/additemReducer'
import axios from "axios"
import { toast } from 'react-toastify'

type Props = {
     className:string
}
type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type FormChangeEvent = React.ChangeEvent<FormElement>;


const add = ({ className }: Props) => {

     const [image, setImage] = useState<File | null>(null)
     
     const [state, dispatch] = useReducer(addItemReducer, InitialState)
     
     const handleChange = (e: FormChangeEvent) => {
          dispatch({ type: "Change_Input", payload: { name: e.target.name, value: e.target.value } })       
     }

     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          const url = "http://localhost:4000"
          const formData = new FormData();

          formData.append("name", state.name)
          formData.append("duration", state.duration)
          formData.append("description", state.description)
          formData.append("catagory", state.catagory)
          formData.append("price", state.price)
          if (image) {
               formData.append("image", image);
          }

          const response = await axios.post(`${url}/api/food/add`, formData)
          if (response.data.success) {
               dispatch({type: "Reset"})
               setImage(null)
               toast.success(response.data.message)
          }
          else {
               toast.error(response.data.message)
          }
     } 

     return (
          <div className={className}>
               <form className='my-10  md:flex justify-between' onSubmit={handleSubmit}>
                    <div className='w-50 text-center'>
                         <h2 className='font-medium'>Upload Image</h2>
                         <label htmlFor="image">
                              <img src={image ? URL.createObjectURL(image) : UploadImage} alt="Upload images here" />
                         </label>
                         <input
                              onChange={(e) => {
                                   if (e.target.files && e.target.files[0]) {
                                        setImage(e.target.files[0]);
                                   }
                              }}
                              type="file" id='image' hidden required />
                    </div>
                    <div>
                         <div>
                              <h2 className='font-medium'>Food Name</h2>
                              <input type="text" name='name' placeholder='type food name' required
                              className='my-2 border-2 bg-gray-hepta text-gray-tri py-1 px-2 rounded-xl focus:outline-none'
                              onChange={handleChange}/>
                         </div>
                         <div>
                              <h2 className='font-medium'>Food Duration</h2>
                              <input type="text" name='duration' placeholder='type here' required
                              className='my-2 border-2 bg-gray-hepta text-gray-tri py-1 px-2 rounded-xl focus:outline-none'
                              onChange={handleChange}/>
                         </div>
                         <div>
                              <h2 className='font-medium'>Food Description</h2>
                              <textarea name="description" placeholder='write here' rows={2} required
                              className='my-2 border-2 bg-gray-hepta text-gray-tri py-1 px-2 rounded-xl focus:outline-none'
                              onChange={handleChange}></textarea>
                         </div>

                    </div>
                    <div>
                         <div>
                              <h2 className='font-medium'>Food Catagory</h2>
                              <select onChange={handleChange}
                                   name="catagory" className="my-2 bg-gray-hepta py-2 px-2 rounded-xl border-2 border-gray-tri focus:outline-none">
                                   <option value="Main foods">Main foods</option>
                                   <option value="Street foods">Street foods</option>
                                   <option value="Drinks">Drinks</option>
                              </select>
                         </div>
                         <div>
                              <h2 className='font-medium'>Food Price</h2>
                              <input type="Number" name='price' placeholder='$0'
                              className='my-2 border-2 bg-gray-hepta text-gray-tri py-1 px-2 rounded-xl focus:outline-none'
                              onChange={handleChange}/>
                         </div>
                         <button type='submit'
                              className='bg-Crimson text-white w-50 md:w-full py-2 px-3 mt-10 font-medium rounded-2xl'
                         >Add item</button>
                    </div>
               </form>

          </div>
     )
}

export default add
