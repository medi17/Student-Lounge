import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import axios from "axios"
import { orderTypes } from "../../types/userTypes"
import OrdersCard from "../Admin/ordersCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons"
import { toast } from "react-toastify"
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


type Props = {
     className:string
}

const orders = ({ className }: Props) => {
     
     const [orders, setOrders] = useState<orderTypes[]>([])

     const [loading, setLoading] = useState(true)

     // User context import
     const usecontext = useContext(UserContext)

     if (!usecontext) {
          throw new Error("UserContext is not provided");
     }
     const url = usecontext.url


     const fetchOrders = async () => {
          const response = await axios.get(`${url}/api/order/usersorders`)

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
          fetchOrders(); 
     }, [])


     return (
          <div className={className}> 
               <div className={orders.length === 0 ? "w-full bg-white shadow-2xl rounded-[30px] py-10 px-6 my-5" :  "w-full bg-white shadow-2xl rounded-[30px] py-3 px-1 sm:px-6 sm:py-6 my-6"}>
                    <div className="flex flex-col gap-5">
                         {loading ? (
                              <Stack spacing={1} >
                                   <Skeleton variant="rounded" sx={{ borderRadius: '32px' }} height={120} />
                                   <Skeleton variant="rounded" sx={{ borderRadius: '32px' }} height={120} />
                                   <Skeleton variant="rounded" sx={{ borderRadius: '32px' }} height={120} />
                              </Stack>
                         ) : (
                              orders.length === 0 ? (
                                   <div>
                                        <div className="my-18 text-3xl flex items-center font-light md:text-3xl">Seems like there are no orders
                                             <FontAwesomeIcon icon={faFaceSadTear} className="text-red-600 text-4xl pl-2" />
                                        </div>
                                   </div>
                              ) : (
                                   orders.map((order: orderTypes) => (
                                        <OrdersCard order={order} fetchOrders={fetchOrders} key={order._id}></OrdersCard>
                                   ))
                              ))
                         }
                    </div>                    
               </div>
          </div>
     )
}

export default orders
