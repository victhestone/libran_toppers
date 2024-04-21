import React, { useEffect, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Button, CircularProgress } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import StyleIcon from '@mui/icons-material/Style';
import RedeemIcon from '@mui/icons-material/Redeem';
import SettingsIcon from '@mui/icons-material/Settings';
import SaveIcon from '@mui/icons-material/Save';

import './navigation.scss';
import { saveData } from '../functions/saveData';
import { fetchData } from '../functions/fetchData';

function Navigation() {
    const pages = ['packs', 'cards', 'settings'];
    const location = useLocation();
    const navigate = useNavigate();
    const isMobile = navigator.userAgentData.mobile;
    const [bottomNavValue, setBottomNavValue] = useState(pages.findIndex(page => location.pathname.includes(page)));
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    const goToPage = (page) => {
        navigate(page);
    }

    useEffect(() => {
        if(isMobile && bottomNavValue !== undefined) {
            goToPage(pages[bottomNavValue]);
        }
    }, [bottomNavValue]);

    useEffect(() => {
        const response = localStorage.getItem('libraToppersUser');
        if (response) {
            const user = JSON.parse(response);
            if (!user.token) {
                goToPage('/login');
            } else {
                setUser(user);
            }
        } else {
            goToPage('/login');
        }
    }, []);

    useEffect(() => {
        fetchData().then((cards) => {
            localStorage.setItem('libraToppersAllCards', JSON.stringify(cards));
        });
      }, []);

    const onSaveData = async (userId) => {
        setLoading(true);
        await saveData(userId)
        setLoading(false);
    }

  return (
    <div className={`navigation ${isMobile ? 'mobile' : ''}`}>
        {!isMobile &&<div className='navigation-tab'>
            <div className='navigation-tab-top'>
                {user && <Button disabled={loading} size='large' variant="outlined" onClick={() => onSaveData(user.user?.id)}>
                    {!loading && <><SaveIcon fontSize='large'/>
                    <span>Save</span></>}
                    {loading && <CircularProgress /> }
                </Button> }
            </div>
            <div className='navigation-tab-middle'>
                <Button size='large' variant={location.pathname.includes('packs') ? 'contained' : 'outlined'} onClick={() => goToPage('packs')}>
                    <RedeemIcon fontSize='large'/>
                    <span>Packs</span>
                </Button>
                <Button size='large'  variant={location.pathname.includes('cards') ? 'contained' : 'outlined'} onClick={() => goToPage('cards')}>
                    <StyleIcon fontSize='large'/>
                    <span>Cards</span>
                </Button>
            </div>
            <div className='navigation-tab-bottom'>
                { user?.user?.isAdmin && <Button size='large'  variant={location.pathname.includes('settings') ? 'contained' : 'outlined'} onClick={() => goToPage('settings')}>
                    <SettingsIcon fontSize='large'/>
                    <span>Settings</span>
                </Button> }
            </div>
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
            <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </BottomNavigation>}
        <div className='navigation-container'>
            <Outlet></Outlet>
        </div>
    </div>
  );
}

export default Navigation;
