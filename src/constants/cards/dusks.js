import { BART_POUNCE, BELLE_RESURRECT, COOKPOT_STAB, FELIX_GUN, GRIFF_JUDGE, NAVARI_DAMAGE, PROCLUS_SHIELD, TILLY_IMMUNITY } from "../abilities/unique";
import { TYPES } from '../types';
import { FACTIONS } from '../factions';
import { LUCARIAN } from "../alignment";

import proclus from '../../assets/gold/proclus.png';
import bart from '../../assets/gold/bart.png';
import belle from '../../assets/gold/belle.png';
import felix from '../../assets/gold/felix.png';
import navari from '../../assets/gold/navari.png';
import tilly from '../../assets/gold/tilly.png';
import griff from '../../assets/gold/griff.png';

import cookpot from '../../assets/silver/cookpot.jpeg';

const PROCLUS = { 
    id: 'proclus',
    name: 'Proclus Lycius',
    type: TYPES.Gold,
    faction: FACTIONS.Dusks,
    alignment: LUCARIAN,
    img: proclus,
    red: 5,
    blue: 1, 
    quote: 'Hey, Proclus here',
    abilities: [PROCLUS_SHIELD],
    version: 1,
}

const BART = { 
    id: 'bart',
    name: 'Bartolomeo Lekayne',
    type: TYPES.Gold,
    faction: FACTIONS.Dusks,
    alignment: LUCARIAN,
    img: bart,
    red: 4,
    blue: 2, 
    quote: 'Honk honk',
    abilities: [BART_POUNCE],
    version: 1,
}

const BELLE = { 
    id: 'belle',
    name: 'Belle Hosoda',
    type: TYPES.Gold,
    faction: FACTIONS.Dusks,
    alignment: LUCARIAN,
    img: belle,
    red: 2,
    blue: 2, 
    quote: 'Ahhh my hair',
    abilities: [BELLE_RESURRECT],
    version: 1,
}

const NAVARI = { 
    id: 'navari',
    name: 'Navari',
    type: TYPES.Gold,
    faction: FACTIONS.Dusks,
    alignment: LUCARIAN,
    img: navari,
    red: 1,
    blue: 5, 
    quote: 'Im a plant',
    abilities: [NAVARI_DAMAGE],
    version: 1,
}

const GRIFF = { 
    id: 'griff',
    name: 'Griff',
    type: TYPES.Gold,
    faction: FACTIONS.Dusks,
    alignment: LUCARIAN,
    img: griff,
    red: 2,
    blue: 3, 
    quote: '*Takes notes*',
    abilities: [GRIFF_JUDGE],
    version: 1,
}

const TILLY = { 
    id: 'tilly',
    name: 'Tilly',
    type: TYPES.Gold,
    faction: FACTIONS.Dusks,
    alignment: LUCARIAN,
    img: tilly,
    red: 2,
    blue: 1, 
    quote: 'Oh look, a hole',
    abilities: [TILLY_IMMUNITY],
    version: 1,
}

const FELIX = { 
    id: 'felix',
    name: 'Felix',
    type: TYPES.Gold,
    faction: FACTIONS.Dusks,
    alignment: LUCARIAN,
    img: felix,
    red: 2,
    blue: 3, 
    quote: 'I never killed anyone',
    abilities: [FELIX_GUN],
    version: 1,
}

const COOKPOT = { 
    id: 'cookpot',
    name: 'Cookpot',
    type: TYPES.Silver,
    faction: FACTIONS.Dusks,
    alignment: LUCARIAN,
    img: cookpot,
    red: 1,
    blue: 1, 
    quote: 'STAB',
    abilities: [COOKPOT_STAB],
    version: 1,
}


export const DUSKS = [PROCLUS, BART, BELLE, NAVARI, FELIX, GRIFF, TILLY, COOKPOT];