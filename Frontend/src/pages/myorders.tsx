import Header from "../components/shared/header"
import Footer from "../components/shared/footer"
import Myorders from "../components/orders/myorders"

const myOrders = () => {
     return (
          <div className="flex flex-col min-h-screen">
               <Header />
               <Myorders/>
               <Footer />
          </div>
     )
}

export default myOrders

