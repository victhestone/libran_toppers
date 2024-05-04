import React from 'react';
import { Button } from '@mui/material';
import './pack-overview.scss';

import cover from '../assets/cover.jpg';
import boosterBox from '../assets/booster-box.png';
import { openPack } from './open-pack';
import { GOTHURIAL, LUCARIAN, NEUTRAL } from '../constants/alignment';
import GenericCard from '../generic/generic-card';
import { updateCards, updateUser } from '../functions/localstorage';

function PackOverview() {
  const [receivedCards, setReceivedCards] = React.useState([]);
  const [boosterPacks, setBoosterPacks] = React.useState([]);

  const onOpenPack = (type) => {
    let cards;
    if(type === LUCARIAN) {
      cards = openPack(LUCARIAN)
    } else if (type === GOTHURIAL) {
      setReceivedCards(openPack(GOTHURIAL));
    } else if (type === NEUTRAL) {
      setReceivedCards(openPack(NEUTRAL));
    }
    setReceivedCards(cards);
    updateCards(cards);
    updateUser(type);
    const boosterPackIndex = boosterPacks.findIndex(pack => pack.id === type);
    const clonedBoosterPacks = [ ...boosterPacks ];
    clonedBoosterPacks[boosterPackIndex].amount -= 1;
    setBoosterPacks(clonedBoosterPacks);
  }

  const getBoosterPacks = () => {
    const user = localStorage.getItem('libraToppersUser');
    const parsedUser = JSON.parse(user);
    return parsedUser?.user.boosterPacks || 0;
  }

  React.useEffect(() => {
    const boosterPacks = getBoosterPacks();
    setBoosterPacks(boosterPacks);
  }, []);

  const getBoosterPacksAmount = (filter) => {
    return boosterPacks.find(pack => pack.id === filter).amount;
  }

  return (
    <>
      {!receivedCards.length && <div className='pack'>
        {boosterPacks.length && <div className='pack-counter'>
          <div className='booster-packs lucarian'>
            <img src={boosterBox} alt="Booster box"></img>
            <span>{ getBoosterPacksAmount(LUCARIAN) }</span>
          </div>
          <div className='booster-packs neutral'>
            <img src={boosterBox} alt="Booster box"></img>
            <span>{ getBoosterPacksAmount(NEUTRAL) }</span>
          </div>
          <div className='booster-packs gothurian'>
            <img src={boosterBox} alt="Booster box"></img>
            <span>{ getBoosterPacksAmount(GOTHURIAL) }</span>
          </div>
        </div>}
        <div className='pack-img'>
          <img src={cover} alt="Packs cover"/>
        </div>
        {boosterPacks.length && <div className='pack-buttons'>
          <Button disabled={getBoosterPacksAmount(LUCARIAN) < 1} onClick={() => onOpenPack(LUCARIAN)} className='lucarian' size='large' variant='contained'>
            Open Lucarian pack
          </Button>
          <Button disabled={getBoosterPacksAmount(NEUTRAL) < 1} onClick={() => onOpenPack(NEUTRAL)} className='neutral' size='large' variant='contained'>
            Open Neutral pack
          </Button>
          <Button disabled={getBoosterPacksAmount(GOTHURIAL) < 1} onClick={() => onOpenPack(GOTHURIAL)} className='gothurian' size='large' variant='contained'>
            Open Gothurian pack
          </Button>
        </div>}
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
