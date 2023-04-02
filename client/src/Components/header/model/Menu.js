import "./Menu.css";
import SignIn from "../../signUP_signIn/SignIn";

// import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { IconButton, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// const style = {
//     // as 'absolute',
//     position: 'absolute',
//     top: '60px',
//     left: '60%',
//     // transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     pt: 2,
//     px: 4,
//     pb: 3,
// };


export default function Menu() {
    const [open, setOpen] = useState(false);



    //handel model close or open
    //-------------------------------------------------------------------------
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    //-------------------------------------------------------------------------


    //handel control input
    //-------------------------------------------------------------------------



    //signin data send to the server
    //-------------------------------------------------------------------------




    //console.log(cookieValue);
    return (
        <div>
            <IconButton
                size="large"
                edge="start"
                color="black"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={handleOpen}
            >
                <MenuIcon style={{ fontSize: 50 }} />
            </IconButton>

            <Modal
                open={open}
                onClose={handleClose}

            // aria-labelledby="parent-modal-title"
            // aria-describedby="parent-modal-description"
            >
                <Box className='menu-modal' >
                    {/* <h2 id="parent-modal-title">Text insx={{width: 400 } a modal</h2>
                    <p id="parent-modal-description">
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p> */}
                    <Link to="/" onClick={handleClose}>
                        <div>Home</div>
                    </Link>
                    <SignIn />
                    <div>User</div>
                </Box>

                {/* <SignUP handleClos={handleClose}/> */}
            </Modal>
        </div >
    );
}