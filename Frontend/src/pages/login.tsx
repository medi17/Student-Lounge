import Header from "../components/shared/header"
import Footer from "../components/shared/footer"
import LoginCard from "../components/Log/loginCard"
import { ToastContainer } from 'react-toastify';
const about = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      <Header />
      <LoginCard />
      <Footer />
    </div>
  )
}

export default about
