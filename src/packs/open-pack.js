import { TYPES } from "../constants/types";

const chances = {
    platinum: 1,
    gold: 10,
    silver: 89
}

const getCardType = (filterType) => {
    const allCards = localStorage.getItem('libraToppersAllCards');
    if (allCards) {
        const cards = JSON.parse(allCards);
        return cards.filter(card => card.type === filterType);
    }
}; 

const getPlatinumCard = () => {
    const platinumCards = getCardType(TYPES.Platinum);
    const randomNumber = Math.random() * platinumCards.length;
    return platinumCards[Math.floor(randomNumber)];
}

const getGoldCard = () => {
    const goldCards = getCardType(TYPES.Gold);
    const randomNumber = Math.random() * goldCards.length;
    return goldCards[Math.floor(randomNumber)];
}

const getSilverCard = () => {
    const silverCards = getCardType(TYPES.Silver);
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