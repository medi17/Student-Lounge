import Home from "./pages/home"
import Menu from "./pages/menu"
import Contact from "./pages/contact"
import Cart from "./pages/cart"
import Login from "./pages/login"
import { createBrowserRouter } from 'react-router-dom'

const App = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/login',
    element: <Login />
  },  
])

export default App
