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
import Swal from "sweetalert2";
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
  GET_DETAILS_COURT,
  GET_DETAILS_MATCH,
  GET_NEIGHBORHOODS,
} from "./types";
import axios from "axios";

const errorCode = ({ code }) => {
  let message = "Credenciales incorrectas";

  code === "auth/email-already-in-use" &&
    (message = "El correo ya esta en uso");
  code === "auth/invalid-email" && (message = "El correo no es valido");
  code === "auth/user-not-found" && (message = "El usuario no existe");

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${message}`,
  });
};

export const resetStateError = () => async (dispatch) =>
  dispatch({
    type: "RESET_STATE_ERROR",
  });

export const signUpWithMail = (email, password, data, callback) => {
  return async (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((obj) => {
        return {
          ...obj.user,
          username: data.username,
          name: data.name,
          barrio: data.neighborhood,
          posicion: data.position,
          displayName: data.username,
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
            player_position: obj.posicion,
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
        errorCode(error);
      });
  };
};

export const logInWithMail = (email, password, callback) => {
  return async function (dispatch) {
    signInWithEmailAndPassword(auth, email, password)
      .then((obj) => {
        return {
          ...obj.user,
        };
      })
      .then((obj) => {
        dispatch({
          payload: obj,
          type: LOG_IN_WHIT_EMAIL,
        });
        callback();
      })
      .catch((error) => {
        errorCode(error);
      });
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
        console.log(obj);
        fetch("https://futbolapp-henry.herokuapp.com/register", {
          method: "POST",
          body: JSON.stringify({
            user_name: obj.user.displayName,
            email: obj.user.email,
            password: "123123",
            name: obj.user.name,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });

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
        console.log(obj);
        fetch("https://futbolapp-henry.herokuapp.com/register", {
          method: "POST",
          body: JSON.stringify({
            user_name: obj.user.displayName,
            email: obj.user.email,
            password: "123123",
          }),
          headers: {
            "Content-type": "application/json",
          },
        });
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

export function joinMatch(id_match, user_name) {
  return async function (dispatch) {
    try {
      console.log({ id_match, user_name });
      const joinGame = await axios.put(
        `https://futbolapp-henry.herokuapp.com/matches/${id_match}`,
        { user: user_name }
      );
      return dispatch({
        type: JOIN_MATCH,
        payload: joinGame.data,
      });
    } catch (error) {
      console.log("error");
    }
  };
}

export const authState = () => {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetch("https://futbolapp-henry.herokuapp.com/users/email/" + user.email)
          .then((obj) => obj.json())
          .then((obj) => {
            const moreData = {
              ...user,
              user_name: obj.user_name,
              name: obj.name,
            };
            console.log(moreData);
            return dispatch({
              payload: moreData,
              type: "USER_LOGGED",
            });
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

export function postBuy(payload) {
  return async function (dispatch) {
    const newBuy = await axios.post(
      "https://futbolapp-henry.herokuapp.com/buy",
      payload
    );
    const { data } = newBuy;
    window.location.replace(data.response.sandbox_init_point);
    // return newBuy;
  };
}

export const signUpBusiness = (email, password, data, callback) => {
  return async (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((obj) => {
        return {
          ...obj.user,
          name: data.name,
          email: data.email,
          password: data.password,
          phone: data.phone,
          street: data.street,
          district: data.district,
          availableHours: data.availableHours,
          typeFloor: data.typeFloor,
          cantPlayers: data.cantPlayers,
          cbu: data.cbu,
          note: data.note,
        };
      })
      .then((obj) => {
        fetch("https://futbolapp-henry.herokuapp.com/sportcenter", {
          method: "POST",
          body: JSON.stringify({
            name: obj.name,
            email: obj.email,
            password: obj.password,
            phone: obj.phone,
            street: obj.street,
            district: obj.district,
            availableHours: obj.availableHours,
            typeFloor: obj.typeFloor,
            cantPlayers: obj.cantPlayers,
            cbu: obj.cbu,
            note: obj.note,
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
        errorCode(error);
      });
  };
};

export function getDetailsCourt(id) {
  return async function (distpach) {
    try {
      const courtId = await axios.get(
        `https://futbolapp-henry.herokuapp.com/sportcenters/${id}`
      );
      return distpach({
        type: GET_DETAILS_COURT,
        payload: courtId.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetailsMatch(id_match) {
  return async function (distpach) {
    try {
      const matchId = await axios.get(
        `https://futbolapp-henry.herokuapp.com/matches/${id_match}`
      );
      return distpach({
        type: GET_DETAILS_MATCH,
        payload: matchId.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getNeighborhoods() {
  return async function (dispatch) {
    try {
      const neighborhoods = await axios.get(
        "https://futbolapp-henry.herokuapp.com/hoods"
      );
      return dispatch({
        type: GET_NEIGHBORHOODS,
        payload: neighborhoods.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
