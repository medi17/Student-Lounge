import Header from "../components/shared/header"
import Footer from "../components/shared/footer"
import LoginCard from "../components/Log/loginCard"
import { ToastContainer } from 'react-toastify';
const about = () => {
  return (
    <div>
      <ToastContainer />
      <Header />
      <LoginCard />
      <Footer />
    </div>
  )
}

export default about
