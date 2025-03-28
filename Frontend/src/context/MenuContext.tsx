import { createContext } from "react";
import { FoodItem } from "../types/types";


export const MenuContext = createContext<FoodItem[] | null>(null)

type Props = {
     children: React.ReactNode
     foodItems: FoodItem[];
     streetFoodItems: FoodItem[];
     drinkItems: FoodItem[];
}

const MenuContextProvider = (props: Props) => {
      const { foodItems, streetFoodItems, drinkItems } = props;
     return (
          <MenuContext.Provider value={[...foodItems, ...streetFoodItems, ...drinkItems]}>
               {props.children}
          </MenuContext.Provider>
     )
}

export default MenuContextProvider