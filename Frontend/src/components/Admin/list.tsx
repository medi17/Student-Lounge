import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from 'react-toastify'
import { itemListType } from "../../types/admintypes"
import { data } from "react-router-dom"

type Props = {
     className:string
}

const list = ({ className }: Props) => {
     
     const [list, setList] = useState<itemListType[]| []>([])

     const url = "http://localhost:4000"
     const fetchList = async () => {
          const response = await axios.get(`${url}/api/food/list`)

          if (response.data.success) {
               setList(response.data.data)
          }
          else {
               toast.error("Error");  
          }
     }

     const removeFoodItem = async (foodId: string) => {
          const response = await axios.post(`${url}/api/food/remove/`, { id: foodId })
          await fetchList();
          if (response.data.success) {
               toast.success(response.data.message)
          } else {
               toast.error("Error")
          }
          
     }

     useEffect(() => {
          fetchList();   
     }, [])

     return (
          <div className={className}>
               <table className="mt-5 w-full border-2 border-gray-tetra rounded-3xl bg-gray-hepta">
                    <thead>
                         <tr>
                              <th className="font-medium">Image</th>
                              <th className="font-medium">Name</th>
                              <th className="font-medium">Catagory</th>
                              <th className="font-medium">Price</th>
                              <th className="font-medium">Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {list.map((item:itemListType, index:number) => {
                              return (
                                   <tr key={index}>
                                        <td>
                                             <img src={`${url}/images/` + item.image} alt="item image" />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.catagory}</td>
                                        <td>{item.price}</td>
                                        <td className="cursor-pointer"
                                             onClick={() => removeFoodItem(item._id)}
                                        >Delete</td>
                                   </tr>
                              )
                         })}
                    </tbody>
               </table>    
          </div>
     )
}

export default list
