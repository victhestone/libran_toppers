import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import CardImg from './card-img/card-img';
import './generic-card.scss';

function GenericCard({ card }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const getFontSizeText = (text) => {
    if(text.length > 200) {
      return '10px';
    } else if (text.length > 100) {
      return '12px';
    } else {
      return '14px'
    }
  }
  
  return (
    <Card className={`card card-${card.type}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => { setIsHovered(false) }}>
      <div className='card-red'><div  className='card-red-text'>{ card.red }</div></div>
      <div className='card-blue'><div className='card-blue-text'>{ card.blue }</div></div>
      <CardContent><Typography variant='h6' align="center">{ card.name }</Typography></CardContent>
      <CardImg cardImg={card.img} cardName={card.name} />
      <CardContent className='card-text'>
        <div className='card-text-container'>
          {card.abilities.map((ability) =>
            <div>
              <Typography variant='b'>
                {ability.name}
              </Typography>
              <Typography style={{ fontSize: getFontSizeText(ability.description) }} component='div'>
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
          <Typography component='i'>
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
