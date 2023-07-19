import {
    Avatar,
    Button,
    Grid,
    Paper,
    TextField,
    Typography,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Checkbox,
    FormGroup,
  } from "@mui/material";
  import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
  import React, { useState } from "react";
  const SignUp = () => {
    const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
    const headerStyle = { margin: 10 };
    const avatarStyle = { backgroundColor: "#239595" };
    const marginTop = { margin: "10px 0 " };
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [acceptTerms, setAcceptTerms] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
  
    const handleSignUp = (e) => {
      e.preventDefault();
  
      //clear previous error message
      setNameError("");
      setEmailError("");
      setPhoneError("");
      setPasswordError("");
      setConfirmPasswordError("");
  
      // Validate name
      if (name.trim() === "") {
        setNameError("Please enter your name.");
      }
  
      // Validate email
      if (email.trim() === "") {
        setEmailError("Please enter your email address.");
      } else if (!isValidEmail(email)) {
        setEmailError("Please enter a valid email address.");
      }
  
      // Validate phone number
      if (phone.trim() === "") {
        setPhoneError("Please enter your phone number.");
      } else if (!isValidPhoneNumber(phone)) {
        setPhoneError("Please enter a 10 digit phone number.");
      }
  
      // Validate password
      if (password.trim() === "") {
        setPasswordError("Please confirm your password.");
      } else if (!isValidPassword(password)) {
        setPasswordError(
          "Please enter a valid password (at least 8 characters with at least one uppercase letter, one lowercase letter, and one digit)."
        );
      }
  
      //Validate confirm password
      if (confirmPassword.trim() === "") {
        setConfirmPasswordError("Please confirm your password.");
      } else if (password !== confirmPassword) {
        setConfirmPasswordError("Passwords do not match.");
      }
  
      // Proceed with registration or other actions if there are no errors
      if (
        nameError === "" &&
        emailError === "" &&
        phoneError === "" &&
        passwordError === "" &&
        confirmPasswordError === ""
      ) {
        // Perform registration or other actions
      }
    };
  
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const isValidPhoneNumber = (phoneNumber) => {
      const phoneNumberRegex = /^\d{10}$/;
      return phoneNumberRegex.test(phoneNumber);
    };
  
    const isValidPassword = (password) => {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return passwordRegex.test(password);
    };
  
    const handleCheckboxChange = (e) => {
      setAcceptTerms(e.target.checked);
    };
  
    const isSignUpButtonDisabled =
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === "" ||
      !acceptTerms;
  
    return (
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={headerStyle}> Sign Up </h2>
            <Typography variant="caption">
              Please fill this form to create an account!
            </Typography>
          </Grid>
  
          <form onSubmit={handleSignUp}>
            <TextField
              fullWidth
              label="Name"
              placeholder="Enter name"
              required
              style={marginTop}
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError !== ""}
              helperText={nameError}
            />
            <TextField
              fullWidth
              label="Email"
              placeholder="Enter email"
              required
              style={marginTop}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError !== ""}
              helperText={emailError}
            />
  
            <FormControl style={marginTop}>
              <FormLabel id="demo-radio-buttons-group-label" required>
                Gender
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                style={{ display: "initial" }}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
  
            <TextField
              fullWidth
              label="Phone Number"
              placeholder="Enter phone number"
              required
              style={marginTop}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={phoneError !== ""}
              helperText={phoneError}
            />
            <TextField
              fullWidth
              label="Password"
              placeholder="Enter password"
              required
              style={marginTop}
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError !== ""}
              helperText={passwordError}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              placeholder="Enter password"
              type="password"
              required
              style={marginTop}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={confirmPasswordError !== ""}
              helperText={confirmPasswordError}
            />
  
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name="checked"
                    color="primary"
                    checked={acceptTerms}
                    onChange={handleCheckboxChange}
                  />
                }
                label="I accept the term and conditions"
              />
            </FormGroup>
  
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={marginTop}
              disabled={isSignUpButtonDisabled}
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </Grid>
    );
  };
  export default SignUp;
  


    /*

    export const signUp = () => {
    return (dispatch, getState) => {
      const userData = getState().signUp;
      dispatch(resetForm());
  
      // Validate name
      // if (userData && userData.name.trim() === '') {
      //   dispatch(setNameError('Please enter your name.'));
      //   return;
      // }
  
     // Validate name
     if (userData.name.trim() === '') {
      dispatch(setNameError('Please enter your name.'));
      return; // Exit the function if there is an error
    }

    // Validate email
    if (userData.email.trim() === '') {
      dispatch(setEmailError('Please enter your email address.'));
      return;
    } else if (!isValidEmail(userData.email)) {
      dispatch(setEmailError('Please enter a valid email address.'));
      return;
    }

    // Validate phone number
    if (userData.phone.trim() === '') {
      dispatch(setPhoneError('Please enter your phone number.'));
      return;
    } else if (!isValidPhoneNumber(userData.phone)) {
      dispatch(setPhoneError('Please enter a 10 digit phone number.'));
      return;
    }

    // Validate password
    if (userData.password.trim() === '') {
      dispatch(setPasswordError('Please confirm your password.'));
      return;
    } else if (!isValidPassword(userData.password)) {
      dispatch(
        setPasswordError(
          'Please enter a valid password (at least 8 characters with at least one uppercase letter, one lowercase letter, and one digit).'
        )
      );
      return;
    }

    // Validate confirm password
    if (userData.confirmPassword.trim() === '') {
      dispatch(setConfirmPasswordError('Please confirm your password.'));
      return;
    } else if (userData.password !== userData.confirmPassword) {
      dispatch(setConfirmPasswordError('Passwords do not match.'));
      return;
    }

    // Simulate registration logic
    console.log('Simulating registration...');
    console.log('User Data:', userData);

    // Simulate success or failure
    const success = Math.random() < 0.5; // Randomly determine success or failure
    if (success) {
      dispatch(signUpSuccess()); // Dispatch success action
      console.log('User registered successfully!');
    } else {
      const error = 'Registration failed due to an error.'; // Simulated error message
      dispatch(signUpFailure(error)); // Dispatch failure action
      console.log('Registration failed:', error);
    }
    };
   */