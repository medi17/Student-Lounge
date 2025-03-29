import Tibs from '../../assets/Tibs.svg'
const login = () => {
     return (
          <div className="bg-white px-6 py-12 mx-6 rounded-[30px] md:mx-16 md:px-16">
               <div>
                    <img src={Tibs} alt="" />
               </div>
               <h1 className="text-center text-5xl font-medium py-5">Log in</h1>
               <div className="flex flex-col gap-4">
                    <input className="bg-gray-octa py-2 px-4 rounded-3xl focus:outline-none"
                         type="email"
                         placeholder="Enter your email"
                    />
                    <input className="bg-gray-octa py-2 px-4 rounded-3xl focus:outline-none"
                         type="password"
                         placeholder="Enter your password"
                    />
                    <button className="bg-Crimson text-white font-medium py-2 px-4 rounded-3xl cursor-pointer hover:bg-red-500"
                    >
                         Log in</button>
               </div>
               <p className="text-center py-2 text-sm">Do not have an account?
                    <span className="text-Crimson underline hover:no-underline cursor-pointer"> Sign up</span>
               </p>
          </div>
     )
}

export default login
