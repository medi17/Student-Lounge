import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"

const MobileCard = () => {

     const navigator = useNavigate()

     
     return (
          <div className="flex-grow bg-white flex justify-center items-center m-5 py-5 px-7 rounded-3xl lg:mx-16">
               <div className="ease-up text-center sm:m-15">
                    <h1 className="text-[45px] sm:text-5xl font-bold my-4">Coming soon.</h1>
                    <p>The mobile version is currently in development.</p>
                    <div className="flex justify-center items-center my-8">                         
                         <button onClick={()=>navigator("/")} className="bg-Crimson text-white flex justify-center items-center gap-3 py-2 px-3 rounded-3xl cursor-pointer border-2 border-Crimson hover:bg-white hover:text-Crimson hover:font-medium">
                              <FontAwesomeIcon icon={faArrowLeft} className="text-lg self-end" />
                              <p>back to home page</p>
                         </button>                    
                    </div>
               </div>
          </div>
     )
}

export default MobileCard
