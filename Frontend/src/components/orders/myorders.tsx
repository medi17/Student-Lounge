import { useContext, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons"
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { UserContext } from "../../context/UserContext"
import OrderCard from "../orders/orderCard"
import { orderTypes } from "../../types/userTypes"
import { toast } from "react-toastify"
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const myorders = () => {
     
     const [orders, setOrders] = useState<orderTypes[]>([])
     const navigator = useNavigate()

     const [loading, setLoading] = useState(true)

     // User context import
     const usecontext = useContext(UserContext)

     if (!usecontext) {
          throw new Error("UserContext is not provided");
     }
     const token = usecontext.token
     const url = usecontext.url


     const fetchOrders = async () => {
          const response = await axios.get(`${url}/api/order/myorders`, { headers: { token } })

          setTimeout(() => {
               setLoading(false)
          }, 4000);

          if (response.data.success) {
               setOrders(response.data.data)
          }
          else {
               setLoading(true)
               toast.error("Error");  
          }
     }

     useEffect(() => {
          if (token) {
               fetchOrders();
          }
     },[token])

     return (
          <div className={orders.length === 0 ? "bg-white shadow-2xl rounded-[30px] py-10 px-6 mx-5 md:px-7 lg:mx-16 " :  "bg-white shadow-2xl rounded-[30px] py-5 px-6 mx-5 min-w-[260px] md:px-7 md:min-w-[312px] lg:mx-16"}>
               <h1 className="text-4xl font-medium">My Orders</h1>
               <div className="mt-7 flex flex-col gap-5 mb-5">
               {loading ? (
                         <Stack spacing={1} >
                              <Skeleton variant="rounded" sx={{ borderRadius: '32px' }} height={80} />
                              <Skeleton variant="rounded" sx={{ borderRadius: '32px' }} height={80} />
                              <Skeleton variant="rounded" sx={{ borderRadius: '32px' }} height={80} />
                              <Skeleton variant="rounded" sx={{ borderRadius: '32px' }} height={80} />
                         </Stack>
                    ) : ( orders.length === 0 ? (
                         <div>
                              <div className="my-18 text-3xl flex items-center font-light md:text-3xl">Seems like there are no orders here 
                                   <FontAwesomeIcon icon={faFaceSadTear} className="text-red-600 text-4xl pl-2" />
                              </div>
                              <button onClick={()=>navigator("/")} className="bg-Crimson text-white py-2 px-3 flex justify-center items-center gap-2 rounded-3xl cursor-pointer border-2 border-Crimson hover:bg-white hover:text-Crimson hover:font-medium">
                                   <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
                                   back to ordering page
                              </button>
                         </div>
                         ) : (
                              orders.map((order:orderTypes) => (
                                        <OrderCard order={order} fetchOrders={fetchOrders} key={order._id}></OrderCard>
                                   ))                                   
                              )
                         )}
               </div>
          </div>
     )
}

export default myorders
