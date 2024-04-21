import { Button, CircularProgress, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../functions/login';

import './login.scss';
import { getBearerToken } from '../functions/getBearerToken';

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (getBearerToken()) {
            goToPage('/packs');
        }
    }, [])

    const handleChangeEmail = (event) => {
        setUser({ ...user, email: event.target.value });
    };

    const handleChangePassword = (event) => {
        setUser({ ...user, password: event.target.value });
    };
    
    const goToPage = (page) => {
        navigate(page);
    }

    const loginAndNavigate = async () => {
        setLoading(true);
        await login(user);
        setLoading(false);
        goToPage('/packs');   
    }

    return(
        <div className='login'>
            <h4>Login</h4>
            <div className='login-form'>
                <TextField id="email" label="Email" variant="outlined" onChange={handleChangeEmail} />
                <TextField type="password" id="password" label="Password" variant="outlined" onChange={handleChangePassword} />
                
                { !loading && <>
                    <Button variant='outlined' onClick={loginAndNavigate} disabled={!user.email || !user.password}>Login</Button>
                    <Button onClick={() => goToPage('/register')}>Register</Button>
                </> }
                { loading && <CircularProgress /> }
            </div>
        </div>
    )
}

export {Login};