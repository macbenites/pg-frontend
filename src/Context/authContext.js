import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const context = createContext();

export function AuthProvider ({children}) {

    const login = (auth , email , password) => {
        createUserWithEmailAndPassword(auth , email , password)
    }

    return(
        <context.Provider value={{login}}>
            {children}
        </context.Provider>
        
    )
}