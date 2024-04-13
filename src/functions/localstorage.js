import { ALL_CARDS } from "../constants/cards";
import { VERSION } from "../constants/version";

export const getData = () => {
    let data = localStorage.getItem('libraToppersData');
    if (!data) { return initializeData(); }
    const parsedData = JSON.parse(data);
    return setCardsToMostRecent(parsedData.cards);
}

export const initializeData = () => {
    const data = {
        version: VERSION,
        cards: [],
    };
    setData(data);
    return data;
}

export const setData = (data) => {
    const stringData = JSON.stringify(data);
    localStorage.setItem('libraToppersData', stringData);
}

export const updateCards = (newCards) => {
    const data = getData();
    const exisitingCards = data.cards;
    newCards.forEach((newCard) => {
        const existingCardIndex = exisitingCards.findIndex(existingCard => newCard.id === existingCard.id);
        if (existingCardIndex !== -1) {
            exisitingCards[existingCardIndex].amount += 1;
        } else {
            newCard.amount = 1;
            exisitingCards.push(newCard);
        }
    });
    const updatedData = {
        version: VERSION,
        cards: exisitingCards
    }
    setData(updatedData);
}

export const setCardsToMostRecent = (setCards) => {
    let hasOldCards;
    setCards.forEach((setCard, index) => {
        const recentCard = ALL_CARDS.find(card => card.id === setCard.id);
        if (recentCard.version !== setCard.version) {
            console.log('setCard', setCard);
            recentCard.amount = setCard.amount;
            setCards[index] = recentCard;
            hasOldCards = true;
        }
    });

    const data = {
        version: VERSION,
        cards: setCards,
    };

    if (hasOldCards) {
        setData(data);
    }

    return data;
}