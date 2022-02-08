import { createContext } from "react";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";

export const context = createContext();

export function AuthProvider ({children}) {

    const signUp = (auth , email , password) => {
        createUserWithEmailAndPassword(auth , email , password)
    }

    const logIn = (auth , email , password) => {
        signInWithEmailAndPassword(auth , email , password)
    }

    return(
        <context.Provider value={{signUp , logIn}}>
            {children}
        </context.Provider>
        
    )
}