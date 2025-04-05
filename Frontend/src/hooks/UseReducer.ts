import { ActionType, StateType } from "../types/types"

export const IntialState:StateType = {
     food: []
}


const cartReducer = (state: StateType, action:ActionType) => {
     switch(action.type){
          case "Add":
               return { ...state, food: action.payload }
          case "Remove":
          case "Increase":
          case "Decrease":
          default:
               return state
     }
}
export default cartReducer