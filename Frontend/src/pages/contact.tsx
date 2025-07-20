import Header from "../components/shared/header"
import Footer from "../components/shared/footer"
import ContactMessage from "../components/contact/Contact_message"
import { ToastContainer } from 'react-toastify';
const contact = () => {
     return (
          <div className="flex flex-col min-h-screen">
               <ToastContainer/>
               <Header />
               <ContactMessage/>
               <Footer />
          </div>
     )
}

export default contact
