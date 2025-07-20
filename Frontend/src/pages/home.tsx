import { JSX} from "react"
import Header from "../components/shared/header"
import Hero from "../components/home/hero"
import Catagories from "../components/home/catagories/catagories"
import About from "../components/home/about"
import Footer from "../components/shared/footer"

const home = ():JSX.Element => {
     return (
          <div className="flex flex-col min-h-screen">
               <Header />
               <Hero />
               <Catagories />
               <About />
               <Footer />
          </div>
     )
}

export default home
