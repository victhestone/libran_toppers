import { Button, CircularProgress, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../functions/register';

import './register.scss';
import { getBearerToken } from '../functions/getBearerToken';

function Register() {
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

    const handleChangeUserName = (event) => {
        setUser({ ...user, username: event.target.value });
    }

    const handleChangePassword = (event) => {
        setUser({ ...user, password: event.target.value });
    };
    
    const goToPage = (page) => {
        navigate(page);
    }

    const registerAndNavigate = async () => {
        setLoading(true);
        await register(user);
        setLoading(false);
        goToPage('/packs');
    }

    return(
        <div className='register'>
            <h4>Register</h4>
            <div className='register-form'>
                <TextField id="email" label="Email" variant="outlined" onChange={handleChangeEmail} />
                <TextField id="username" label="Username" variant="outlined" onChange={handleChangeUserName} />
                <TextField type="password" id="password" label="Password" variant="outlined" onChange={handleChangePassword} />
                <Button variant='outlined' onClick={registerAndNavigate} disabled={!user.email || !user.username || !user.password}>Register</Button>
                { !loading && <Button onClick={() => goToPage('/login')}>Login</Button>}
                { loading && <CircularProgress /> }
            </div>
        </div>
    )
}

export {Register};