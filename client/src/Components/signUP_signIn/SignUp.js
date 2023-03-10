
import { useState } from "react";

import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";






function SignUp() {
    const [signUpData, setSignUpData] = useState({
        name: "",
        number: "",
        email: "",
        password: "",
        conPassword: ""
    });



    //handel control input
    //-------------------------------------------------------------------------
    const handelInput = (event) => {
        const { name, value } = event.target;
        setSignUpData({ ...signUpData, [name]: value });
    }



    return (<div className='login-modal'>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='login-modal'>
                <h2>SignIn</h2>

                <TextField
                    error={false}
                    required
                    name="name"
                    id="outlined-required"
                    label="Name"
                    value={signUpData.name}
                    onChange={handelInput}
                />
                <TextField
                    error={false}
                    required
                    name="number"
                    type="number"
                    id="outlined-required"
                    label="Number"
                    value={signUpData.number}
                    onChange={handelInput}
                />
                <TextField
                    error={false}
                    required
                    name="email"
                    id="outlined-required"
                    label="Email"
                    value={signUpData.email}
                    onChange={handelInput}
                />
                <TextField
                    error={false}
                    required
                    name="password"
                    type="password"
                    id="outlined-required"
                    label="Password"
                    value={signUpData.password}
                    onChange={handelInput}
                />
                <TextField
                    error={false}
                    required
                    name="conPassword"
                    type="password"
                    id="outlined-required"
                    label="Confrom Password"
                    value={signUpData.conPassword}
                    onChange={handelInput}
                />

                <button className="modal-signin-button">CONTINUE</button>

                <h4>if you have a account go to signin</h4>


                <p className="privacy">By continuing, I accept TCP-bigbasket???s <a>Terms and Conditions</a> and <a>Privacy Policy.</a></p>
            </div>

        </Box>

        <button className="modal-signin-button"><SignIn /></button>

    </div>)
}

export default SignUp;