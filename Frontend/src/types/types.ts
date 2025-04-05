
export type FoodItem = {
  id: string,
  name: string,
  duration: string,
  description: string,
  price: string,
  image: string,
  catagory: string,
}

export type FoodProps = {
  food: FoodItem
}

export type MenuContextType = {
  foodItems: FoodItem[],
  addToCart: (itemsId: string) => void,
  removeFromCart: (itemsId: string) => void,
  cartItems: Record<string, number>,
  setCartItems: React.Dispatch<React.SetStateAction<Record<string, number>>>,
}
export type StateType = {
  food: FoodItem [],
}
export type ActionType = {
  type: string,
  payload: FoodItem
}

export type CartContextType = {
  cart: StateType,
  dispatch: React.ActionDispatch<[action: ActionType]>
}