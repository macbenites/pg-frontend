import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  //onAuthStateChanged, // funcion que devuelve la info del usuario cada vez que se logue y desloguea
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
  LOG_IN_WITH_FACEBOOK,
  GET_FIELDS
} from "./types";
import axios from "axios";

export const resetStateError = () => async (dispatch) =>
  dispatch({
    type: "RESET_STATE_ERROR",
  });

export const signUpWithMail = (email, password, callback) => {
  return async (dispatch) => {
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((obj) => {
          dispatch({
            payload: obj,
            type: SIGN_UP_WHIT_EMAIL_AND_PASSWORD,
          });
          callback();
        })
        .catch((error) => {
          dispatch({
            payload: error.code,
            type: "ERROR",
          });
          //   alert(error.code);
        });
    } catch (error) {
      dispatch({
        payload: error.code,
        type: "ERROR",
      });
    }
  };
};

export const logInWithMail = (email, password, callback) => {
  return async function (dispatch) {
      try {       
          signInWithEmailAndPassword(auth, email, password)
            .then((obj) => {
            dispatch({
              payload: obj,
              type: LOG_IN_WHIT_EMAIL,
            });
            callback();
          })
          .catch((error) => {
            dispatch({
                payload: error.code,
                type: "ERROR",
              });
          })
      } catch (error) {
        dispatch({
            payload: error.code,
            type: "ERROR",
          });
      }
  };
};

export const logOut = () => {
  return function (dispatch) {
    signOut(auth).then(() => {
      dispatch({
        payload: {},
        type: LOG_OUT,
      });
    });
  };
};

export const logInWithGoogle = () => {
  return function (dispatch) {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((obj) => {
        dispatch({
          payload: obj,
          type: LOG_IN_WITH_GOOGLE,
        });
      })
      .catch((e) => console.log(e));
  };
};

export const logInWithFacebook = () => {
  return function (dispatch) {
    signInWithPopup(auth, new FacebookAuthProvider())
      .then((obj) => {
        dispatch({
          payload: obj,
          type: LOG_IN_WITH_FACEBOOK,
        });
      })
      .catch((e) => console.log(e));
  };
};

export const resetPassword = (email) => {
  return function (dispatch) {
    sendPasswordResetEmail(auth, email);
  };
};

export function postMatch(payload) {
  return async function (distpach) {
    const newMatch = await axios.post(
      "https://futbolapp-henry.herokuapp.com/match",
      payload
    );
    return newMatch;
  };
}


export function postMatch(payload){
    return async function(dispatch){
        const newMatch = await axios.post("https://futbolapp-henry.herokuapp.com/match", payload);
        console.log(newMatch)
        return newMatch;
    }
}
