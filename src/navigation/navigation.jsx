import React from 'react';
import { Button } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import StyleIcon from '@mui/icons-material/Style';
import RedeemIcon from '@mui/icons-material/Redeem';

import './navigation.scss';

function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();

    const goToPage = (page) => {
        navigate(page);
    }

  return (
    <div className='navigation'>
        <div className='navigation-tab'>
            <Button size='large' variant={location.pathname.includes('packs') ? 'contained' : 'outlined'} onClick={() => goToPage('packs')}>
                <RedeemIcon fontSize='large'/>
                <span>Packs</span>
            </Button>
            <Button size='large'  variant={location.pathname.includes('cards') ? 'contained' : 'outlined'} onClick={() => goToPage('cards')}>
                <StyleIcon fontSize='large'/>
                <span>Cards</span>
            </Button>
        </div>
        <div className='navigation-container'>
            <Outlet></Outlet>
        </div>
    </div>
  );
}

export default Navigation;
