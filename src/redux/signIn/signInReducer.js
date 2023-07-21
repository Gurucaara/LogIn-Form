import {
  SET_USERNAME,
  SET_PASSWORD,
  SET_REMEMBER,
  SET_USERNAME_ERROR,
  SET_PASSWORD_ERROR,
  RESET_FORM,
} from "./signInTypes";

// Initial State
const initialState = {
  username: "",
  password: "",
  remember: false,
  usernameError: "",
  passwordError: "",
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
        usernameError: "", // Clear usernameError when user types in the username field
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
        passwordError: "", // Clear passwordError when user types in the password field
      };
    case SET_REMEMBER:
      return {
        ...state,
        remember: action.payload,
      };
    case SET_USERNAME_ERROR:
      return {
        ...state,
        usernameError: action.payload,
      };
    case SET_PASSWORD_ERROR:
      return {
        ...state,
        passwordError: action.payload,
      };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
};

export default signInReducer;
