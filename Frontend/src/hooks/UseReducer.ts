import { ReducerAction, CartStateType } from "../types/foodTypes"

export const InitialState: CartStateType = {}


const cartReducer = (state: CartStateType, action:ReducerAction):CartStateType => {
     switch(action.type){
          case "Add":
               return {
                    ...state,
                    [action.payload.id]: 1
               }
          case "Remove":
               const newState = { ...state }; 
               delete newState[action.payload.id];
               return newState;
          case "Increase":
               return {
                    ...state,
                    [action.payload.id]: state[action.payload.id] + 1
               }
          case "Decrease":
               return {
                    ...state,
                    [action.payload.id]: state[action.payload.id] - 1
               }
          case "SET_CART":
               if (action.payload === null) {
                    return InitialState
               }
               return action.payload
          case "Reset":
               return InitialState
          default:
               return state
     }
}
export default cartReducer