import { AddItemType, AddReducerAction } from "../types/admintypes"

export const InitialState = {
     id: "",
     image:"",
     name: "",
     duration: "",
     description: "",
     catagory:"Main foods",
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
          case "UPDATE":
               if (!action.payload) return state;
               return { ...action.payload, id: action.payload.id };
          case "Reset":
               return InitialState
          default:
               return state
     }
}