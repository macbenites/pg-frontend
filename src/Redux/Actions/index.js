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
  USER_BY_NAME,
  FILTER_BY_POSITION,
  FILTER_BY_NEIGHBORHOOD,
  REMOVE_PLAYER,
  ORDER_BY_PLAYERS,
  ORDER_BY_DATE,
  RESET_PLAYERS_FILTER,
  MATCH_BY_NAME_SPORTCENTER,
  FILTER_SPORTCENTER,
  DELETE_MATCH,
  SHOW_YOUR_MATCHES,
  MATCHES_COMPANY,
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
        fetch("https://sejuega-henry.herokuapp.com/register", {
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
        fetch("https://sejuega-henry.herokuapp.com/register", {
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
        fetch("https://sejuega-henry.herokuapp.com/register", {
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
      "https://sejuega-henry.herokuapp.com/match",
      payload
    );
    return newMatch;
  };
}

export function getFields() {
  return function (dispatch) {
    fetch("https://sejuega-henry.herokuapp.com/sportcenters")
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
        "https://sejuega-henry.herokuapp.com/matches"
      );
      return dispatch({
        type: GET_MATCHES,
        payload: getGames.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    }
  };
}

export function joinMatch(id_match, user_name) {
  return async function (dispatch) {
    try {
      const joinGame = await axios.put(
        `https://sejuega-henry.herokuapp.com/matches/${id_match}`,
        { user: user_name }
      );
      return dispatch({
        type: JOIN_MATCH,
        payload: joinGame.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    }
  };
}

export const authState = () => {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetch(
          "https://sejuega-henry.herokuapp.com/users/emailusercompany/" +
            user.email
        )
          .then((obj) => obj.json())
          .then((obj) => {
            const moreData = {
              ...user,
              user_name: obj.user_name,
              name: obj.user_name ? obj.user_name : obj.name,
              id: obj.id,
              role: obj.role,
            };
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
        `https://sejuega-henry.herokuapp.com/users/${id}`
      );
      return distpach({
        type: GET_DETAILS_USER,
        payload: userId.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    }
  };
}

export const showUsers = () => {
  return (dispatch) => {
    fetch("https://sejuega-henry.herokuapp.com/users")
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
    try {
      const newBuy = await axios.post(
        "https://sejuega-henry.herokuapp.com/buy",
        payload
      );
      const { data } = newBuy;
      window.location.replace(data.response.sandbox_init_point);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    }
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
          price: data.price,
          availableHours: data.availableHours,
          typeFloor: data.typeFloor,
          cantPlayers: data.cantPlayers,
          cbu: data.cbu,
          note: data.note,
        };
      })
      .then((obj) => {
        fetch("https://sejuega-henry.herokuapp.com/sportcenter", {
          method: "POST",
          body: JSON.stringify({
            name: obj.name,
            email: obj.email,
            password: obj.password,
            phone: obj.phone,
            street: obj.street,
            district: obj.district,
            price: obj.price,
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
        `https://sejuega-henry.herokuapp.com/sportcenters/${id}`
      );
      return distpach({
        type: GET_DETAILS_COURT,
        payload: courtId.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    }
  };
}

export function getDetailsMatch(id_match) {
  return async function (distpach) {
    try {
      const matchId = await axios.get(
        `https://sejuega-henry.herokuapp.com/matches/${id_match}`
      );
      return distpach({
        type: GET_DETAILS_MATCH,
        payload: matchId.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    }
  };
}

export function getNeighborhoods() {
  return async function (dispatch) {
    try {
      const neighborhoods = await axios.get(
        "https://sejuega-henry.herokuapp.com/hoods"
      );
      return dispatch({
        type: GET_NEIGHBORHOODS,
        payload: neighborhoods.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    }
  };
}

export const filterByNameUser = (name) => async (dispatch) => {
  await axios
    .get(`https://sejuega-henry.herokuapp.com/users/name/${name}`)
    .then((response) => {
      dispatch({
        type: USER_BY_NAME,
        payload: response.data,
      });
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    });
};

export const filterPlayersByPosition = (position) => async (dispatch) => {
  await axios
    .get(`https://sejuega-henry.herokuapp.com/users/position/${position}`)
    .then((obj) => {
      dispatch({
        payload: obj.data,
        type: FILTER_BY_POSITION,
      });
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    });
};

export function filterPlayersByNeighborhoods(neighborhood) {
  return async (dispatch) => {
    await axios
      .get(
        `https://sejuega-henry.herokuapp.com/users/neighborhood/${neighborhood}`
      )
      .then((obj) => {
        dispatch({
          payload: obj.data,
          type: FILTER_BY_NEIGHBORHOOD,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.error}`,
        });
      });
  };
}

export function removeMatchPlayer(id_match, user_name) {
  return async function (dispatch) {
    try {
      const removePlayer = axios.put(
        `https://sejuega-henry.herokuapp.com/exitMatches/${id_match}`,
        { user: user_name }
      );
      return dispatch({
        type: REMOVE_PLAYER,
        payload: removePlayer.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    }
  };
}

export const orderByDateTime = (payload) => {
  return async function (dispatch) {
    try {
      const orderDate = await axios.get(
        `https://sejuega-henry.herokuapp.com/recentMatches/${payload}`
      );
      return dispatch({
        type: ORDER_BY_DATE,
        payload: orderDate.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    }
  };
};

export const orderByPlayers = (payload) => {
  return async function (dispatch) {
    try {
      const orderPlayers = await axios.get(
        `https://sejuega-henry.herokuapp.com/orderMAtches/${payload}`
      );
      return dispatch({
        type: ORDER_BY_PLAYERS,
        payload: orderPlayers.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    }
  };
};

export const filterMatchBySportcenter = (nameCenter) => async (dispatch) => {
  await axios
    .get(`https://sejuega-henry.herokuapp.com/matches?name=${nameCenter}`)
    .then((response) => {
      dispatch({
        type: MATCH_BY_NAME_SPORTCENTER,
        payload: response.data,
      });
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    });
};

export function updateData(id, newData) {
  return async function (dispatch) {
    try {
      await axios.put(`https://sejuega-henry.herokuapp.com/user/update/${id}`, {
        name: newData.name,
        neighborhood: newData.neighborhood,
        player_position: newData.position,
        image: newData.img,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    }
  };
}

export function resetPlayersFilter() {
  return async function (dispatch) {
    fetch("https://sejuega-henry.herokuapp.com/users")
      .then((obj) => obj.json())
      .then((obj) => {
        dispatch({
          payload: obj,
          type: RESET_PLAYERS_FILTER,
        });
      });
  };
}

export function filterSportCentersByDistrict(payload) {
  if (payload === "") {
    return function (dispatch) {
      fetch("https://sejuega-henry.herokuapp.com/sportcenters")
        .then((obj) => obj.json())
        .then((obj) => {
          dispatch({
            payload: obj,
            type: FILTER_SPORTCENTER,
          });
        });
    };
  } else {
    return function (dispatch) {
      fetch(`https://sejuega-henry.herokuapp.com/sportcenter/${payload}`)
        .then((obj) => obj.json())
        .then((obj) => {
          dispatch({
            payload: obj,
            type: FILTER_SPORTCENTER,
          });
        });
    };
  }
}

export function deleteMatch(id_match) {
  return async function (dispatch) {
    try {
      const matchDelete = await axios.delete(
        `https://sejuega-henry.herokuapp.com/matches/${id_match}`
      );
      return dispatch({
        type: DELETE_MATCH,
        payload: matchDelete.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    }
  };
}

export function showYourMatch(id) {
  return function (dispatch) {
    fetch("https://sejuega-henry.herokuapp.com/users/" + id)
      .then((obj) => obj.json())
      .then((obj) => {
        dispatch({
          payload: obj.matches,
          type: SHOW_YOUR_MATCHES,
        });
      });
  };
}

export const matchesCompany = (name) => (dispatch) =>
  dispatch({
    type: MATCHES_COMPANY,
    payload: name,
  });
