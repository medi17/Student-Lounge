
const form = () => {
     return (
          <div className="bg-white mt-5 p-5 rounded-3xl max-w-[500px] md:max-w-[300px] lg:max-w-[500px]">
               <h1 className="text-3xl font-medium">Get in Touch</h1>
               <p className="font-light text-sm my-2">You can reach us anytime</p>
               <form>
                    <div className="md:flex md:justify-center md:items-center md:gap-3">
                         <input className="bg-gray-hepta text-gray-tri py-2 px-4 w-full my-3 rounded-3xl focus:outline-none"
                              type="text"
                              placeholder="First name" />
                         <input className="bg-gray-hepta text-gray-tri py-2 px-4 w-full my-3 rounded-3xl focus:outline-none"
                              type="text"
                              placeholder="Last name" />
                    </div>
                    <input className="bg-gray-hepta text-gray-tri py-2 px-4 w-full my-3 rounded-3xl focus:outline-none"
                         type="text"
                         placeholder="Your email" />
                    <textarea className="bg-gray-hepta text-gray-tri py-2 px-4 w-full h-[120px] my-3 rounded-3xl focus:outline-none"
                         name="message"
                         placeholder="Your message" />
                    <button className="bg-Crimson text-white font-medium w-full p-2 rounded-3xl cursor-pointer border-2 border-Crimson hover:text-Crimson hover:bg-white"
                    >Submit</button>
               </form>
          </div>
     )
}

export default form
