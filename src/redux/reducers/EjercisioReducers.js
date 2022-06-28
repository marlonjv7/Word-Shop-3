import { typesEjercisios } from "../types/types"

const initialState={
    Ejercisio : []
}

export const EjercisioReducers =( state = initialState,action)=>{
     switch (action.type) {
        case typesEjercisios.add:
            return{
                Ejercisio:[action.payload]
            }
        case typesEjercisios.list:
            return{
                Ejercisio:[...action.payload]
            }
    
    
        default:
           return state
     }
}