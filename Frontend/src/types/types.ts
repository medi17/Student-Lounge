
export type FoodItem = {
  id: number,
  name: string,
  duration: string,
  description: string,
  price: string,
  image: string,
  catagory: string,
  quantity:number,
}

export type FoodProps = {
  food: FoodItem,
}

export type CartContextType = {
  cart: CartStateType,
  dispatch: React.ActionDispatch<[action: ReducerAction]>
  foodItems: FoodItem[]
}

export type CartItemType = {
  id: number,
  name: string,
  duration: string,
  description: string,
  price: string,
  image: string,
  catagory: string,
  quantity:number,
}

export type CartStateType = {
  cart: CartItemType[]
}

const Reducer_action_type = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
}

export type ReducerActionType = typeof Reducer_action_type

export type ReducerAction = {
  type: string,
  payload: CartItemType 
}
