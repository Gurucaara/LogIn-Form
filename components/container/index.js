import React, { useState } from "react";
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList } from "@mui/lab";
import Box from '@mui/material/Box';
import SignUp from "../SignUp";
import SignIn from "../SignIn";

const SignInOutContainer = () => {
    const [value, setValue] = useState("1")
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <div>
            <h1>Form</h1>
            <Box sx={{ width: "100%", typography: 'body1', margin: "10px auto" }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", justifyContent: "center" }} >
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Sign In" value="1" />
                            <Tab label="Sign Up" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><SignIn handleChange={handleChange} /></TabPanel>
                    <TabPanel value="2"><SignUp /></TabPanel>
                </TabContext>
            </Box>

        </div>
    )
}

export default SignInOutContainer;