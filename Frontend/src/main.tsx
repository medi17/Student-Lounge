// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'


import './index.css'
import App from "./App"
import CartContextProvider from './context/CartContext'
import OrderContextProvider from './context/OrderContext'

const AppProviders: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <CartContextProvider>
      <OrderContextProvider>
            {children}
      </OrderContextProvider>
    </CartContextProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <AppProviders>
    <RouterProvider router = {App} />
  </AppProviders>, 
)
