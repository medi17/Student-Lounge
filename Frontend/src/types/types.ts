import { MouseEventHandler } from "react"

export type FoodItem = {
  id: string,
  name: string,
  duration: string,
  description: string,
  price: string,
  image: string,
}

export type FoodProps = {
  foods: FoodItem[]
}

export type MenuContextType = {
  foodItems: FoodItem[],
  streetFoodItems: FoodItem[],
  drinkItems: FoodItem[],
  addToCart: (itemsId: string) => void,
  removeFromCart: (itemsId: string) => void,
  cartItems: Record<string, number>,
  setCartItems: React.Dispatch<React.SetStateAction<Record<string, number>>>,
}