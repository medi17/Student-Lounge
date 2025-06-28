import { createContext, useState } from "react";
import { UserContextType, ChildrenType } from "../types/userTypes";

export const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({ children }:ChildrenType) => {

     const url = "http://localhost:4000"
     const [token, setToken] = useState("")

     return <UserContext.Provider value={{url, token, setToken}}>
          {children}
     </UserContext.Provider>    
}