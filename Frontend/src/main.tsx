// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'


import './index.css'
import App from "./App"
import CartContextProvider from './context/CartContext'
import OrderContextProvider from './context/OrderContext'
import { UserContextProvider } from './context/UserContext'

const AppProviders: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <OrderContextProvider>
              {children}
        </OrderContextProvider>
      </CartContextProvider>
    </UserContextProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <AppProviders>
    <RouterProvider router = {App} />
  </AppProviders>, 
)
