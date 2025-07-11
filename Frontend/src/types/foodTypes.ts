// // General Context types

export type ChildrenType = {
  children: React.ReactNode
}

// // CartContext types

export type FoodItem = {
  _id: string,
  name: string,
  duration: string,
  description: string,
  price: string,
  image: string,
  catagory: string,
  quantity?:number,
}

export type FoodProps = {
  food: FoodItem,
}

export type CartContextType = {
  cart: CartStateType,
  dispatch: React.ActionDispatch<[action: ReducerAction]>
  foodItems: FoodItem[]
}

export type CartType = {
  id: string
}

export type CartStateType = {
  [key: string]: number;
}

export type AddAction = {
  type: "Add";
  payload: CartType;
};

export type RemoveAction = {
  type: "Remove";
  payload: CartType;
};

export type IncreaseAction = {
  type: "Increase";
  payload: CartType;
};

export type DecreaseAction = {
  type: "Decrease";
  payload: CartType;
};

export type SetCartAction = {
  type: "SET_CART";
  payload: CartStateType | null;
};

export type ResetAction = {
  type: "Reset";
  payload?: undefined; 
};


export type ReducerAction = AddAction | RemoveAction | IncreaseAction | DecreaseAction | SetCartAction | ResetAction;

// // Order Context types

export type OrderContextType ={
  isChecked: string, 
  setIsChecked: React.Dispatch<React.SetStateAction<string>>,
  foodPriceCalculator:()=>number,
  totalFee: number
}
