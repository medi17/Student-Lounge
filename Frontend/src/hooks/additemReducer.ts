import { AddItemType, AddReducerAction } from "../types/admintypes"

export const InitialState = {
     name: "",
     duration: "",
     description: "",
     catagory:"",
     price: "",
}

export const addItemReducer = (state: AddItemType, action: AddReducerAction): AddItemType => {
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