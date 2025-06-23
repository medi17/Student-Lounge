import AdminMain from '../components/Admin/admin_main'
import AdminHeader from '../components/Admin/admin_header'
import { ToastContainer } from 'react-toastify';

const admin = () => {
     return (
          <div>
               <ToastContainer/>
               <AdminHeader />
               <AdminMain />
          </div>
     )
}

export default admin
