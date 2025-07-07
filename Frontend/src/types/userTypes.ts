// User registration reducer types

export type RegistrationType = {
     fullName: string,
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

// Delivery Types

export type deliverInfoType = {
     firstName: string,
     lastName: string,
     email: string,
     phoneNumber: string,
     dormBlock: string,
     dormNumber:string
}

type deliveryInfoPayload = {
     name: string,
     value: string
}

export type deliveryReducerAction = {
     type: string,
     payload?: deliveryInfoPayload
}