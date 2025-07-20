import { useContext } from "react"
import Add from './add'
import Orders from './orders'
import List from './list'
import { UserContext } from "../../context/UserContext"

const AdminMain = () => {

     // User context import
     const usercontext = useContext(UserContext)

     if (!usercontext) {
          throw new Error("UserContext is not provided");
     }
     const toggleState = usercontext.toggleState
     const setToggleState = usercontext.setToggleState

     const toggleTab = (index:number) => {
          setToggleState(index);
     }

     return (
          <div className='flex-grow m-5 py-7 px-7 bg-white shadow-sm rounded-[30px] z-50 lg:mx-16'>
               <h1 className='text-[50px] text-Crimson'>Welcome</h1>
               <div className='my-3'>
                    <div className='w-60 md:w-80 flex justify-between '>
                         <div className={ toggleState === 1 ? "px-4 rounded-xl cursor-pointer active-tabs" : "bg-gray-hexa px-2 md:px-4 rounded-xl font-medium border-2 border-gray-tetra cursor-pointer"}
                                   onClick={() => toggleTab(1)}>
                              Add items
                         </div>
                         <div className={ toggleState === 2 ? "px-4 rounded-xl cursor-pointer active-tabs" : "bg-gray-hexa px-2 md:px-4 rounded-xl font-medium border-2 border-gray-tetra cursor-pointer"}
                                   onClick={() => toggleTab(2)}>
                              Orders
                         </div>
                         <div className={ toggleState === 3 ? "px-4 rounded-xl cursor-pointer active-tabs" : "bg-gray-hexa px-2 md:px-4 rounded-xl font-medium border-2 border-gray-tetra cursor-pointer"}
                                   onClick={() => toggleTab(3)}>
                              List
                         </div>
                    </div>

                    <div>
                         <Add className={toggleState === 1 ? "active-content universe-tabs" : "universe-tabs"} />
                         <Orders className={toggleState === 2 ? "active-content universe-tabs" : "universe-tabs"}/>
                         <List className={toggleState === 3 ? "active-content universe-tabs" : "universe-tabs"}/>
                    </div>
               </div>
          </div>
     )
}

export default AdminMain
