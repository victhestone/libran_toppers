import { FormControl, InputLabel, MenuItem, Select, TextField, Button, IconButton, Divider, FormControlLabel, Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FACTIONS } from '../../constants/factions';
import { TYPES } from '../../constants/types';
import { ALIGNMENTS } from '../../constants/alignment';

import './add-card.scss';
import GenericCard from '../../generic/generic-card';
import { Add, Delete } from '@mui/icons-material';
import { addCards } from '../../functions/addCards';
import { addCard } from '../../functions/addCard';

export function AddCard() {
    const [card, setCard] = useState({ abilities: [], version: 1 });
    const [abilities, setAbilities] = useState([]);
    const [newAbility, setNewAbility] = useState({});
    const [multiple, setMultiple] = useState(false);
    const [cards, setCards] = useState([]);

    const handleChangeId = (event) => {
        setCard({ ...card, id: event.target.value });
    };

    const handleChangeName = (event) => {
        setCard({ ...card, name: event.target.value });
    };

    const handleChangeQuote = (event) => {
        setCard({ ...card, quote: event.target.value });
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
        setCard({ ...card, faction: [event.target.value] });
    };

    const handleChangeAbilityId = (event) => {
        setNewAbility({ ...newAbility, id: event.target.value });
    };

    const handleChangeAbilityName = (event) => {
        setNewAbility({ ...newAbility, name: event.target.value });
    };

    const handleChangeAbilityDescription = (event) => {
        setNewAbility({ ...newAbility, description: event.target.value });
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

    const deleteAbility = (ability) => {
        const newAbilities = abilities.filter(a => a.id === ability.id);
        setAbilities(newAbilities);
    }

    const addAbility = () => {
        setAbilities([...abilities, newAbility]);
        setNewAbility({});
        setCard({ ...card, abilities: [...abilities, newAbility] })
    }

    useEffect(() => {
        getImg();
    }, [card])

    const save = async () => {
        try {
            if (multiple) {
                await addCards(cards)
            } else {
                await addCard(card)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    return(
        <div className='add-card'>
            <div>
                <FormControlLabel control={<Switch onChange={(event) => setMultiple(event.target.checked)} />} label="Multiple" />
                <GenericCard card={card}/>
            </div>
            <div className='add-card-form'>
                <h4>Add Card</h4>
                <TextField id="card-id" label="Card Id" variant="outlined" onChange={handleChangeId} value={card.id} />
                <TextField id="card-name" label="Name" variant="outlined" onChange={handleChangeName} value={card.name} />
                <TextField id="card-quote" label="Quote" variant="outlined" onChange={handleChangeQuote} value={card.quote}  />
                <div className='add-card-numbers'>
                    <TextField type='number' id="card-red" label="Vitality" variant="outlined" onChange={handleChangeRed} value={card.red} />
                    <TextField type='number' id="card-blue" label="Attack" variant="outlined" onChange={handleChangeBlue} value={card.blue} />
                </div>
                <FormControl fullWidth>
                    <InputLabel>Alignment</InputLabel>
                    <Select
                        labelId="card-alignment"
                        id="card-alignment"
                        label="Alignment"
                        onChange={handleChangeAlignment}
                        value={card.alignment}
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
                        value={card.rarity}
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
                        value={card.factions[0]}
                    >
                        {Object.values(FACTIONS).map((faction) => <MenuItem value={faction}>{faction}</MenuItem>)}
                    </Select>
                </FormControl>
                <div>
                    {
                        abilities.map(ability => (
                            <>
                                <TextField id="ability-id" label="Ability id" variant="outlined" disabled value={ability.id} />
                                <TextField id="ability-name" label="Ability name" variant="outlined" disabled value={ability.name} />
                                <TextField multiline type='text' id="ability-description" label="Ability description" variant="outlined" disabled value={ability.description} />
                                <IconButton aria-label="add" onClick={() => deleteAbility(ability)}>
                                    <Delete />
                                </IconButton>
                                <Divider />
                            </>
                        ))
                    }
                    <TextField id="ability-id" label="Ability id" variant="outlined" onChange={handleChangeAbilityId} value={newAbility.id}/>
                    <TextField id="ability-name" label="Ability name" variant="outlined" onChange={handleChangeAbilityName} value={newAbility.name}/>
                    <TextField multiline type='text' id="ability-description" label="Ability description" variant="outlined" onChange={handleChangeAbilityDescription} value={newAbility.description}/>
                    <IconButton aria-label="add" onClick={() => addAbility()}>
                        <Add />
                    </IconButton>
                </div>
                {multiple ? <Button onClick={() => { setCards([...cards, card]); setCard({ abilities: [], version: 1 }); }} variant='contained'>Add</Button> : <Button onClick={save} variant='contained'>Submit</Button> }
                {multiple && <div>
                        <div>{ JSON.stringify(cards) }</div>
                        <Button onClick={save} variant='contained'>Submit</Button>
                    </div>
                }
            </div>
        </div>
    )
}