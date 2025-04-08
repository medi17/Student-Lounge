import { ReducerAction, CartStateType, CartItemType } from "../types/types"

export const InitialState: CartStateType = {
  cart: []
}


const cartReducer = (state: CartStateType, action:ReducerAction):CartStateType => {
     switch(action.type){
          case "Add":
               return {
                    cart:[...state.cart, action.payload] as CartItemType[]
               }
          case "Remove":
               return {
                    cart: state.cart.filter((foodItem: CartItemType) => 
                         foodItem.id !== action.payload.id
                    )
               }
          case "Increase":
               return {
                    ...state,
                    cart: state.cart.map((foodItem: CartItemType) => {
                         if (foodItem.id === action.payload.id) {
                              return {
                                   ...foodItem, quantity: foodItem.quantity + 1
                              }
                         }
                         return foodItem
                    })
               }
          case "Decrease":
               return {
                    ...state,
                    cart: state.cart.map((foodItem: CartItemType) => {
                         if (foodItem.id === action.payload.id) {
                              return {
                                   ...foodItem, quantity: foodItem.quantity - 1
                              }
                         }
                         return foodItem
                    })
               }
          default:
               return state
     }
}
export default cartReducer