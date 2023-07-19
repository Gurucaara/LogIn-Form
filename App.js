import React from "react";
import Login from "./src/components/SignIn";
import SignUp from "./src/components/SignUp";
import SignInOutContainer from "./src/components/container";
import { Provider } from "react-redux";
import store from "./src/redux/store.js";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Login/> */}
        {/* <SignUp/> */}
        <SignInOutContainer />
      </div>
    </Provider>
  );
};
export default App;
