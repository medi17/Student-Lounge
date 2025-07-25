import Header from "../components/shared/header"
import Footer from "../components/shared/footer"
import DeliveryForm from "../components/deliverypage/delivery_form"
import { ToastContainer } from 'react-toastify';

const delivery = () => {
     return (
          <div className="flex flex-col min-h-screen">
               <ToastContainer/>
               <Header />
               <DeliveryForm/>
               <Footer />
          </div>
     )
}

export default delivery
