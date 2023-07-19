import {
  SET_USERNAME,
  SET_PASSWORD,
  SET_REMEMBER,
  SET_USERNAME_ERROR,
  SET_PASSWORD_ERROR,
  RESET_FORM,
  SIGN_IN,
} from "./signInTypes";

export const setUsername = (username) => {
  return {
    type: SET_USERNAME,
    payload: username,
  };
};

export const setPassword = (password) => {
  return {
    type: SET_PASSWORD,
    payload: password,
  };
};

export const setRemember = (remember) => {
  return {
    type: SET_REMEMBER,
    payload: remember,
  };
};

export const setUsernameError = (error) => {
  return {
    type: SET_USERNAME_ERROR,
    payload: error,
  };
};

export const setPasswordError = (error) => {
  return {
    type: SET_PASSWORD_ERROR,
    payload: error,
  };
};

export const resetForm = () => {
  return {
    type: RESET_FORM,
  };
};

export const signIn = () => {
  return (dispatch, getState) => {
    const { username, password } = getState().signIn;

    // Perform validation logic
    if (username === "admin" && password === "admin123") {
      // Successful sign in
      // Dispatch additional actions if needed
      // For example: dispatch(someOtherAction());
      dispatch(resetForm("Sign in successful!"));
    } else {
      // Invalid credentials
      dispatch(setUsernameError("Invalid username or password"));
      dispatch(setPasswordError("Invalid username or password"));
    }
  };
};
