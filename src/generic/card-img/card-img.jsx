import { CardMedia } from '@mui/material';
import React from 'react';
import './card-img.scss';

function CardImg({ cardName, cardImg }) {
  return (
    <div className='card-img'>
        <CardMedia
            component="img"
            height="256"
            width="256"
            image={cardImg}
            alt={cardName}
        />
    </div>

  );
}

export default CardImg;
