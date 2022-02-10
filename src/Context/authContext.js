import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged, // funcion que devuelve la info del usuario cada vez que se logue y desloguea
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "../firebase";

export const context = createContext();

export function AuthProvider({ children }) {
  console.log("se renderiza de nuevo este componente"); // hago este console.log para ver cuando se carga este componente
  //porque no entiendo bien cuando se hace el useEffect :D

  const [user, setUser] = useState(); // guardamos en esta variable la data

  const signUp = (auth, email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => signOut(auth);

  const logInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logInWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        console.log(result)
        // The signed-in user info.
        //const user = result.user;
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        //const credential = FacebookAuthProvider.credentialFromResult(result);
        //const accessToken = credential.accessToken;
        // ...
      })
      .catch((error) => {
        console.log(error)
        // Handle Errors here.
        //const errorCode = error.code;
        //const errorMessage = error.message;
        // The email of the user's account used.
        //const email = error.email;
        // The AuthCredential type that was used.
        //const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    onAuthStateChanged(auth, function (value) {
      setUser(value); // despues de que se logueo o deslogueo guardamos seteamos el estado
    });
  }, []);

  return (
    <context.Provider
      value={{
        signUp,
        logIn,
        user,
        logOut,
        logInWithGoogle,
        logInWithFacebook,
        resetPassword,
      }}
    >
      {children}
    </context.Provider>
  );
}
