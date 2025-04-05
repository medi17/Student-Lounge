// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import MenuContextProvider from './context/MenuContext'

import './index.css'
import App from "./App"
import CartContextProvider from './context/CartContext'

const AppProviders: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <CartContextProvider>
      <MenuContextProvider>
        {children}
      </MenuContextProvider>
    </CartContextProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <AppProviders>
    <RouterProvider router = {App} />
  </AppProviders>, 
)
