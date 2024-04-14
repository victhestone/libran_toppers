import React, { useEffect, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Button } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import StyleIcon from '@mui/icons-material/Style';
import RedeemIcon from '@mui/icons-material/Redeem';

import './navigation.scss';

function Navigation() {
    const pages = ['packs', 'cards'];
    const location = useLocation();
    const navigate = useNavigate();
    const isMobile = navigator.userAgentData.mobile;
    const [bottomNavValue, setBottomNavValue] = useState(pages.findIndex(page => location.pathname.includes(page)));

    const goToPage = (page) => {
        navigate(page);
    }

    useEffect(() => {
        if(isMobile && bottomNavValue !== undefined) {
            goToPage(pages[bottomNavValue]);
        }
    }, [bottomNavValue])

  return (
    <div className={`navigation ${isMobile ? 'mobile' : ''}`}>
        {!isMobile &&<div className='navigation-tab'>
            <Button size='large' variant={location.pathname.includes('packs') ? 'contained' : 'outlined'} onClick={() => goToPage('packs')}>
                <RedeemIcon fontSize='large'/>
                <span>Packs</span>
            </Button>
            <Button size='large'  variant={location.pathname.includes('cards') ? 'contained' : 'outlined'} onClick={() => goToPage('cards')}>
                <StyleIcon fontSize='large'/>
                <span>Cards</span>
            </Button>
        </div>}
        {isMobile && <BottomNavigation
            className='navigation-bottom'
            showLabels
            value={bottomNavValue}
            onChange={(event, newValue) => {
                setBottomNavValue(newValue);
            }}
            >
            <BottomNavigationAction label="Packs" icon={<RedeemIcon />} />
            <BottomNavigationAction label="Cards" icon={<StyleIcon />} />
        </BottomNavigation>}
        <div className='navigation-container'>
            <Outlet></Outlet>
        </div>
    </div>
  );
}

export default Navigation;
