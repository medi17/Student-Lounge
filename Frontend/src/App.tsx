import Home from "./pages/home"
import Profile from "./pages/profile"
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
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/profile',
    element: <Profile />
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
