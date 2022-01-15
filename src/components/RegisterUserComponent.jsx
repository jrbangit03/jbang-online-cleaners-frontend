import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import RegisterUserService from '../services/RegisterUserService';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))


export default function RegisterUserInterface() {
    const [fn, setFn] = useState('')
    const [ln, setLn] = useState('')
    const [address, setAddress] = useState('')
    const [accountType, setAccountType] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' }

    const accountTypeChange = (event) => {
        setAccountType(event.target.value);
    };

    const registerUser = (event) => {
        event.preventDefault()
        const user = { fn, ln, address, accountType, username, password }
        console.log(user)
        var headers = {
            'Content-Type': 'application/json' 
        }
        axios.post("http://localhost:8181/user/register",user,headers)
        // RegisterUserService.registerUser(user)
    }


    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1>Register!</h1>
                <form className={useStyles.root}>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth value={fn} onChange={(event) => setFn(event.target.value)} /> <br /><br />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth value={ln} onChange={(event) => setLn(event.target.value)} /> <br /><br />
                    <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth value={address} onChange={(event) => setAddress(event.target.value)} /> <br /><br />
                    <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth value={username} onChange={(event) => setUsername(event.target.value)} /> <br /><br />
                    {/* TODO */}
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth value={password} onChange={(event) => setPassword(event.target.value)} /> <br /><br />
                    <InputLabel id="account-type-select">Account Type</InputLabel>
                    <Select
                        labelId="account-type-select"
                        id="Account-Type"
                        value={accountType}
                        label="Account-Type"
                        onChange={accountTypeChange}
                        fullWidth
                    >
                        <MenuItem value="Client">Client</MenuItem>
                        <MenuItem value="Cleaner">Cleaner</MenuItem>
                    </Select> <br /><br />
                </form>

                <Button variant="contained" onClick={registerUser}>Submit</Button>
            </Paper>
        </Container>
    )
}