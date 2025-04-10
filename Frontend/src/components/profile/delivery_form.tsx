// max-w-[500px] md:max-w-[300px] lg:max-w-[500px]


const delivery_form = () => {
     return (
          <div className="bg-white m-5 py-5 px-7 rounded-3xl lg:mx-16">
               <h1 className="text-3xl font-medium">Delivey Information</h1>
               <p className="font-light text-sm my-2">Fill the form so we can deliver to you.</p>
               <form>
                    <div className="flex justify-center items-center gap-3">
                         <input className="bg-gray-hepta py-2 px-4 w-full my-3 rounded-3xl focus:outline-none"
                              type="text"
                              placeholder="First name" />
                         <input className="bg-gray-hepta py-2 px-4 w-full my-3 rounded-3xl focus:outline-none"
                              type="text"
                              placeholder="Last name" />
                         <input className="bg-gray-hepta py-2 px-4 w-full my-3 rounded-3xl focus:outline-none"
                              type="text"
                              placeholder="Email address" />
                    </div>

                    
                    <div className="md:grid md:grid-cols-3 md:justify-center  md:place-items-center">
                         
                         <input className="bg-gray-hepta py-2 px-4 w-full my-3 rounded-3xl focus:outline-none"
                              name="tel"
                              placeholder="Phone number" />
                         <div>
                              <label className="pl-3 font-medium mr-5" htmlFor="fruits">Dorm block: </label>
                              <select name="fruits" id="fruits" className="bg-gray-hepta p-3 rounded-xl focus:outline-none" >
                                   <option value="MensA">Mens' - A</option>
                                   <option value="banana">Mens' - B</option>
                                   <option value="orange">Womens' - C</option>
                                   <option value="grape">Womens' - D</option>
                              </select>
                         </div>

                         <input className="bg-gray-hepta py-2 px-4 w-full my-3 rounded-3xl focus:outline-none"
                              type="text"
                              placeholder="Dorm number" />
                    </div>
                    <button className="bg-Crimson text-white font-medium w-[20%] p-2 mt-8 rounded-3xl cursor-pointer border-2 border-Crimson hover:text-Crimson hover:bg-white"
                         >Save</button>
               </form>
          </div>
     )
}

export default delivery_form
