import { FormControl, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FACTIONS } from '../../constants/factions';
import { TYPES } from '../../constants/types';
import { ALIGNMENTS } from '../../constants/alignment';

import './add-card.scss';
import GenericCard from '../../generic/generic-card';

export function AddCard() {
    const [card, setCard] = useState({ abilities: [] });

    const handleChangeId = (event) => {
        setCard({ ...card, id: event.target.value });
    };

    const handleChangeName = (event) => {
        setCard({ ...card, name: event.target.value });
    };

    const handleChangeRed = (event) => {
        setCard({ ...card, red: event.target.value });
    };

    const handleChangeBlue = (event) => {
        setCard({ ...card, blue: event.target.value });
    };

    const handleChangeAlignment = (event) => {
        setCard({ ...card, alignment: event.target.value });
    };

    const handleChangeRarity = (event) => {
        setCard({ ...card, type: event.target.value });
    };

    const handleChangeFaction = (event) => {
        setCard({ ...card, faction: event.target.value });
    };

    const getImg = () => {
        if (card.id && card.type && !card.img) {
            import(`../../assets/${card.type}/${card.id}.png`).then(img => {
                if (img) {
                    setCard({ ...card, img: img.default });
                }
            }).catch(() => {});
        }
    }

    useEffect(() => {
        getImg();
    }, [card])

    return(
        <div className='add-card'>
            <div>
                <GenericCard card={card}/>
            </div>
            <div className='add-card-form'>
                <h4>Add Card</h4>
                <TextField id="card-id" label="Card Id" variant="outlined" onChange={handleChangeId} />
                <TextField id="card-name" label="Name" variant="outlined" onChange={handleChangeName} />
                <div className='add-card-numbers'>
                    <TextField type='number' id="card-blue" label="Vitality" variant="outlined" onChange={handleChangeRed} />
                    <TextField type='number' id="card-red" label="Attack" variant="outlined" onChange={handleChangeBlue} />
                </div>
                <FormControl fullWidth>
                    <InputLabel>Alignment</InputLabel>
                    <Select
                        labelId="card-alignment"
                        id="card-alignment"
                        label="Alignment"
                        onChange={handleChangeAlignment}
                    >
                        {ALIGNMENTS.map((alignment) => <MenuItem value={alignment}>{alignment}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel>Rarity</InputLabel>
                    <Select
                        labelId="card-rarity"
                        id="card-rarity"
                        label="Rarity"
                        onChange={handleChangeRarity}
                    >
                        {Object.values(TYPES).map((type) => <MenuItem value={type}>{type}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel>Faction</InputLabel>
                    <Select
                        labelId="card-faction"
                        id="card-faction"
                        label="Faction"
                        onChange={handleChangeFaction}
                    >
                        {Object.values(FACTIONS).map((faction) => <MenuItem value={faction}>{faction}</MenuItem>)}
                    </Select>
                </FormControl>
                <Button variant='contained'>Submit</Button>
            </div>
        </div>
    )
}