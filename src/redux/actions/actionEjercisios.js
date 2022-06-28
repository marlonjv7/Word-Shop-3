import { typesEjercisios } from "../types/types"
import {  addDoc,collection, getDocs,query,where } from "firebase/firestore"
import { DB } from "../../firebase/firebaseConfig"

export const searchEjercisioASync=(nombre)=>{
    return async(dispatch)=>{
       const collectionAListar = collection(DB, "Compras")
        const q = query(collectionAListar,where("nombre", "==", nombre))
       const datosQ = await getDocs (q)
       
       
       const Ejercisio = []
       datosQ.forEach((EjercisiosBuscar => {
        Ejercisio.push(EjercisiosBuscar.data())
       }))
    dispatch(searchEjercisioSync(Ejercisio))
    } 
}




export const searchEjercisioSync=(Ejercisio)=>{
    return{
         type:typesEjercisios.search,
         payload:Ejercisio
    }

}






export const listaEjercisiosASync = () =>{
    return async (dispatch) =>{
       const collectionListar = await  getDocs(collection(DB,"Compras"))
       console.log(collectionListar)
       const Ejercisios = []
       collectionListar.forEach(lista =>{
        Ejercisios.push({
            ...lista.data()
        })
       })
       console.log(Ejercisios)
       dispatch(listaEjercisiosSync(Ejercisios))
    }
}


export const listaEjercisiosSync = (Ejercisio) =>{
    return{
        type: typesEjercisios.list,
        payload: Ejercisio
    }
}




export const addEjercisioASync =(Ejercisio) =>{
     return async (dispatch)=>{
        addDoc(collection(DB,"Compras"),Ejercisio)
        .then(resp => dispatch (addEjercisioSync(Ejercisio)))
        .catch(error => console.warn(error))
    }

}

export const addEjercisioSync = (Ejercisio) => {
    return{
        type: typesEjercisios.add,
        payload: Ejercisio
    }
}