import React from 'react';
import GenericCard from '../generic/generic-card';

import './card-overview.scss';
import { getData } from '../functions/localstorage';

function CardOverview() {
  const data = getData();

  return (
    <div className='card-overview'>
      <div className='card-overview-container'>
        {!data.cards.length && <span>Open some packs to unlock cards!</span>}
        {data.cards.map(card => <GenericCard card={card}/>) }
      </div>
    </div>
  );
}

export default CardOverview;
