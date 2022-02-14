const initialState = {
  userLogeado : {},
  users : [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "SIGN_UP_WHIT_EMAIL_AND_PASSWORD":
      return {
        ...state,
        users : state.users.concat(payload)
      }
    case "LOG_IN_WHIT_EMAIL":
      return {
        ...state,
        userLogeado : payload
      }
    case "LOG_OUT":
      return {
        ...state,
        userLogeado : payload
      }
    case "LOG_IN_WITH_GOOGLE": 
      return {
        ...state,
        userLogeado : payload
      }
    case "LOG_IN_WITH_FACEBOOK": 
    return {
      ...state,
      userLogeado : payload
    }
    case 'POST_MATCH':
      return{
        ...state,                   
      }
    default:
      return { ...state };
  }
}

export default rootReducer;
