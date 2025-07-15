import { createContext, useReducer, useState } from "react";
import { UserContextType, ChildrenType } from "../types/userTypes";
import { addItemReducer, InitialState } from "../hooks/additemReducer";

export const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({ children }:ChildrenType) => {

     const url = "http://localhost:4000"
     const [token, setToken] = useState("")
     const [toggleState, setToggleState] = useState(1)
     const [updating, setUpdating] = useState<boolean>(false)
     const [state, dispatch] = useReducer(addItemReducer, InitialState)
     
     return <UserContext.Provider value={{
          url,
          token,
          setToken,
          toggleState,
          setToggleState,
          updating,
          setUpdating,
          state,
          dispatch
     }}>
          {children}
     </UserContext.Provider>    
}