import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import CardImg from './card-img/card-img';
import './generic-card.scss';

function GenericCard({ card }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <Card className={`card card-${card.type}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => { setIsHovered(false) }}>
      <div className='card-red'><div  className='card-red-text'>{ card.red }</div></div>
      <div className='card-blue'><div className='card-blue-text'>{ card.blue }</div></div>
      <CardContent><Typography variant='h5' align="center">{ card.name }</Typography></CardContent>
      <CardImg cardImg={card.img} cardName={card.name} />
      <CardContent className='card-text'>
        <div className='card-text-container'>
          {card.abilities.map((ability) =>
            <div>
              <Typography>
                {ability.name}
              </Typography>
              <Typography variant='b'>
                {ability.description}
              </Typography>
            </div>
          )}
        </div>
      </CardContent>
      { isHovered && <div className='card-hovered'>
        <div className='card-hovered-quote'>
          <Typography>
            {card.quote}
          </Typography>
          <Typography variant='b'>
            {card.name}
          </Typography>
        </div>
        <div>
          Amount owned: {card.amount || 1}
        </div>
      </div> }
    </Card>
  );
}

export default GenericCard;
