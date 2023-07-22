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
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from "../signUp/signUpTypes";

export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};

export const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    payload: email,
  };
};

export const setGender = (gender) => {
  return {
    type: SET_GENDER,
    payload: gender,
  };
};

export const setPhone = (phone) => {
  return {
    type: SET_PHONE,
    payload: phone,
  };
};

export const setPassword = (password) => {
  return {
    type: SET_PASSWORD,
    payload: password,
  };
};

export const setConfirmPassword = (confirmPassword) => {
  return {
    type: SET_CONFIRM_PASSWORD,
    payload: confirmPassword,
  };
};

export const setAcceptTerms = (acceptTerms) => {
  return {
    type: SET_ACCEPT_TERMS,
    payload: acceptTerms,
  };
};

export const setNameError = (error) => {
  return {
    type: SET_NAME_ERROR,
    payload: error,
  };
};

export const setEmailError = (error) => {
  return {
    type: SET_EMAIL_ERROR,
    payload: error,
  };
};

export const setPhoneError = (error) => {
  return {
    type: SET_PHONE_ERROR,
    payload: error,
  };
};

export const setPasswordError = (error) => {
  return {
    type: SET_PASSWORD_ERROR,
    payload: error,
  };
};

export const setConfirmPasswordError = (error) => {
  return {
    type: SET_CONFIRM_PASSWORD_ERROR,
    payload: error,
  };
};

export const resetForm = () => {
  return {
    type: RESET_FORM,
  };
};

export const signUpSuccess = () => {
  return {
    type: SIGN_UP_SUCCESS,
  };
};

export const signUpFailure = (error) => {
  return {
    type: SIGN_UP_FAILURE,
    payload: error,
  };
};

export const signUp = () => {
  return (dispatch, getState) => {
    const userData = getState().signUp;

    if (userData.name.trim() === "") {
      dispatch(setNameError("Please enter your name."));
      return;
    } else {
      dispatch(setNameError(""));
    }

    // Validate email
    if (userData.email.trim() === "") {
      dispatch(setEmailError("Please enter your email address."));
      return;
    } else if (!isValidEmail(userData.email)) {
      dispatch(setEmailError("Please enter a valid email address."));
      return;
    } else {
      dispatch(setEmailError(""));
    }

    // Validate phone number
    if (userData.phone.trim() === "") {
      dispatch(setPhoneError("Please enter your phone number."));
      return;
    } else if (!isValidPhoneNumber(userData.phone)) {
      dispatch(setPhoneError("Please enter a valid phone number."));
      return;
    } else {
      dispatch(setPhoneError(""));
    }

    // Validate password
    if (userData.password.trim() === "") {
      dispatch(setPasswordError("Please enter a password."));
      return;
    } else if (!isValidPassword(userData.password)) {
      dispatch(
        setPasswordError(
          "Password should be at least 8 characters long with at least one uppercase letter, one lowercase letter, and one number."
        )
      );
      return;
    } else {
      dispatch(setPasswordError(""));
    }

    // Validate confirm password
    if (userData.confirmPassword.trim() === "") {
      dispatch(setConfirmPasswordError("Please confirm your password."));
      return;
    } else if (userData.confirmPassword !== userData.password) {
      dispatch(setConfirmPasswordError("Passwords do not match."));
      return;
    } else {
      dispatch(setConfirmPasswordError(""));
    }

    // Continue with signup logic
    // You can show a loading state while the signup process is in progress
    // dispatch(signUpLoading());

    // Simulate a delay to show loading state
    setTimeout(() => {
      // Dispatch signUpSuccess action if signup is successful
      dispatch(signUpSuccess());

      alert("Successfully Signed Up");
      // Clear the form after successful signup
      dispatch(resetForm());
    }, 2000);

    // dispatch(signUpFailure('An error occurred during signup.'));
  };
};

// Helper function to validate email
const isValidEmail = (email) => {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

// Helper function to validate phone number
const isValidPhoneNumber = (phone) => {
  // Regular expression pattern for phone number validation
  const phonePattern = /^\d{10}$/;
  return phonePattern.test(phone);
};

// Password validation regex: At least 8 characters with at least one uppercase letter, one lowercase letter, and one number
export const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};

// MyPass123
