import { useContext, useState } from 'react'
import UploadImage from '../../assets/admin_images/upload_monochromatic.jpg'
import axios from "axios"
import { toast } from 'react-toastify'
import { UserContext } from '../../context/UserContext'

type Props = {
     className:string
}
type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type FormChangeEvent = React.ChangeEvent<FormElement>;


const add = ({ className }: Props) => {

     const [image, setImage] = useState<File | null>(null)

     // User context import
     const usecontext = useContext(UserContext)

     if (!usecontext) {
          throw new Error("UserContext is not provided");
     }
     const updating = usecontext.updating
     const setUpdating = usecontext.setUpdating
     let url = usecontext.url
     const state = usecontext.state
     const dispatch = usecontext.dispatch

     const handleChange = (e: FormChangeEvent) => {
          dispatch({ type: "Change_Input", payload: { name: e.target.name, value: e.target.value } })       
     }

     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          if (updating) {
               url += "/api/food/update"     
          } else {
               url += "/api/food/add"
          }

          const formData = new FormData();

          formData.append("name", state.name)
          formData.append("duration", state.duration)
          formData.append("description", state.description)
          formData.append("catagory", state.catagory)
          formData.append("price", state.price)
          if (state.id) {
               formData.append("id", state.id)
          }
          if (image) {
               formData.append("image", image);
          }

          const response = await axios.post(url, formData)

          if (response.data.success) {
               setUpdating(false)
               dispatch({type:"Reset"})
               setImage(null)
               toast.success(response.data.message)
               console.log(state);
               
          }
          else {
               toast.error(response.data.message)
               console.log(response.data.message);  
          }
     } 

     return (
          <div className={className}>
               <form className='my-10  md:flex justify-between' onSubmit={handleSubmit}>
                    <div className='w-50 md:text-center'>
                         <h2 className='font-medium'>Upload Image</h2>
                         <label htmlFor="image">
                              <img src={ image  ? URL.createObjectURL(image)
                                             : updating ? `${url}/images/${state.image}` : UploadImage
                                   }
                                   alt="Upload images here"
                                   className="cursor-pointer border-2 border-gray-tetra my-2"
                              />
                         </label>
                         <input
                              onChange={(e) => {
                                   if (e.target.files && e.target.files[0]) {
                                        setImage(e.target.files[0]);
                                   }
                              }}
                              type="file" id='image' hidden />
                    </div>
                    <div>
                         <div>
                              <h2 className='font-medium'>Food Name</h2>
                              <input type="text" name='name' value = {state.name} placeholder='type food name' required
                              className='my-2 border-2 bg-gray-hepta text-gray-tri py-1 px-2 rounded-xl focus:outline-none'
                              onChange={handleChange}/>
                         </div>
                         <div>
                              <h2 className='font-medium'>Food Duration</h2>
                              <input type="text" name='duration' value = {state.duration} placeholder='type here' required
                              className='my-2 border-2 bg-gray-hepta text-gray-tri py-1 px-2 rounded-xl focus:outline-none'
                              onChange={handleChange}/>
                         </div>
                         <div>
                              <h2 className='font-medium'>Food Description</h2>
                              <textarea name="description" value = {state.description} placeholder='write here' rows={2} required
                              className='my-2 border-2 bg-gray-hepta text-gray-tri py-1 px-2 rounded-xl focus:outline-none'
                              onChange={handleChange}></textarea>
                         </div>

                    </div>
                    <div>
                         <div>
                              <h2 className='font-medium'>Food Catagory</h2>
                              <select onChange={handleChange}
                                   name="catagory" value = {state.catagory} className="my-2 bg-gray-hepta py-2 px-2 rounded-xl border-2 border-gray-tri focus:outline-none">
                                   <option value="Main foods">Main foods</option>
                                   <option value="Street foods">Street foods</option>
                                   <option value="Drinks">Drinks</option>
                              </select>
                         </div>
                         <div>
                              <h2 className='font-medium'>Food Price</h2>
                              <input type="Number" name='price' value = {state.price} placeholder='$0'
                              className='my-2 border-2 bg-gray-hepta text-gray-tri py-1 px-2 rounded-xl focus:outline-none'
                              onChange={handleChange}/>
                         </div>
                         <button type='submit'
                              className='bg-Crimson text-white w-50 md:w-full py-2 px-3 mt-10 font-medium rounded-2xl cursor-pointer border-2 border-Crimson hover:text-Crimson hover:bg-white'
                         >{updating? "Update item": "Add item"}</button>
                    </div>
               </form>

          </div>
     )
}

export default add
