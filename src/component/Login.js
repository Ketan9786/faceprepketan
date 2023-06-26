import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import "./Login.css";
import { useNavigate } from 'react-router-dom';


export let loading = false;
const Login = (props) => {
   console.log(props.loading)
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [state, setState] = useState(props.loading);

    const handleInputChange = (event) => {
        const [key, value] = [event.target.name, event.target.value];
        setFormData({ ...formData, [key]: value });
    };
    
    const handelClick = () => {

        if (formData.username === "foo" && formData.password === "bar") {

            enqueueSnackbar("LOGGED IN  SUCCESSFULLY", { variant: "success" });
            setTimeout(() => {
                navigate('/home');
            }, 500)
            
            loading =true;
            

        } else if (formData.username === "" && formData.password === "") {
            enqueueSnackbar("PLEASE ENTER YOUR CREDENTIALS", { variant: "warning" });
           

        } else {
            enqueueSnackbar("USERNAME & PASSWORD InCORRECT", { variant: "error" });
            
        }
    }


    const sendDataToParent = () => {
        handelClick();
        props.onDataChange(true);
    }


    return (
        <>

            <div className="flex">

                <Box className="content">

                    <Box >
                        <Stack spacing={2} className="form">
                            <h2 className="title">Login</h2>
                            <TextField
                                id="username"
                                label="Username"
                                variant="outlined"
                                title="Username"
                                name="username"
                                value={formData.username}
                                placeholder="Enter Username"
                                onChange={handleInputChange}
                                fullWidth
                            />
                            <TextField
                                id="password"
                                variant="outlined"
                                label="Password"
                                name="password"
                                type="password"
                                value={formData.password}
                                fullWidth
                                placeholder="Enter a password"
                                onChange={handleInputChange}
                            />
                        
                        {
                                state ? (<>
                                    <Button
                                        className="button"
                                        variant="contained"
                                        onClick={sendDataToParent}
                                    >
                                        <span>Login</span>

                                    </Button>
                                </>) : (<>
                                    <Button
                                        className="button"
                                        variant="contained"
                                        onClick={handelClick}
                                    >
                                        <span>Login</span>

                                    </Button>
                                </>)
                            }
                        </Stack>
                    </Box>
                </Box>
                <SnackbarProvider />
            </div>
        </>
    );

}

export default (Login);