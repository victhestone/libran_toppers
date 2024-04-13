import { ALL_CARDS } from "../constants/cards";
import { TYPES } from "../constants/types";

const chances = {
    platinum: 1,
    gold: 10,
    silver: 89
}

const platinumCards = ALL_CARDS.filter(card => card.type === TYPES.Platinum);
const goldCards = ALL_CARDS.filter(card => card.type === TYPES.Gold);
const silverCards = ALL_CARDS.filter(card => card.type === TYPES.Silver);

const getPlatinumCard = () => {
    const randomNumber = Math.random() * platinumCards.length;
    return platinumCards[Math.floor(randomNumber)];
}

const getGoldCard = () => {
    const randomNumber = Math.random() * goldCards.length;
    return goldCards[Math.floor(randomNumber)];
}

const getSilverCard = () => {
    const randomNumber = Math.random() * silverCards.length;
    return silverCards[Math.floor(randomNumber)];
}

export const openLucarianPack = () => {
    const packCards = Array.from(Array(5).keys())
    packCards.forEach((card, index) => {
        const randomNumber = Math.random() * 100;
        if (randomNumber < chances.platinum) {
            packCards[index] = getPlatinumCard();
        }
        else if (randomNumber < chances.gold) {
            packCards[index] = getGoldCard();
        }
        else {
            if (index === (packCards.length - 1)) {
                const hasAlreadyReceivedGold = packCards.some(card => card?.type === TYPES.Gold);
                if(!hasAlreadyReceivedGold) {
                    packCards[index] = getGoldCard()
                } else {
                    packCards[index] = getSilverCard();
                }
            } else {
                packCards[index] = getSilverCard();
            }
        }
    });
    return packCards;
}