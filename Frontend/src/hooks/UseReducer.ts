import { ReducerAction, CartStateType, CartItemType } from "../types/types"

export const InitialState: CartStateType = {
  cart: []
}


const cartReducer = (state: CartStateType, action:ReducerAction):CartStateType => {
     switch(action.type){
          case "Add":
               return {
                    ...state, 
                    cart: [...state.cart, action.payload] as CartItemType[]
               }
          case "Remove":
               return {
                    ...state,
                    cart: state.cart.filter((food: CartItemType) => food.id !== action.payload?.id)
               }
          case "Increase":
               return {
                    ...state,
                    cart: state.cart.map((food: CartItemType) => {
                         if (action.payload && food.id === action.payload.id) {
                              return { ...food, quantity: food.quantity + 1 }
                         }
                         return food
                    })
               }
          case "Decrease":
               return {
                    ...state,
                    cart: state.cart.map((food: CartItemType) => {
                         if (action.payload && food.id === action.payload.id) {
                              return { ...food, quantity: food.quantity - 1 }
                         }
                         return food
                    })
               }
          default:
               return state
     }
}
export default cartReducer