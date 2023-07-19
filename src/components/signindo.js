import {
    Avatar,
    FormGroup,
    Grid,
    Paper,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Link,
    Typography,
  } from "@mui/material";
  import LockIcon from "@mui/icons-material/Lock";
  import React, { useState } from "react";
  
  const SignIn = ({ handleChange }) => {
    const paperStyle = {
      padding: 20,
      height: "70vh",
      width: 280,
      margin: "35px auto",
    };
    const avatarBackground = { backgroundColor: "#239595" };
    const btnStyling = { margin: "8px 0 " };
    const marginTop = { margin: "10px 0" };
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
  
    const handleSignUpClick = () => {
      handleChange(null, "2");
    };
  
    const handleSignIn = (e) => {
      e.preventDefault();
  
      // Clear previous error messages
      setUsernameError("");
      setPasswordError("");
  
      // Validate username
      if (username.trim() === "") {
        setUsernameError("Please enter your username.");
      } else if (!isValidEmail(username)) {
        setUsernameError("Please enter a valid email address.");
      }
  
      // Validate password
      if (password.trim() === "") {
        setPasswordError("Please enter your password.");
      } else if (!isValidPassword(password)) {
        setPasswordError(
          "Please enter a valid password (at least 8 characters with at least one uppercase letter, one lowercase letter, and one digit)."
        );
      }
  
      // Log the values of username and password
      console.log("Username:", username);
      console.log("Password:", password);
  
      // Proceed with authentication or other actions if there are no errors
      if (usernameError === "" && passwordError === "") {
        setUsername("");
        setPassword("");
      }
    };
  
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const isValidPassword = (password) => {
      // Use a regular expression to validate the password format
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return passwordRegex.test(password);
    };
  
    return (
      /*1* importing grid and paper from the material UI */
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarBackground}>
              <LockIcon />
            </Avatar>
            <h2> Sign In </h2>
          </Grid>
  
          <form onSubmit={handleSignIn}>
            <TextField
              label="Username"
              placeholder="Enter Username"
              fullWidth
              required
              style={marginTop}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={usernameError !== ""}
              helperText={usernameError}
            />
  
            <TextField
              label="Password"
              placeholder="Enter Password"
              type="password"
              fullWidth
              required
              style={marginTop}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError !== ""}
              helperText={passwordError}
            />
  
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name="checked"
                    color="primary"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                }
                label="Remember me"
              />
            </FormGroup>
  
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnStyling}
              fullWidth
              disabled={
                username.trim() === "" ||
                password.trim() === "" ||
                usernameError !== "" ||
                passwordError !== ""
              }
            >
              Sign In
            </Button>
          </form>
  
          <Link href="#">Forgot Password</Link>
  
          <Typography>
            Do you have an account?
            <Link href="#" onClick={handleSignUpClick}>
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    );
  };
  
  export default SignIn;
  