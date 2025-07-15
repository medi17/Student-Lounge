import ContactCatagories from "./contact_catagories"
import Form from "./form"


const ContactMessage = () => {
     return (
          <div className="m-5 py-3 px-7 rounded-3xl lg:mx-16 md:flex md:justify-between md:gap-10 lg:gap-20">
               <div className="pt-5">
                    <div>
                         <h1 id="p-1" className="from-left text-4xl font-medium">Contact Us</h1>
                         <p id="p-2" className="from-left my-4 font-light">Email, call or complete the form to reach us and give review</p>
                         <h3 id="p-3" className="from-left mb-4 font-light">sixkilolounge@gmail.com</h3>
                         <h3 id="p-4" className="from-left mb-4 font-light">+251-987-654-321</h3>
                    </div>
                    <div className="md:flex md:justify-items-start md:gap-5">
                         <ContactCatagories
                              title="Feedback and Suggestions"
                              passage = "We value your feedback and are countinuously working to improve our Lounge. Your review and feedback are crucial in shaping the future of our Lounge"
                         />
                         <ContactCatagories
                              title="Media inquiries"
                              passage="For media-related questions, please contact us at media@sixkilolounge.com" 
                         />
                    </div>
               </div>
               <Form/>
          </div>
     )
}

export default ContactMessage
