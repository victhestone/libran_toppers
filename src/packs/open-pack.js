import { TYPES } from "../constants/types";

// 10000

const chances = {
    legendary: 1,
    platinum: 10,
    gold: 100,
    silver: 1_000,
    standard: 8_889
}

const getCardType = (filterType, filterAlignment) => {
    const allCards = localStorage.getItem('libraToppersAllCards');
    if (allCards) {
        const cards = JSON.parse(allCards);
        return cards.filter(card => card.type === filterType && card.alignment === filterAlignment);
    }
};

const getLegendaryCard = (filterAlignment) => {
    const legendaryCards = getCardType(TYPES.Legendary, filterAlignment);
    const randomNumber = Math.random() * legendaryCards.length;
    return legendaryCards[Math.floor(randomNumber)];
}

const getPlatinumCard = (filterAlignment) => {
    const platinumCards = getCardType(TYPES.Platinum, filterAlignment);
    const randomNumber = Math.random() * platinumCards.length;
    return platinumCards[Math.floor(randomNumber)];
}

const getGoldCard = (filterAlignment) => {
    const goldCards = getCardType(TYPES.Gold, filterAlignment);
    const randomNumber = Math.random() * goldCards.length;
    return goldCards[Math.floor(randomNumber)];
}

const getSilverCard = (filterAlignment) => {
    const silverCards = getCardType(TYPES.Silver, filterAlignment);
    const randomNumber = Math.random() * silverCards.length;
    return silverCards[Math.floor(randomNumber)];
}

const getStandardCard = (filterAlignment) => {
    const standardCards = getCardType(TYPES.Standard, filterAlignment);
    const randomNumber = Math.random() * standardCards.length;
    return standardCards[Math.floor(randomNumber)];
}

export const openPack = (filterAlignment) => {
    const packCards = Array.from(Array(10).keys())
    packCards.forEach((card, index) => {
        const randomNumber = Math.random() * 10_000;
        if (randomNumber < chances.legendary) {
            packCards[index] = getLegendaryCard(filterAlignment);
        } else if (randomNumber < chances.platinum) {
            packCards[index] = getPlatinumCard(filterAlignment);
        } else if (randomNumber < chances.gold) {
            packCards[index] = getGoldCard(filterAlignment);
        } else if (randomNumber < chances.silver) {
            packCards[index] = getSilverCard(filterAlignment);
        } else {
            packCards[index] = getStandardCard(filterAlignment);
        }
    });
    return packCards;
}