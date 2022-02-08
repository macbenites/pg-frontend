import { createContext } from "react";
import { 
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword,
    onAuthStateChanged, // funcion que devuelve la info del usuario cada vez que se logue y desloguea
    signOut } 
from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "../firebase";

export const context = createContext();

export function AuthProvider ({children}) {

    console.log("se renderiza de nuevo este componente") // hago este console.log para ver cuando se carga este componente
    //porque no entiendo bien cuando se hace el useEffect :D

    const [user , setUser ] = useState(); // guardamos en esta variable la data

    const signUp = (auth , email , password) => {
        createUserWithEmailAndPassword(auth , email , password)
    }

    const logIn = (auth , email , password) => {
        signInWithEmailAndPassword(auth , email , password)
    }

    const logOut = () => signOut(auth)

    useEffect (()=>{
        onAuthStateChanged(auth , function (value){
            setUser(value); // despues de que se logueo o deslogueo guardamos seteamos el estado
        })
    },[])

    return(
        <context.Provider value={{signUp , logIn , user , logOut }}>
            {children}
        </context.Provider>
        
    )
}