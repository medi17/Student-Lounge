import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from 'react-toastify'
import { itemListType } from "../../types/admintypes"

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
               <div className="rounded-[30px] overflow-hidden">
                    <table className="mt-5 w-full border-gray-tetra rounded-2xl shadow-2xl border-collapse">
                         <thead className="round-t-4xl bg-gray-hexa text-xs sm:text-base">
                              <tr>
                                   <th className="font-medium py-6">Image</th>
                                   <th className="font-medium py-6">Name</th>
                                   <th className="font-medium py-6">Catagory</th>
                                   <th className="font-medium py-6">Price</th>
                                   <th className="font-medium py-6">Action</th>
                              </tr>
                         </thead>
                         <tbody className="[&_tr:nth-child(even)]:bg-[var(--color-gray-penta)]">
                              {list.map((item:itemListType, index:number) => {
                                   return (
                                        <tr key={index} className="">
                                             <td className="py-1 flex justify-center">
                                                  <div className="w-10 h-10 md:w-20 md:h-18">
                                                       <img src={`${url}/images/` + item.image} alt="item image"
                                                       className="w-full h-full" 
                                                       />
                                                  </div>
                                             </td>
                                             <td className="text-center">{item.name}</td>
                                             <td className="text-center">{item.catagory}</td>
                                             <td className="text-center">{item.price}</td>
                                             <td className="cursor-pointer text-center text-Crimson text-lg font-bold"
                                                  onClick={() => removeFoodItem(item._id)}
                                             >x</td>
                                        </tr>
                                   )
                              })}
                         </tbody>
                    </table>    
               </div>
          </div>
     )
}

export default list
