import {
  SET_NAME,
  SET_EMAIL,
  SET_GENDER,
  SET_PHONE,
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
  SET_ACCEPT_TERMS,
  SET_NAME_ERROR,
  SET_EMAIL_ERROR,
  SET_PHONE_ERROR,
  SET_PASSWORD_ERROR,
  SET_CONFIRM_PASSWORD_ERROR,
  RESET_FORM,
} from "../signUp/signUpTypes";

// Intitial State
const initialState = {
  name: "",
  email: "",
  gender: "",
  phone: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
  nameError: "",
  emailError: "",
  phoneError: "",
  passwordError: "",
  confirmPasswordError: "",
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_GENDER:
      return {
        ...state,
        gender: action.payload,
      };
    case SET_PHONE:
      return {
        ...state,
        phone: action.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SET_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.payload,
      };
    case SET_ACCEPT_TERMS:
      return {
        ...state,
        acceptTerms: action.payload,
      };
    case SET_NAME_ERROR:
      return {
        ...state,
        nameError: action.payload,
      };
    case SET_EMAIL_ERROR:
      return {
        ...state,
        emailError: action.payload,
      };
    case SET_PHONE_ERROR:
      return {
        ...state,
        phoneError: action.payload,
      };
    case SET_PASSWORD_ERROR:
      return {
        ...state,
        passwordError: action.payload,
      };
    case SET_CONFIRM_PASSWORD_ERROR:
      return {
        ...state,
        confirmPasswordError: action.payload,
      };
    case RESET_FORM:
      return {
        ...initialState,
        acceptTerms: state.acceptTerms, // Preserve the acceptTerms value on form reset
      };
    default:
      return state;
  }
};

export default signUpReducer;
