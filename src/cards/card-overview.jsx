import React, { useEffect, useMemo, useState } from 'react';
import GenericCard from '../generic/generic-card';

import './card-overview.scss';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { ALIGNMENTS, ALL } from '../constants/alignment';
import { TYPES } from '../constants/types';
import { FACTIONS } from '../constants/factions';

function CardOverview({ isAllCardsOverview }) {
  const allCards = useMemo(() => {
    if (isAllCardsOverview) {
      const allCards = localStorage.getItem('libraToppersAllCards');
      if (allCards) {
        const data = JSON.parse(allCards);
        return data || []
      } else {
        return [];
      }
    } else {
      const userCards = localStorage.getItem('libraToppersData');
      if (userCards) {
        const data = JSON.parse(userCards);
        return data?.cards || [];
      } else {
        return [];
      }
    }
  }, []);
  const [cards, setCards] = useState(allCards);
  const [alignment, setAlignment] = useState(ALL)
  const [rarity, setRarity] = useState(TYPES.All);
  const [search, setSearch] = useState('');
  const [faction, setFaction] = useState(FACTIONS.All);

  const handleChangeAlignment = (event) => {
    setAlignment(event.target.value);
  };

  const handleChangeRarity = (event) => {
    setRarity(event.target.value);
  };

  const handleChangeFaction = (event) => {
    setFaction(event.target.value);
  };

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (!allCards) return;

    let filteredCards = allCards;

    if (search) {
      filteredCards = filteredCards.filter(card => card.name.toLowerCase().includes(search));
    }

    if (alignment !== ALL) {
      filteredCards = filteredCards.filter(card => card.alignment === alignment);
    }

    if (rarity !== TYPES.All) {
      filteredCards = filteredCards.filter(card => card.type === rarity);
    }

    if (faction !== FACTIONS.All) {
      filteredCards = filteredCards.filter(card => card.faction === faction);
    }

    setCards(filteredCards);
  }, [allCards, search, alignment, rarity, faction])


  return (
    <div className='card-overview'>
      <div className='card-overview-title'>
        <div className='card-overview-title-search'>
          <TextField value={search} onChange={handleChangeSearch} label="name" variant="outlined" />
        </div>
        <div className='card-overview-title-dropdowns'>
          <FormControl fullWidth>
            <InputLabel>Alignments</InputLabel>
            <Select
              labelId="alignment-select-label"
              value={alignment}
              label="Alignment"
              onChange={handleChangeAlignment}
            >
              {ALIGNMENTS.map(alignment => <MenuItem value={alignment}>{alignment}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Rarity</InputLabel>
            <Select
              labelId="rarity-select-label"
              value={rarity}
              label="rarity"
              onChange={handleChangeRarity}
            >
              {Object.values(TYPES).map(type => <MenuItem value={type}>{type}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Factions</InputLabel>
            <Select
              labelId="faction-select-label"
              value={faction}
              label="rarity"
              onChange={handleChangeFaction}
            >
              {Object.values(FACTIONS).map(type => <MenuItem value={type}>{type}</MenuItem>)}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='card-overview-container'>
        {!cards?.length && <span>Open some packs to unlock cards!</span>}
        {cards.map(card => <GenericCard card={card}/>) }
      </div>
    </div>
  );
}

export default CardOverview;
