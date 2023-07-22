import React, { useEffect } from "react";
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
import { connect } from "react-redux";
import {
  setName,
  setNameError,
  setEmail,
  setEmailError,
  setGender,
  setPhone,
  setPhoneError,
  setPassword,
  setPasswordError,
  setConfirmPassword,
  setConfirmPasswordError,
  setAcceptTerms,
  signUp,
} from "../redux/signUp/signUpActions";

const SignUp = ({
  name,
  email,
  gender,
  phone,
  password,
  confirmPassword,
  acceptTerms,
  nameError,
  emailError,
  phoneError,
  passwordError,
  confirmPasswordError,
  setName,
  setEmail,
  setGender,
  setPhone,
  setPassword,
  setConfirmPassword,
  setAcceptTerms,
  signUp,
}) => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 10 };
  const avatarStyle = { backgroundColor: "#239595" };
  const marginTop = { margin: "10px 0 " };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Clear previous error messages
    setNameError("");
    setEmailError("");
    setPhoneError("");
    setPasswordError("");
    setConfirmPasswordError("");

    // Perform signup logic or dispatch an action
    signUp();
  };

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
            error={!!nameError}
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
            error={!!emailError}
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
            error={!!phoneError}
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
            error={!!passwordError}
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
            error={!!confirmPasswordError}
            helperText={confirmPasswordError}
          />

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="checked"
                  color="primary"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                />
              }
              label="I accept the terms and conditions"
            />
          </FormGroup>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={marginTop}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  const {
    name,
    email,
    gender,
    phone,
    password,
    confirmPassword,
    acceptTerms,
    nameError,
    emailError,
    phoneError,
    passwordError,
    confirmPasswordError,
  } = state.signUp;

  return {
    name,
    email,
    gender,
    phone,
    password,
    confirmPassword,
    acceptTerms,
    nameError,
    emailError,
    phoneError,
    passwordError,
    confirmPasswordError,
  };
};

const mapDispatchToProps = {
  setName,
  setEmail,
  setGender,
  setPhone,
  setPassword,
  setConfirmPassword,
  setAcceptTerms,
  signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
