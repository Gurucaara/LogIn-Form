import React from "react";
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
import { connect } from "react-redux";
import {
  setUsername,
  setPassword,
  setUsernameError,
  setPasswordError,
  signIn,
  remember,
  setRemember,
  isValidEmail,
  isValidPassword,
} from "../redux/signIn/signInActions";

const SignIn = ({
  username,
  password,
  usernameError,
  passwordError,
  setUsername,
  setPassword,
  setUsernameError,
  setPasswordError,
  handleChange,
  setRemember,
  signIn,
}) => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "35px auto",
  };
  const avatarBackground = { backgroundColor: "#239595" };
  const btnStyling = { margin: "8px 0 " };
  const marginTop = { margin: "10px 0" };

  const handleSignUpClick = () => {
    // Handle Sign Up click
    handleChange(null, "2");
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    // Clear previous error messages
    setUsernameError("");
    setPasswordError("");

    // Perform validation and sign in logic
    if (username.trim() === "") {
      setUsernameError("Username is required.");
    } else if (!isValidEmail(username)) {
      setUsernameError("Invalid email format.");
    } else if (password.trim() === "") {
      setPasswordError("Password is required");
    }  else {
      signIn();
    }

    // if (username.trim() === "") {
    //   setUsernameError("Username is required");
    // } else if (password.trim() === "") {
    //   setPasswordError("Password is required");
    // } else {
    //   signIn();
    // }
  };

  return (
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
                  name="remember"
                  color="primary"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)} // Dispatch the action to change the remember state
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

const mapStateToProps = (state) => {
  return {
    username: state.signIn.username,
    password: state.signIn.password,
    remember: state.signIn.remember,
    usernameError: state.signIn.usernameError,
    passwordError: state.signIn.passwordError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (username) => dispatch(setUsername(username)),
    setPassword: (password) => dispatch(setPassword(password)),
    setUsernameError: (error) => dispatch(setUsernameError(error)),
    setPasswordError: (error) => dispatch(setPasswordError(error)),
    setRemember: (remember) => dispatch(setRemember(remember)),
    signIn: () => dispatch(signIn()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
