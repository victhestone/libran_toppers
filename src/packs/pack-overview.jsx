import React from 'react';
import { Button } from '@mui/material';
import './pack-overview.scss';

import cover from '../assets/cover.jpg';
import boosterBox from '../assets/booster-box.png';
import { openLucarianPack } from './open-pack';
import { GOTHURIAL, LUCARIAN, NEUTRAL } from '../constants/alignment';
import GenericCard from '../generic/generic-card';
import { updateCards } from '../functions/localstorage';

function PackOverview() {
  const [receivedCards, setReceivedCards] = React.useState([]);

  const openPack = (type) => {
    let cards;
    if(type === LUCARIAN) {
      cards = openLucarianPack()
    } else if (type === GOTHURIAL) {
      // setReceivedCards(openLucarianPack());
    } else if (type === NEUTRAL) {
      // setReceivedCards(openNeutralPack());
    }
    setReceivedCards(cards);
    updateCards(cards)
  }

  const getBoosterPacks = () => {
    const user = localStorage.getItem('libraToppersUser');
    const parsedUser = JSON.parse(user);
    return parsedUser?.boosterPacks || 0;
  }

  return (
    <>
      {!receivedCards.length && <div className='pack'>
        <div className='pack-counter'>
          <div className='booster-packs'>
            <img src={boosterBox} alt="Booster box"></img>
            <span>{ getBoosterPacks() }</span>
          </div>
        </div>
        <div className='pack-img'>
          <img src={cover} alt="Packs cover"/>
        </div>
        <div className='pack-buttons'>
          <Button onClick={() => openPack(LUCARIAN)} className='lucarian' size='large' variant='contained'>
            Open Lucarian pack
          </Button>
          <Button onClick={() => openPack(NEUTRAL)} disabled className='neutral' size='large' variant='contained'>
            Open Neutral pack
          </Button>
          <Button onClick={() => openPack(GOTHURIAL)} disabled className='gothurian' size='large' variant='contained'>
            Open Gothurian pack
          </Button>
        </div>
      </div>}
      {!!receivedCards.length && 
        <div className='cards'>
          <div className='cards-overview'>
            {receivedCards.map((card) =>
              <GenericCard card={card} />
            )}
          </div>
          <Button onClick={() => setReceivedCards([])} size='large' variant='contained'>
            CLOSE
          </Button>
        </div>
      }
    </>
  );
}

export default PackOverview;
