import Header from "../components/shared/header"
import CartCard from "../components/cart/cartCard"
import Footer from "../components/shared/footer"

const cart = () => {
     return (
          <div className="flex flex-col min-h-screen">
               <Header />
               <CartCard />
               <Footer />
          </div>
     )
}

export default cart
