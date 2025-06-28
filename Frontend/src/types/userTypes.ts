// User registration reducer types

export type RegistrationType = {
     name: string,
     email: string,
     password: string
}

type RegisterPayload = {
     name: string,
     value: string
}

export type RegisterReducerAction = {
     type: string,
     payload?: RegisterPayload
}

// User registration context types

export type UserContextType = {
     url: string,
     token: string, 
     setToken: React.Dispatch<React.SetStateAction<string>>
}

export type ChildrenType = {
     children: React.ReactNode
   }
