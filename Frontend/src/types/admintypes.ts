export type AddItemType = {
     id?: string,
     image?:string,
     name: string,
     duration: string,
     description: string,
     price: string,
     catagory: string,
}
export type ChangeInput = {
  type: "Change_Input";
  payload: {
     name: string,
     value: string
};
};

export type Reset = {
  type: "Reset";
  payload?: undefined;
};

export type UPDATE = {
  type: "UPDATE";
  payload: AddItemType;
};

export type AddStateType = {
     add: AddStateType[]
}

export type AddReducerAction = ChangeInput | Reset | UPDATE

export type itemListType = {
     _id: string,
     name: string,
     duration: string,
     description: string,
     price: string,
     catagory: string,
     image: string,
}
