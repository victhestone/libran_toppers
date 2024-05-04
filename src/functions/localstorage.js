import { VERSION } from "../constants/version";

export const getData = () => {
    let data = localStorage.getItem('libraToppersData');
    if (!data) { return initializeData(); }
    const parsedData = JSON.parse(data);
    return setCardsToMostRecent(parsedData?.cards || []);
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

export const updateUser = (alignment) => {
    const user = localStorage.getItem('libraToppersUser');
    const parsedUser = JSON.parse(user);
    const boosterPackIndex = parsedUser.user.boosterPacks.findIndex(pack => pack.id === alignment);
    parsedUser.user.boosterPacks[boosterPackIndex].amount -= 1;
    localStorage.setItem('libraToppersUser', JSON.stringify(parsedUser));
}

const getAllCards = () => {
    const allCards = localStorage.getItem('libraToppersAllCards');
    if (allCards) {
        return JSON.parse(allCards);
    }
}

export const setCardsToMostRecent = (setCards) => {
    let hasOldCards;
    setCards.forEach((setCard, index) => {
        const recentCard = getAllCards()?.find(card => card.id === setCard.id);
        if (recentCard.version !== setCard.version) {
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