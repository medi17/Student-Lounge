import { contactForm, contactReducerAction } from "../types/contactUsTypes";


export const InitialState = {
     firstName: "",
     lastName: "",
     email: "",
     message: "",     
}

const contactUsReducer = (state: contactForm, action: contactReducerAction):contactForm     => {
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

export default contactUsReducer