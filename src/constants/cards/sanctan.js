import { LUCARIAN } from "../alignment";
import { FACTIONS } from "../factions";
import { TYPES } from "../types";

import sanctus from '../../assets/platinum/sanctus.png';

import priestOfSanctus from '../../assets/silver/priest-of-sanctus.png';
import soldierOfSanctus from '../../assets/silver/soldier-of-sanctus.png';
import { SANCTUS_PROTECTOR } from "../abilities/unique";

const SANCTUS = { 
    id: 'sanctus',
    name: 'Sanctus',
    type: TYPES.Platinum,
    faction: FACTIONS.Sanctan,
    alignment: LUCARIAN,
    img: sanctus,
    red: 9,
    blue: 7, 
    quote: 'Proclus please stop calling me',
    abilities: [SANCTUS_PROTECTOR],
    version: 1,
}

const SOLDIER_OF_SANCTUS = { 
    id: 'sanctusSoldier',
    name: 'Soldier of Sanctus',
    type: TYPES.Silver,
    faction: FACTIONS.Sanctan,
    alignment: LUCARIAN,
    img: soldierOfSanctus,
    red: 1,
    blue: 1, 
    quote: 'I used to be an adventurer like you, until I took an arrow in the knee',
    abilities: [],
    version: 1,
}

const PRIEST_OF_SANCTUS = { 
    id: 'priestSanctus',
    name: 'Priest of Sanctus',
    type: TYPES.Silver,
    faction: FACTIONS.Sanctan,
    alignment: LUCARIAN,
    img: priestOfSanctus,
    red: 1,
    blue: 1, 
    quote: 'Please take care of yourself',
    abilities: [],
    version: 1,
}

export const SANCTAN = [SANCTUS, SOLDIER_OF_SANCTUS, PRIEST_OF_SANCTUS];