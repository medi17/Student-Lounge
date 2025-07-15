export type AddItemType = {
     id?: string,
     image?:string,
     name: string,
     duration: string,
     description: string,
     price: string,
     catagory: string,
}
type addPayload = {
     name: string,
     value: string
}
export type AddStateType = {
     add: AddStateType[]
}

export type AddReducerAction = {
     type: string,
     payload?: addPayload
}

export type itemListType = {
     _id: string,
     name: string,
     duration: string,
     description: string,
     price: string,
     catagory: string,
     image: string,
}
