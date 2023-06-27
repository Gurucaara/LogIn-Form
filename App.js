import React from "react";
import Login from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignInOutContainer from "./components/container";

const App = () =>{
    return(
        <div className="App">
            {/* <Login/> */}
            {/* <SignUp/> */}
            <SignInOutContainer/>
        </div>  
    )
}
export default App;