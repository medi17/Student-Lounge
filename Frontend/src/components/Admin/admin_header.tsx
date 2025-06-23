import { JSX } from "react"

const AdminHeader = ():JSX.Element => {

     return (
          <div className="flex justify-between items-center sticky top-0 m-5 py-3 px-7 bg-white shadow-sm rounded-[50px] z-50 lg:mx-16">
               <div className="flex gap-1 items-baseline">
                    <h1 className="text-[24px] font-semibold text-Crimson">LOUNGE</h1>
                    <h5 className="font-medium text-xs md:text-sm text-gray-tri">admin panal</h5>
               </div>
               <div>
                    <button className="cursor-pointer bg-Crimson text-white text-[16px] md:text-[20px] font-medium py-1 px-3 border-2 border-Crimson rounded-3xl hover:text-Crimson hover:bg-white">
                         Logout
                    </button>
               </div>
          </div>
     )
}

export default AdminHeader

