import * as React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))



export default function LoginInterface() {

    const paperStyle = { padding:'50px 20px', width:600, margin:'20px auto' }
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const sendToDB=(event)=>{
        event.preventDefault()
        const login={username, password}
        console.log(login)
    }

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1>Login</h1>
                <form className={useStyles().root}
                    noValidate
                    autoComplete="off">
                    <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth value={username} onChange={(event) => setUsername(event.target.value)} /> <br/><br/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth value={password} onChange={(event) => setPassword(event.target.value)} />
                </form>
                <Button variant="contained" onClick={sendToDB}>Login</Button>
            </Paper>
        </Container>

    );
}
