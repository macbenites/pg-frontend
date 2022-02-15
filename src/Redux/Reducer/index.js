const initialState = {
  userLogeado: {},
  users: [],
  error: [],
  fields: [],
  matches: [],
  userState: {},
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ERROR":
      if (payload === "auth/email-already-in-use") {
        return {
          ...state,
          error: "Ese mail ya esta registrado",
        };
      } else if (payload === "auth/invalid-email") {
        return {
          ...state,
          error: "Mail invalido",
        };
      } else if (payload === "auth/user-not-found") {
        return {
          ...state,
          error: "Credenciales Incorrectas",
        };
      } else if (payload === "auth/wrong-password") {
        return {
          ...state,
          error: "Credenciales Incorrectas",
        };
      } else {
        return {
          ...state,
          error: payload,
        };
      }

    case "USER_LOGGED":
      return {
        ...state,
        userState: payload,
      };

    case "RESET_STATE_ERROR":
      return {
        ...state,
        error: [],
      };

    case "SIGN_UP_WHIT_EMAIL_AND_PASSWORD":
      return {
        ...state,
        users: state.users.concat(payload),
      };

    case "LOG_IN_WHIT_EMAIL":
      return {
        ...state,
        userLogeado: payload,
      };

    case "LOG_OUT":
      return {
        ...state,
        userLogeado: payload,
      };

    case "LOG_IN_WITH_GOOGLE":
      return {
        ...state,
        userLogeado: payload,
      };

    case "LOG_IN_WITH_FACEBOOK":
      return {
        ...state,
        userLogeado: payload,
      };

    case "POST_MATCH":
      return {
        ...state,
      };
    case "GET_FIELDS":
      return {
        ...state,
        fields: payload,
      };
    case "GET_MATCHES":
      return {
        ...state,
        matches: payload,
      };
    case "JOIN_MATCH":
      return {
        ...state,
        matches: payload,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
