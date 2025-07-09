import Home from "./pages/home"
import Delivery from "./pages/delivery"
import Contact from "./pages/contact"
import Cart from "./pages/cart"
import Login from "./pages/login"
import { createBrowserRouter } from 'react-router-dom'
import MyOrders from "./pages/myorders"
import Admin from './pages/admin'

const App = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/delivery',
    element: <Delivery />
  },
  {
    path: '/mobile',
    element: <MyOrders />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/myorders',
    element: <MyOrders />    
  },
  {
    path: '/admin',
    element: <Admin />
  },
])

export default App
