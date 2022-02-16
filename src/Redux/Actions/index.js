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
  LOG_IN_WITH_FACEBOOK,
  GET_FIELDS,
  GET_MATCHES,
  JOIN_MATCH,
  GET_DETAILS_USER,
  GET_USERS,
} from "./types";
import axios from "axios";

export const resetStateError = () => async (dispatch) =>
  dispatch({
    type: "RESET_STATE_ERROR",
  });

export const signUpWithMail = (email, password, data, callback) => {
  return async (dispatch) => {
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((obj) => {
          return {
            ...obj.user,
            username: data.username,
            name: data.name,
            barrio: data.neighborhood,
            posicion: data.position,
          };
        })
        .then((obj) => {
          fetch("https://futbolapp-henry.herokuapp.com/register", {
            method: "POST",
            body: JSON.stringify({
              name: obj.name,
              user_name: obj.username,
              neighborhood: obj.barrio,
              email: obj.email,
              password: "123123",
            }),
            headers: {
              "Content-type": "application/json",
            },
          });
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
        });
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
        console.log(obj)
        fetch("https://futbolapp-henry.herokuapp.com/register" , {
            method : "POST",
            body : JSON.stringify({
              user_name : obj.user.displayName,
              email : obj.user.email,
              password : "123123"
            }),
            headers : {
              "Content-type" : "application/json"
            }
        })
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
        console.log(obj)
        fetch("https://futbolapp-henry.herokuapp.com/register" , {
            method : "POST",
            body : JSON.stringify({
              user_name : obj.user.displayName,
              email : obj.user.email,
              password : "123123"
            }),
            headers : {
              "Content-type" : "application/json"
            }
        })
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
  return async function (dispatch) {
    const newMatch = await axios.post(
      "https://futbolapp-henry.herokuapp.com/match",
      payload
    );
    return newMatch;
  };
}

export function getFields() {
  return function (dispatch) {
    fetch("https://futbolapp-henry.herokuapp.com/sportcenters")
      .then((obj) => obj.json())
      .then((obj) =>
        dispatch({
          payload: obj,
          type: GET_FIELDS,
        })
      );
  };
}

export function getMatches() {
  return async function (dispatch) {
    try {
      const getGames = await axios.get(
        "https://futbolapp-henry.herokuapp.com/matches"
      );
      return dispatch({
        type: GET_MATCHES,
        payload: getGames.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function joinMatch(id) {
  return async function (dispatch) {
    try {
      const joinGame = await axios.put(
        "https://futbolapp-henry.herokuapp.com/matches/" + id
      );
      return dispatch({
        type: JOIN_MATCH,
        payload: [joinGame.data],
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const authState = () => {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          payload: user,
          type: "USER_LOGGED",
        });
      } else {
        dispatch({
          payload: null,
          type: "USER_LOGGED",
        });
      }
    });
  };
};

export function getDetailsUser(id) {
  return async function (distpach) {
    try {
      const userId = await axios.get(
        `https://futbolapp-henry.herokuapp.com/users/${id}`
      );
      return distpach({
        type: GET_DETAILS_USER,
        payload: userId.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export const showUsers = () => {
  return (dispatch) => {
    fetch("https://futbolapp-henry.herokuapp.com/users")
      .then((obj) => obj.json())
      .then((obj) => {
        dispatch({
          type: GET_USERS,
          payload: obj,
        });
      });
  };
};
