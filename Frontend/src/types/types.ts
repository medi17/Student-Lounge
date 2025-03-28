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