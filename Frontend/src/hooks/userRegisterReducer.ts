import { RegistrationType, RegisterReducerAction } from "../types/userTypes";

export const InitialState = {
     name: "",
     email: "",
     password:""
}

export const userRegisterReducer = (state:RegistrationType, action:RegisterReducerAction): RegistrationType => {
     switch (action.type) {
          case "Change_Input":
               if (!action.payload) return state;
               return {
                    ...state,
                    [action.payload.name]: action.payload.value
               }
          case "Reset":
               return InitialState
          default:
               return state
     }
}