const initialState = {
  userLogeado: {},
  users: [],
  error: [],
  fields: [],
  matches: [],
  userState: {},
  detailsUser: {},
  players: [],
  detailsCourt: {},
  detailsMatch: {},
  neighborhoods: [],
  displayName: "",
  removePlayer: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ERROR":
      return {
        ...state,
        error: payload,
      };

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
        displayName: payload.displayName,
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
        players: payload,
      };
    case "GET_DETAILS_USER":
      return {
        ...state,
        detailsUser: payload,
      };

    case "GET_USERS":
      return {
        ...state,
        users: payload,
      };

    case "POST_BUY":
      return {
        ...state,
      };

    case "GET_DETAILS_COURT":
      return {
        ...state,
        detailsCourt: payload,
      };

    case "GET_DETAILS_MATCH":
      return {
        ...state,
        detailsMatch: payload,
      };

    case "GET_NEIGHBORHOODS":
      return {
        ...state,
        neighborhoods: payload,
      };
    case "FILTER_BY_POSITION":
      return {
        ...state,
        users: payload,
      };

    case "FILTER_BY_NEIGHBORHOOD":
      return {
        ...state,
        users: payload,
      };
    case "REMOVE_PLAYER":
      return {
        ...state,
        removePlayer: payload,
      };

    case "USER_BY_NAME":
      return {
        ...state,
        users: payload,
      };

    case "ORDER_BY_DATE":
      return {
        ...state,
        matches: payload,
      };
      
    case "ORDER_BY_PLAYERS":
      return {
        ...state,
        matches: payload,
      };

    case "MATCH_BY_NAME_SPORTCENTER":
      return {
        ...state,
        matches: payload,
      };  

    default:
      return { ...state };
  }
}

export default rootReducer;
