import { deliverInfoType, deliveryReducerAction } from "../types/userTypes"



export const InitialState = {
     firstName: "",
     lastName: "",
     email: "",
     phoneNumber: "",
     dormBlock:"Men's - A",
     dormNumber:""
}

export const deliveryReducer = (state:deliverInfoType, action:deliveryReducerAction):deliverInfoType => {
     switch (action.type) {
          case "Change_Input":
               if (!action.payload) return state;
               return {
                    ...state,
                    [action.payload.name]: action.payload.value
               }
          case "Reset":
               return InitialState
          default:
               return state;
     }
}