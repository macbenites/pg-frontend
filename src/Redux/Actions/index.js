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
import { auth } from "../../firebase";
import {
    SIGN_UP_WHIT_EMAIL_AND_PASSWORD,
    LOG_IN_WHIT_EMAIL,
    LOG_OUT,
    LOG_IN_WITH_GOOGLE,
    LOG_IN_WITH_FACEBOOK} from "./types"

export const signUpWithMail = (email, password) => {
    return function (dispatch) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(obj => {
                dispatch({
                    payload : obj,
                    type : SIGN_UP_WHIT_EMAIL_AND_PASSWORD
                })
            })
    }
  };

export const logInWithMail = (email,password) => {
    return function (dispatch) {
        signInWithEmailAndPassword(auth , email, password)
            .then (obj => {
                dispatch ({
                    payload : obj,
                    type : LOG_IN_WHIT_EMAIL
                })
            })
    }
}

export const logOut = () => {
    return function(dispatch){
        signOut(auth)
        .then(()=> {
            dispatch({
                payload : {},
                type : LOG_OUT
            })
        })
    }
}

export const logInWithGoogle = () => {
    return function (dispatch){
        signInWithPopup(auth, new GoogleAuthProvider())
        .then(obj=>{
            dispatch({
                payload : obj,
                type : LOG_IN_WITH_GOOGLE
            })
        })
        .catch(e => console.log(e))
    }
}

export const logInWithFacebook = () => {
    return function (dispatch){
        signInWithPopup(auth, new FacebookAuthProvider())
        .then(obj=>{
            dispatch({
                payload : obj,
                type : LOG_IN_WITH_FACEBOOK
            })
        })
        .catch(e => console.log(e))
    }
}

export const resetPassword = (email) => {
    return function (dispatch){
        sendPasswordResetEmail(auth ,email)
    }
}