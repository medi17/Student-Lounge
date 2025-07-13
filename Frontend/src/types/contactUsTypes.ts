
export type contactForm = {
     firstName: string,
     lastName: string,
     email: string,
     message: string, 
}
type contactPayload = {
     name: string,
     value: string
}

export type contactReducerAction = {
     type: string,
     payload?: contactPayload
}
