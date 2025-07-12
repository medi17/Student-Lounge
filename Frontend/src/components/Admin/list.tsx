import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { toast } from 'react-toastify'
import { itemListType } from "../../types/admintypes"
import { UserContext } from "../../context/UserContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

type Props = {
     className:string
}

const list = ({ className }: Props) => {
     
     const [list, setList] = useState<itemListType[]>([])

     const [loading, setLoading] = useState(true)

     // User context import
     const usecontext = useContext(UserContext)

     if (!usecontext) {
          throw new Error("UserContext is not provided");
     }
     const url = usecontext.url
     
     const fetchList = async () => {
          const response = await axios.get(`${url}/api/food/list`)

          setTimeout(() => {
               setLoading(false)
          }, 4000);

          if (response.data.success) {
               setList(response.data.data)
          }
          else {
               setLoading(true)
               toast.error("Error");  
          }
     }

     const removeFoodItem = async (foodId: string) => {
          const response = await axios.post(`${url}/api/food/remove/`, { id: foodId })
          await fetchList();
          if (response.data.success) {
               toast.success(response.data.message)
          } else {
               toast.error(response.data.message)
          }
          
     }

     useEffect(() => {
          fetchList();
     }, [])

     return (
          <div className={className}>
               <div className="rounded-[30px] mt-5 overflow-hidden">
                    {
                         loading ? (
                              <Stack spacing={1} >
                                   <Skeleton variant="rounded" height={80} />
                                   <Skeleton variant="rectangular" height={80} />
                                   <Skeleton variant="rectangular" height={80} />
                                   <Skeleton variant="rounded" height={80} />
                              </Stack>   
                         ) : (
                              <table className="w-full border-gray-tetra rounded-2xl shadow-2xl border-collapse">
                                   <thead className="round-t-4xl bg-red-100 text-xs sm:text-base">
                                        <tr>
                                             <th className="font-medium py-6">Image</th>
                                             <th className="font-medium py-6">Name</th>
                                             <th className="font-medium py-6">Catagory</th>
                                             <th className="font-medium py-6">Price</th>
                                             <th className="font-medium py-6">Action</th>
                                        </tr>
                                   </thead>
                                   <tbody className="[&_tr:nth-child(even)]:bg-[var(--color-gray-octa)]">
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
                                                       <td className="  text-center text-lg font-bold" >
                                                            <div className="flex justify-center items-center gap-8">
                                                                 <FontAwesomeIcon icon={faPenToSquare} className="text-green-500 cursor-pointer" />
                                                                 <p className="text-Crimson cursor-pointer"
                                                                      onClick={() => removeFoodItem(item._id)}
                                                                 >x</p>
                                                            </div>
                                                       </td>
                                                  </tr>
                                             )
                                        })}
                                   </tbody>
                              </table>                                     
                         )
                    }
               </div>
          </div>
     )
}

export default list
